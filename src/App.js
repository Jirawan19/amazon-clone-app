
import './App.css';
import Header from "./Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login"
import Home from "./Home"

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Router path="/">
                        <Header/>
                        <Home/>
                    </Router>
                </Switch>
            </div>
        </Router>
    )
}

export default App;