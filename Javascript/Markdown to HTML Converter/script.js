// Function to convert Markdown to HTML
function convertMarkdown() {
    let input = document.getElementById('markdown-input').value;
    let output = input;

    // Convert Headings
    output = output.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    output = output.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    output = output.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Convert Bold (**text** or __text__)
    output = output.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    output = output.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Convert Italic (*text* or _text_)
    output = output.replace(/\*(.+?)\*/g, '<em>$1</em>');
    output = output.replace(/_(.+?)_/g, '<em>$1</em>');

    // Convert Images ![alt](src)
    output = output.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    // Convert Links [text](url)
    output = output.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Convert Blockquotes > text
    output = output.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

    return output;
}

// Event listener for live input
document.getElementById('markdown-input').addEventListener('input', function() {
    const html = convertMarkdown();
    document.getElementById('html-output').textContent = html;
    document.getElementById('preview').innerHTML = html;
});
