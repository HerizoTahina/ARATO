import '../CSS/Widgets.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LineWeightOutlinedIcon from '@mui/icons-material/LineWeightOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';


const Widgets = ({ type }) => {
    let data;
    const amount = 100;

    switch(type){
        case "user":
            data = {
                title: "USERS",
                link:"Voir tout les utilisateurs",
                icon: <PersonOutlineOutlinedIcon className='Icon' style={{
                    color:"crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.15)",
                }}/>
            };
            break;

            case "actualites":
            data = {
                title: "ACTUALITES",
                link:"Voir tout les actualités",
                icon: <LineWeightOutlinedIcon className='Icon' style={{
                    color:"goldenrod",
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                }}/>
            };
            break; 

            case "projets":
                data = {
                    title: "PROJETS",
                    link:"Voir tout les projets",
                    icon: <AccountTreeOutlinedIcon className='Icon' style={{
                        color:"green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                    }}/>
                };
                break; 

                case "axes strategiques":
                data = {
                    title: "AXES STRATEGIQUES",
                    link:"Voir tout les axes stratégiques",
                    icon: <DynamicFormOutlinedIcon className='Icon' style={{
                        color:"purple",
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                    }}/>
                };
                break; 
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                {data.icon} 
            </div>
        </div>
    );
};

export default Widgets;