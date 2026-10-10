import {useState} from 'react';

function LoginForm() {

//     Username
// Password

// [ Login ]

// Validation:
// ❌ Username is required
// ❌ Password is required

// or

// ✅ Login successful
    const[formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const[errors, setErrors] = useState({
        username: "",
        password: "",
        login:""
    });

    const[isLoggedIn,setIsLoggedIn]= useState(false);

    function handleSubmit(event){
        event.preventDefault();
        if(formData.username === ""){
            setErrors({...errors, username:"Username is required",login: ""});
        }else if(formData.password === ""){
            setErrors({...errors, password:"Password is required",login: ""});
        }else if(formData.username ==="Pankaj" && formData.password === "1234"){
            setErrors({
                username: "",
                password: "",
                login: ""
            });
            setIsLoggedIn(true);
        }else{
            setErrors({...errors, login:"Username or Password is Wrong!!"})
        }


    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {errors.username && <p>{errors.username}</p>}
                {errors.password && <p>{errors.password}</p>}
                {errors.login && <p>{errors.login}</p>}
                <input placeholder='Enter Username' value={formData.username} onChange={(event) => {
                    setFormData({...formData, username: event.target.value});
                    setErrors({...errors,username: ""});
                    }}/>
                <br />
                <input type='password' placeholder='Enter Password' value={formData.password} onChange={(event) =>{
                    setFormData({...formData, password:event.target.value});
                    setErrors({...errors,password: ""});
                    }}/>
                <br />
                <button type='submit'>Submit</button>

            </form>
            <h3>{isLoggedIn ? "Login successful":""}</h3>

        </div>
    )
}


export default LoginForm;