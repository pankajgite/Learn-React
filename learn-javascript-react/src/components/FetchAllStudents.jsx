import { useState, useEffect } from 'react';
import axios from 'axios';


function GetAllStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function FetchData() {
        try {
            console.log("Fetching data...");
            setLoading(true);
            setError("");

            const response = await axios.get(
                "http://localhost:8080/api/students"
            );

            setStudents(response.data.content);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);
    return (
        <div>
            <h3>All Students</h3>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            
            {!loading && !error && students.length === 0 && <p>No students found</p>}

            {students && students.length > 0 && (
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default GetAllStudents;