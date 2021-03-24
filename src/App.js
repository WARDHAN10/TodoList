import React ,{useState} from "react"
import "./App.css"
import ToDoLists from "./ToDOLists"
const  App = () => {

const [InputList,setInputList] = useState("");
const [item,setitem] = useState([])

const itemEvent = (event) =>{
setInputList(event.target.value)

} 

const listofitems = () =>{
setitem ((olditem) =>{

  return [...olditem,InputList]  
})

setInputList("");
}

const deleteitems = (id)=>{
  console.log("deleting")
 setitem((olditem) =>{
  return olditem.filter((arrElement,index) =>{

  return index !==id
 })


  })

}

return (<>
    <div className="main_div">
      <div className ="center_div">

     <div className = "header_div">
       <h1>ToDO List</h1>
       </div>
    <input type="text" id="in" className = "input_n" placeholder="Add a item " onChange={itemEvent}/>
    <button className="btn_" onClick={listofitems} >+</button>
    
      <ol className="listnew">
        {
          item.map((itemval,index)=>{
              return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteitems} />
          })

        }
      </ol>

    </div>
    </div>
    </>
  );
}

export default App;
