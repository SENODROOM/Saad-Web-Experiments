const { useState } = React;

export function EventRSVPForm() {
    // State for each input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attendees, setAttendees] = useState(1);
    const [dietary, setDietary] = useState('');
    const [additionalGuests, setAdditionalGuests] = useState(false);

    // State to track submission
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Number of attendees:
                        <input
                            type="number"
                            min="1"
                            value={attendees}
                            required
                            onChange={(e) => setAttendees(Number(e.target.value))}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Dietary preferences:
                        <input
                            type="text"
                            value={dietary}
                            onChange={(e) => setDietary(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Bringing additional guests:
                        <input
                            type="checkbox"
                            checked={additionalGuests}
                            onChange={(e) => setAdditionalGuests(e.target.checked)}
                        />
                    </label>
                </div>

                <button type="submit">Submit RSVP</button>
            </form>

            {submitted && (
                <div style={{ marginTop: '20px' }}>
                    <h3>RSVP Submitted!</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Number of attendees: {attendees}</p>
                    <p>Dietary preferences: {dietary || 'None'}</p>
                    <p>Bringing additional guests: {additionalGuests ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
}
