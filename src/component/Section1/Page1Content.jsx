import React from "react";
import LeftContent from "./LeftContent.jsx"
import RightContent from './RigthContent.jsx'

const Page1Content = (props)=>{
    console.log(props.user[0].tag)
    return (
        <div className="py-10 px-18 flex item-center gap-10 h-[90vh]">
            <LeftContent/>
            <RightContent user={props.user}/>
        </div>
    )
}

export default Page1Content