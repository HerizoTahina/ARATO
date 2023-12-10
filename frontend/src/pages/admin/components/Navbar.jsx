import React, { useEffect,useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import '../CSS/Navbar.scss';
import AuthUser from '../../../api/AuthUser';
import { togleTheme } from '../../../store/theme.reducer';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
    const [user,setUser] = useState("");
    const {http} = AuthUser();
    const token = sessionStorage.getItem("token");
    const dispatch = useDispatch()
   

    useEffect(()=>{
        // http.post("/profile").then(res => setUser(res.data.data)); 
    },[]);
      



    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon onClick={e => dispatch(togleTheme())}/>
                    </div>
                    <div className="item">
                        <p>{user.name}</p>
                    </div>
                    <div className="item">
                        {/* <img className='profil-picture' src={`http://127.0.0.1:8000/storage/${user.picture}`} alt=''/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;