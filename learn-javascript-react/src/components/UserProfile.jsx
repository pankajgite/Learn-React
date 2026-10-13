import { useState, useEffect } from "react";

function UserProfile() {
    const [userId, setUserId] = useState(1);
    const [message, setMessage] = useState("");

    // Add your useEffect here
    useEffect(() => {
        console.log("Fetching user:", userId);
        setMessage("Fetching user: " + userId);
    },[userId])

    return (
        <div>
            <h2>User ID: {userId}</h2>
            <h3>{message}</h3>

            <button onClick={() => setUserId(userId + 1)}>
                Next User
            </button>
        </div>
    );
}

export default UserProfile;