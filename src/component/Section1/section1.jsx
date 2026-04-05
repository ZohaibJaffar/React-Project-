import Navbar from "./Navbar.jsx"
import Page1Content from "./Page1Content.jsx"

const Section1 = (props)=>{
    console.log(props.user[0].img)
    return (
        <div className="h-screen w-full">
            <Navbar/>
            <Page1Content user ={props.user}/>
        </div>
    )
}

export default Section1