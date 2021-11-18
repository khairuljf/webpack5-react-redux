import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component{

constructor(props) {
    super(props);


    this.state = {
        description: props.expense ? props.expense.description : '' ,
        note:props.expense ? props.expense.note  : '' ,
        ammount: props.expense ? (props.expense.ammount / 100).toString() : '' ,
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calenderFocused:false,
        error:false
    }

}

    
    onDescriptionChange = (e)=>{

       const description = e.target.value;
       this.setState(()=>({description}))

    }

    onAmmoutChange = (e) =>{

        const ammount = e.target.value;
        if(ammount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ammount}))
        }
    }

    onChangeNote =(e) =>{
        const note =  e.target.value

        this.setState(()=>({note}))
    }

    onDateChanged = (createdAt)=>{
       if(createdAt){
           this.setState(()=>({createdAt}))
       }
    }

    onFocusChanged = ({focused})=>{
        this.setState(()=>({calenderFocused:focused}))
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if( !this.state.description || !this.state.ammount){
            this.setState(()=>({error:"Complete the description & ammout"}))
        }else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                note:this.state.note,
                ammount: parseFloat(this.state.ammount, 10) * 100,
                createAt:this.state.createdAt.valueOf()
            })
        }


    }

    render(){
        return(
        <div className="createExpensify">
            {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>

            <div className="input-group">
                <label >Description
                    <input id="description" className="description" type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        />
                </label>
                
           </div>

           <div className="input-group">
                <label >Ammout
                <input id="ammout" className="ammout" type="text"
                    value={this.state.ammount}
                    onChange={this.onAmmoutChange}
                />
                </label>
                
           </div>

            <div className="input-group">
                <label >Note
                    <input id="note" className="note" type="text"
                        value={this.state.note}
                        onChange={this.onChangeNote}
                     />
                </label>
                
           </div>

           <div>
               <SingleDatePicker
                   date={this.state.createdAt}
                   onDateChange={this.onDateChanged}
                   focused={this.state.calenderFocused}
                   onFocusChange={this.onFocusChanged}
                   numberOfMonths={1}
                   isOutsideRange={()=>false}
               />
           </div>
          <br />
         
           
            <button type="submit">Add Expense</button>
        </form>
    </div>
        )
    }

}


