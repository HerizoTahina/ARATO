import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        if (tokenString){
            const token = JSON.parse(tokenString);
            return token;
          }else{
            return null;
          }
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }


    const [token, setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) => {
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);

        console.log(user.role);
        if(user.role === 'administrateur'){
            navigate('/home');
        } else navigate('/');
       
       
    }

    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token?.replace(/"/g,"")}`
        }
    });

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }



    const refreshToken = async () => {
        await http.get('/refresh').then((res)=>{
            sessionStorage.setItem('token',JSON.stringify(res.data.token.original.access_token));
            setToken(res.data.token.original.access_token);
            
        })
     }
    // if(token != null && user != null){
    //     setInterval(refreshToken, 3 * 60 * 1000);
    // }    

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}

