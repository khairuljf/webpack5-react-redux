import React from 'react';
import { connect} from 'react-redux';
import { setTextFilter, sortByAmmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import uuid from "react-uuid";

class  ExpenseListFilters extends  React.Component{



    state ={
        calenderFocused: null,
    }

    onDatesChange = ({startDate, endDate}) =>{
        console.log("Start date onchagne:",startDate)
        console.log("End date onchagne:",endDate)
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusedChanged = (calenderFocused)=>{
        console.log('onFocus', calenderFocused)
        this.setState(()=>({calenderFocused}))
    }

   render() {
       console.log("props : ", this.props)
        return (
            <div>

                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value))

                    }} />

                <select
                    value={this.props.filters.value}
                    onChange={(e) =>{
                        if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        }else if(e.target.value === 'ammout'){
                            this.props.dispatch(sortByAmmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="ammout">Ammout</option>
                </select>
                <div className="date-range-wrap">
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId={uuid()}
                        endDate={this.props.filters.endDate}
                        endDateId={uuid()}

                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusedChanged}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                    />
                </div>



            </div>
        )
   }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);