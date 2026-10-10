import {useState} from 'react';

function LoginForm() {
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({
        username: "",
        name: "",
        email: ""
    });
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: ""
        });

    function handleSubmit(event){
        event.preventDefault();

        const { username, name, email } = formData;

        if(username === ""){
            setError({...error, username: "Please enter username"});

        }else if(name ===""){
            setError({...error, name: "Please enter name"});
        }else if(email ===""){
            setError({...error, email: "Please enter email"});
        }
        else{
            console.log("UserName is "+username);
            console.log("Name is "+name);
            console.log("Email is " + email);
            setError({
                username: "",
                name: "",
                email: ""
            });

            setSubmitted(true);   
        }

    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        {error.username && <p>{error.username}</p>}
        {error.name && <p>{error.name}</p>}
        {error.email && <p>{error.email}</p>}
        <input
            value={formData.username} placeholder='Enter Username'
            onChange={(event) => {
                setFormData({...formData, username: event.target.value});
                setError({...error, username: ""});
            }}
        />
            <br />
        <input
            value={formData.name} placeholder='Enter Name'
            onChange={(event) => {
                setFormData({...formData, name: event.target.value})
                setError({...error, name: ""});
            }}
        />
        <input
            value={formData.email} placeholder='Enter Email'
            onChange={(event) => {
                setFormData({...formData, email: event.target.value})
                setError({...error, email: ""});
            }}
        />

        <p>Username: {formData.username}</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>

        <button type='submit'>Submit</button>

      </form>
      <h4>{submitted ? "Form Submitted":""}</h4>

    </div>
  );

}

export default LoginForm;