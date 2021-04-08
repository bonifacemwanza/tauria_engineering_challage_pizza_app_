import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ChooseSize from './pages/ChooseSize'
import ChooseCrust from './pages/ChooseCrust'
import ChooseToppings from './pages/ChooseToppings'
import CheckPizza from './pages/CheckPizza'
import Checkout from './pages/Checkout'
import OrderDetails from './pages/OrderDetails'
const App = () => {
  
    return (
        <div className="container">
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <ChooseSize />
                    </Route>
                    <Route exact path="/crust">
                        <ChooseCrust />
                    </Route>
                    <Route exact path="/toppings">
                        <ChooseToppings />
                    </Route>
                    <Route exact path="/checkpizza">
                        <CheckPizza />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                    <Route exact path="/orderdetails">
                        <OrderDetails />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App
