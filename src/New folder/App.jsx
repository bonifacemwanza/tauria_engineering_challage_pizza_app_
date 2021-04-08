import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ChooseSize, Choose, ChooseCrust, ChooseToppings, CheckPizza, Checkout } from './pages/Index.js';
import OrderDetails from './pages/OrderDetails'

const App = () => {
  
    return (
        <div>
            <Navbar/>
            <OrderDetails/>
        </div>
        // <Router>
        //     <div className="container">
        //         <Navbar/>
        //         <OrderDetials/>
        //         <Switch>
        //             <Route exact path="/">
        //                <Choose/>
        //             </Route>
        //             <Route exact path="/choosesize">
        //                <ChooseSize/>
        //             </Route>
        //             <Route exact path="/choosecrust">
        //                <ChooseCrust/>
        //             </Route>
        //              <Route exact path="/choosetoppings">
        //                <ChooseToppings/>
        //             </Route>
        //              <Route exact path="/checkpizza">
        //                <CheckPizza/>
        //             </Route>
        //             <Route exact path="/checkout">
        //                <Checkout/>
        //             </Route>
        //         </Switch>
        //     </div>
        // </Router>
    )
}
export default App
