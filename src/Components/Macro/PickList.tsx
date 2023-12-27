import React from "react"
import PickListItem from "../Micro/PickListItem"
import { Link } from "react-router-dom";


export default function PickList () {

    const pickListItemArray : React.ReactNode[] = [];

    for(let i = 0; i < 80; i++) {
        pickListItemArray.push(<PickListItem key={`uuid+${i}`} />)
    }


    return <div style={
        {
            borderRight : '2px dashed white'
        }
    }  className=" xl:w-[50vw] dark:text-white w-[100vw] gap-10 h-screen overflow-y-scroll xl:p-8 flex flex-col ">
        <h3 className="flex flex-row content-center justify-center mt-5 text-lg font-extrabold dark:underline">More suggestions</h3>
        {
            pickListItemArray
        }
       
    <Link className="self-center text-green-500 underline" to='/'>Go Back Home</Link>
    </div>
}