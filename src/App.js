import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/add">
            <AddContact />
          </Route>
          <Route path="/edit/:id">
            <EditContact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
