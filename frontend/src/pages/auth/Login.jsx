import React,{ useState } from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import NavBar from '../../components/nav-bar';
import AuthUser from '../../api/AuthUser';
import './css/Login.css';


const Login = () => {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {http,setToken} = AuthUser();
    
    const handleLogin = async (e) => {
      e.preventDefault(); 
      const user = {
        email,
        password,
      }
      
    try{
        http.post('/login',user).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    } catch(e){

    } 
    }
     


    return (
        <div className="logs">
            <header>
                <NavBar/>
            </header>
            <div className='all'>
                <form className='champ_form' onSubmit={handleLogin}>
                    <div className='login'>
                         <h3 className='text-center'>Se connecter</h3>
                             <input 
                                className='form-control'
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                type='email' size='lg'                                
                                placeholder='Enter your Email'
                                required/>
                             <input 
                                className='form-control' 
                                type='password' 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                size='lg' 
                                placeholder='Enter your password'
                                required/>

                         <button type='submit' className='signIn'>Connexion</button>
                         
                    </div>
                    <Link to='/register'><button className='btn-create'>Créer un compte</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;