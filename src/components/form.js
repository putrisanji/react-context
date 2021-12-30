import React, {useContext,useState } from 'react'
import { DataContext } from '../context/DataContext'
import {adds} from '../action/ListAction'

const Form = ()=>{
    const {dispatch}=useContext(DataContext)
    const [text, setText]= useState("")
    const change= e=>{
        setText(e.target.value)
    }
    const submit= e=>{
        e.preventDefault()
        dispatch(adds(text))
        setText("")
    }
    return(
        <form onSubmit={submit}>
            <input type='text' value={text} placeholder='Enter your todos'onChange={change}/>
            <button>add</button>

        </form>

    )
}

export default Form;