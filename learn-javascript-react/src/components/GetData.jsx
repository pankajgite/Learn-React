import { useState, useEffect } from "react";

function GetData() {
    const [info, setInfo] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(info);

    return (
        <div>
            {info.map((n) => {
                return (
                    <div key={n.id}>
                        <h3>{n.title}</h3>
                        <p>{n.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GetData;