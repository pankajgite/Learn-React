import { useState, useEffect } from "react";
import axios from "axios";

function UserDetails() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);

    useEffect(()=>{

        const fetchUser = async() => {
            const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
            console.log(url);
            try{
                const response = await axios.get(url);
                console.log(response.data);
                setUser(response.data);

            }catch(err){
                console.log(err)
            }
        }

        fetchUser();
        

    },[userId]);

    return (
        <div>

            <h2>User ID: {userId}</h2>

            {user && (
                <h3>
                    User: {user.name}
                </h3>
            )}

            <button onClick={() => setUserId(userId + 1)}>
                Next User
            </button>
        </div>
    );
}

export default UserDetails;