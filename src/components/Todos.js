import React,{useContext} from "react";
import { DataContext } from "../context/DataContext";
import {del} from '../action/ListAction'
const Todos = () => {
    const {lists, dispatch}= useContext(DataContext)
    console.log(lists)
    const remove = id=>{
       dispatch(del(id))
    }
  return (
    <div>
      {lists.map((item)=>(
          <li key={item.id}>
              {item.title}
              <button onClick={()=>remove(item.id)}>x</button>
          </li>
      ))}
    </div>
  );
};

export default Todos;
