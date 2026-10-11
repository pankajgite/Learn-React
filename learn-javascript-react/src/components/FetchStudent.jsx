import{useState} from 'react';

function GetStudentById(){
    const[data, setData] = useState({
        id: "",
        name: "",
        email: "",
        course: ""
    })
    const[gotData, setGotData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function FetchData(event){
        if(event.target.value ===""){
            setGotData(false);
        }else{
            
            try{
                setLoading(true);
                const response = await fetch(`http://localhost:8080/api/students/${event.target.value}`);
                if (!response.ok) {
                    throw new Error("Student not found");
                }
                const data = await response.json();
                
                setData({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    course: data.course
                });
                setGotData(true);
                

            }catch(error){
                
                setData({
                    id: "",
                    name: "",
                    email: "",
                    course: ""
                });
                setGotData(false);
                setError(error.message);
                
            }
            finally {
                setLoading(false);
            }
        }
        
    }
    return(
        <div>
            <input placeholder='Enter Id' onChange={FetchData}/>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {gotData ? <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.course}</td>
                    </tr>
                </tbody>

            </table>: <p>Student not found</p>}
        </div>
    )
}

export default GetStudentById;