import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/Firebase';
import './LoginPage.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const auth = useAuth()
    const navigate = useNavigate()

    // const handleSubmit = () => {
    //     auth.login(user)
    //     navigate('/', { replace: true });
    // }

    const singIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => { navigate('/') })
            .catch(error => console.error(error));

        console.log(auth);
    }

    return (
        <div className="loginPage">
            <div className='card'>
                <form className="loginForm">
                    <div className="row">
                        <div className="titleForm text-center mb-4">
                            <h1 className="fw-bold fw-5">Login</h1>
                            <p>Login For Dashboard</p>
                        </div>

                        {/* {error && <div className="alert alert-danger" role="alert">
                            Wrong email or password!
                        </div>} */}

                        <div class="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="**********"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <a href="#" className="d-block mb-3">Forget Password</a>
                    <button type="button" className="btn btn-primary w-25 " onClick={singIn}>Login</button>
                </form>
            </div>
        </div>
    );
}
    // return (
    //     <div>
    //         <label>
    //             Username : <input type='text' onChange={(e) => setUser(e.target.value)} />
    //         </label>
    //         <button onClick={handleLogin}>Login</button>
    //     </div>
    // )
