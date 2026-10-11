import {useState, useEffect} from 'react';
import axios from 'axios';
import FetchAllStudents from './FetchAllStudents';

function AddStudent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course:""
        });
    
    const [submitted, setSubmitted] = useState(false);
    const [id, setId]= useState();


    async function HandleSubmit(event){
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/api/students",formData);
            console.log(response.data);
            setId(response.data.id);
            setSubmitted(true);
            GetAllStudents();
        }catch(error){
            console.log(error);
        }

    }

    return(
        <div>
            <h3>Add Student</h3>
            <form onSubmit={HandleSubmit}>
                <input value={formData.name} placeholder='Enter Student Name' 
                    onChange={(event)=> {
                        setFormData({...formData, name: event.target.value})
                        setSubmitted(false);
                        setId();
                    }}/><br />
                <input type="email" value={formData.email} placeholder='Enter Email' 
                    onChange={(event)=> {
                        setFormData({...formData, email: event.target.value})
                        setSubmitted(false);
                        setId();
                    }}/><br />
                <input value={formData.course} placeholder='Course' 
                    onChange={(event)=> {
                        setFormData({...formData, course: event.target.value})
                        setSubmitted(false);
                        setId();

                    }}/><br />
                <button type='submit'>Submit</button>
            </form>
            {submitted && <h5>Student Created with Id {id}</h5>}
        </div>
    )

}

export default AddStudent;