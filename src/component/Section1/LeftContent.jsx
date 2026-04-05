import React from "react";
import 'remixicon/fonts/remixicon.css'
import HeroText from "./HeroText";
import ArrowIcon from "./ArrowIcon";
const leftContent = ()=>{
    return (
        <div className="flex flex-col justify-between h-full w-1/3"> 
        <HeroText/>
        <ArrowIcon/>
        </div>
    )
}
export default leftContent;