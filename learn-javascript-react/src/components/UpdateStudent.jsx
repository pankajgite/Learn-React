import { useState  } from "react";
import axios from "axios";

function UpdateStudent(){

    

    const[data, setData] = useState({
        id: "",
        name: "",
        email: "",
        course: ""
    })
    const[gotData, setGotData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [updated, setUpdated] = useState(false);

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
    async function HandleSubmit(event){
        event.preventDefault();
        try{
            const response = await axios.put(`http://localhost:8080/api/students/${data.id}`, data);
            console.log(response.data);
            setUpdated(true);
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div>
            <h2>Update Student</h2>
            <input placeholder='Enter Id' onChange={FetchData}/>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {gotData ? <form border="1" style={{ width: '100%', borderCollapse: 'collapse' }} onSubmit={HandleSubmit}>
                <input value={data.id} readOnly /> <br/>
                <input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} /><br/>
                <input value={data.email} onChange={(e) => setData({...data, email: e.target.value})} /><br/>
                <input value={data.course} onChange={(e) => setData({...data, course: e.target.value})} /><br/>
                <button type="submit">Update</button>
            </form>: <p>Student not found</p>}
            {updated && <h5>Student Updated With Id {data.id}</h5>}

        </div>
        
    )
}

export default UpdateStudent;