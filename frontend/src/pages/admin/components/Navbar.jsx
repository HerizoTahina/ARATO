import React, { useEffect,useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import '../CSS/Navbar.scss';
import AuthUser from '../../../api/AuthUser';
import { togleTheme } from '../../../store/theme.reducer';
import { useDispatch, useSelector } from 'react-redux';
import useAuthenticated from '../../../hooks/useAuthenticated';
import { BASE_URL } from '../../../constants/env';
import { useAppSelector } from '../../../hooks/store';


const Navbar = () => {
    const [user,setUser] = useState("");
    const {http} = AuthUser();
    const token = sessionStorage.getItem("token");
    const {currentUser} = useAuthenticated()
    const {isLight} = useAppSelector(state => state.theme)
    const dispatch = useDispatch()
   

    useEffect(()=>{
        // http.post("/profile").then(res => setUser(res.data.data)); 
    },[]);
      



    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon onClick={e => {
                            if (isLight) {
                                dispatch(togleTheme(false))
                            } else {
                                dispatch(togleTheme(true))
                            }
                        }}/>
                    </div>
                    <div className="item">
                        <p>{user.name}</p>
                    </div>
                    <div className="item">
                        <img className='profil-picture' src={`${BASE_URL}${currentUser?.contentUrl}`} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;