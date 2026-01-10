const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

// 1. timeAgo function
function timeAgo(isoTime) {
  const now = new Date();
  const past = new Date(isoTime);
  const diffMs = now - past; // difference in milliseconds
  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

// 2. viewCount function
function viewCount(views) {
  return views >= 1000 ? `${Math.floor(views / 1000)}k` : views;
}

// 3. forumCategory function
function forumCategory(categoryId) {
  let categoryObj = allCategories[categoryId] || { category: 'General', className: 'general' };
  return `<a class="category ${categoryObj.className}" href="${forumCategoryUrl}${categoryObj.className}/${categoryId}">${categoryObj.category}</a>`;
}

// 4. avatars function
function avatars(posters, users) {
  return posters.map(poster => {
    const user = users.find(u => u.id === poster.user_id);
    if (!user) return '';
    const src = user.avatar_template.startsWith('/') ? `${avatarUrl}${user.avatar_template.replace('{size}', '30')}` : user.avatar_template.replace('{size}', '30');
    return `<img src="${src}" alt="${user.name}">`;
  }).join('');
}

// 5. showLatestPosts function
function showLatestPosts(data) {
  const { users, topic_list } = data;
  const topics = topic_list.topics;

  const rows = topics.map(topic => {
    const { id, title, views: topicViews, posts_count, slug, posters, category_id, bumped_at } = topic;
    return `<tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td><div class="avatar-container">${avatars(posters, users)}</div></td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(topicViews)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
  }).join('');

  document.getElementById('posts-container').innerHTML = rows;
}

// 6. fetchData function
async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}

// Call fetchData to populate the table
fetchData();
