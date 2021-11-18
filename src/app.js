import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmmount } from './actions/filters';
import getVisibleExpense from './selectors/expenses';

import './styles/styles.scss';

const store = configureStore();
 store.dispatch( addExpense({description:'Gas Bills', ammount:1000}) )
 store.dispatch( addExpense({description:'Water bill', ammount:250}) )
 store.dispatch( addExpense({description:'Electricity Bill', ammount:1500}) )




const state  = store.getState()


//console.log("From App.js", state.expenses)

//const visisbleExpenses =  getVisibleExpense(state.expenses, state.filters)


//console.log(visisbleExpenses)

const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
    
)


ReactDOM.render(jsx, document.getElementById('app'))
