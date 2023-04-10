import React from "react";
import classNames from "classnames"
import { event } from "jquery";

const ProfileDrop = ({onClick,children}) => {

    return(
        
        <button 
        onClick = {onClick}
        className={classNames('profile-bnt')}>
            
            {children}

        </button>

    )
    }


export default ProfileDrop;

