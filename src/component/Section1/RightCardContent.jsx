const RightCardContent = (props)=>{
    return(
         <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between">
                <h1 className="bg-white h-10 w-10 rounded-full flex justify-center items-center font-semibold">{props.id}</h1>
                <div>
                    <p className="text-white text-lg leading-normal mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error nostrum necessitatibus illo mollitia qui!</p>
                    <div className="flex justify-between">
                     <button style={{backgroundColor:props.color}} className="text-white  rounded-full px-8 py-2 font-medium  ">{props.tag}</button>
                     <button style={{backgroundColor:props.color}} className="text-white bg-blue-700 rounded-full px-3 py-1 font-medium  "><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>

            </div>
    )
}
 
export default RightCardContent