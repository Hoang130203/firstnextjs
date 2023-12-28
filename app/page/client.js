'use client'
import React, { useState } from "react";
import Link from "next/link";
class ComponentC extends React.Component{
    render(){
        return(
            <p>hahah</p>
        )
    }
}
function Func() {
    const value=useState(10)
    const [a,setA]=useState(value[0])
    const handleAdd=()=>{
        value[1](value[0]+1)
    }
    return ( <div>
        {value}
        <ComponentC/>
        <button onClick={handleAdd}>click</button>
        </div> );
}

export default Func;