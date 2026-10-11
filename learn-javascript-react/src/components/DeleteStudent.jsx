import axios from "axios";
import { use, useState } from "react";

function DeleteStudent(){
    const [id, setId]= useState("");
    const [deleted,setDeleted] = useState(false);

    async function HandleSubmit(event){
        event.preventDefault();
        console.log(id);
        try{
            const response = await axios.delete(`http://localhost:8080/api/students/${id}`);
            console.log(response.data);
            setDeleted(true);
        }catch(error){
            console.log(error);
        }
    
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <h2>Delete Student</h2>
                <input value={id} placeholder="Enter Student Id" onChange={(event)=> {
                    setId(event.target.value);
                }}/>
                <br/>
                <button type="submit">Delete</button>
            </form>
            {deleted && <h5>Student Deleted With Id {id}</h5>}
        </div>
    )
}

export default DeleteStudent;