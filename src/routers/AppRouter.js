import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Dashboard from '../components/dashboard';
import AddExpense from '../components/AddExpense';
import EditExpensify from '../components/editExpensify';
import HelpFunction from '../components/helpFunction';
import NotFoundPage from '../components/notFoundPage';
import Header from '../components/header';


   const AppRouter = () =>(
    <BrowserRouter>
    <div>
    
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpensify} />
            <Route path="/help" component={HelpFunction}/>
            <Route  component={NotFoundPage}></Route>`
        </Switch>
    </div>
    
   </BrowserRouter>
   )


   
export default   AppRouter;
   
   
   
