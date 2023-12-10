import { ReactElement, ReactNode } from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { JsxElement } from "typescript";

const mySwal = withReactContent(Swal)

function modalWithTitle(title : string, content : string | ReactElement) {
    return mySwal.fire({
        title,
        html : content,
        showConfirmButton : false,
        showCloseButton : true
    })
}


function modalToast(content : string, icon : SweetAlertIcon) {
    mySwal.fire({  
       text : content,
       toast : true,
       position : 'top-right',
       icon,
       showConfirmButton : false,
       timer : 2000,
       timerProgressBar : true
    })
}

export {
    modalWithTitle,
    modalToast
}