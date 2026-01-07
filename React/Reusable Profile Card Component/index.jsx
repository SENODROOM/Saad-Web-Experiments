export function Card({ name, title, bio }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p className="card-title">{title}</p>
            <p>{bio}</p>
        </div>
    );
}


export function App() {
    const profiles = [
        {
            id: 1,
            name: "Mark",
            title: "Frontend developer",
            bio: "I like to work with different frontend technologies and play video games."
        }
    ];
    return (
        <div className="flex-container">
            {profiles.map((profile) => (
                <Card
                    key={profile.id}
                    name={profile.name}
                    title={profile.title}
                    bio={profile.bio}
                />
            ))}
        </div>
    );
}