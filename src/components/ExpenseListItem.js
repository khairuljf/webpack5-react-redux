import React from 'react';
import {NavLink} from "react-router-dom";
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';


const ExpenseListItem = (props) =>(
    <div>
       <h4>Title: {props.description}</h4>
       ammount: {props.ammount}
        <p>My id is {props.id}</p>
        <NavLink to={`/edit/${props.id}`} >edit</NavLink>
        <button onClick={(e)=>{
            //console.log("delete")
            //console.log(props.id)
           props.dispatch(removeExpense(props.id))
       }}>
        Remove 
       </button>
    </div>

);

export default connect()(ExpenseListItem);
