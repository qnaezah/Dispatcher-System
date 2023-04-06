import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    // const { singup } = useAuth();
    // const { error, setError } = useState("");
    // const { loading, setLoading } = useState(false);
    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfRef = useRef();
    // const navigate = useNavigate();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (passwordRef.current.value !== passwordConfRef.current.value) {
    //         return setError("passwords do not match");
    //     }
    //     try {
    //         setError("")
    //         setLoading(true);
    //         await singup(emailRef.current.value, passwordRef.current.value);
    //         navigate('/');
    //     }
    //     catch {
    //         setError("Failed to create an account")
    //     }
    //     setLoading(false);
    // };
    return (<></>
        // <div>
        //     <div class="alert alert-danger" role="alert">
        //         A simple danger alert—check it out!
        //     </div>
        //     {error && <div class="alert alert-danger" role="alert">
        //         A simple danger alert—check it out!
        //     </div>}
        //     <form onSubmit={handleSubmit}>
        //         {/* label  */}
        //         {/* input Email => ref= {emailRef} */}
        //         {/* input Password => ref= {passwordRef} */}
        //         {/* input Password Conf => ref= {passworConfdRef} */}
        //         {/* button disapl = loading*/}
        //     </form>
        //     <h1>Sign up Page</h1>
        // </div>
    );
};

export default SignupPage;