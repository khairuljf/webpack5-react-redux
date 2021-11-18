
import uuid from 'react-uuid';

export  const addExpense = ( 
    {
       description='',
       note='',
       ammount=0,
       createAt=0
   }={}) =>({
       type:'ADD_EXPENSE',
       expenses:{
           id:uuid(),
           description,
           note,
           ammount,
           createAt
       }

});


// Remove Expense

export const removeExpense = (id) => ({
   type:'REMOVE_EXPENSE',
   id
})

// Edit Expense 
export const editExpense = (id, update)=>({
   type:'EDIT_EXPENSE',
   id,
   update
})
