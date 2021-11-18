
// Get visible expense

import moment from "moment";

const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) =>{


    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'ammount'){
            return a.ammount < b.ammount ? 1 : -1
        }
    });
     
}


export default getVisibleExpense;