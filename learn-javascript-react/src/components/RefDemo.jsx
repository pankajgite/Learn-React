import { useEffect, useRef, useState } from "react";

// function RefDemo() {

//      const inputRef = useRef();

//     function handleFocus() {
//         // focus the input
//         inputRef.current.focus();
//         console.log(inputRef.current.value);
//     }
    
//     return (
//         <div>
//             <input ref={inputRef} />

//             <button onClick={handleFocus}>
//                 Focus Input
//             </button>
//         </div>
//     );
// }

// function Counter() {
//     const [count, setCount] = useState(0);

//     const prevRef = useRef();
//     useEffect(()=>{
//         prevRef.current = count;
        
//     },[count])

//     // create an effect that stores count in the ref

//     return (
//         <div>
//             <h2>Current: {count}</h2>
//             <h2>Previous: {prevRef.current}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// function Login(){
//     const username = useRef(null);
//     const password = useRef(null);

//     function handleSubmit(){
//         console.log("Username: " + username.current.value);
//         console.log("Password: "+password.current.value);
//     }


//     return(
//         <div>
//             <h3>Login</h3>
//             <input ref={username} placeholder="UserName"/>
//             <input ref={password} type="password" placeholder="Password"/>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }


// One final useRef challenge
// Build a component called Timer.
// Requirements:
// - Use useRef
// - When Start is clicked, start a setInterval
// - Every second, print "Running..." in the console
// - When Stop is clicked, stop the interval
// - Do not use useState for the timer ID
// Hint:
// const timerRef = useRef(null);

// You'll need:
// timerRef.current = setInterval(...);

// and:
// clearInterval(timerRef.current);

function Timer() {
    const timerRef = useRef(null);

    function startTimer() {
        if (timerRef.current === null) {
            timerRef.current = setInterval(() => {
                console.log("Running...");
            }, 1000);
        }
    }

    function stopTimer() {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }



    return(
        <div>
            <h3>Timer</h3>
            <button onClick={startTimer}>
                Start
            </button>
            <button onClick={stopTimer}>
                Stop
            </button>
        </div>
    )
}

export default Timer;
            