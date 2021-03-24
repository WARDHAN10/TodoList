import React from "react"

const ToDOLists=(props)=>{


return <div><li><button className="cross" onClick= {()=> {props.onSelect(props.id)}}>X </button> {props.text}</li></div>


}

export default ToDOLists