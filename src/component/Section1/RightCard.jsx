import React from "react";
import RightCardContent from "./RightCardContent"

const RightCard = (props)=>{
    return(
        <div className="h-full w-60 relative overflow-hidden shrink-0 bg-red-700 rounded-4xl">
            <img className="h-full w-full object-cover" src={props.img} alt="" />
            <RightCardContent tag ={props.tag} id={props.id} color={props.color}/>
        </div>
    )
}

export default RightCard