import Home from './Components/Home/Home'
import Navbar from './Components/Navabr/Nabvar'
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AddJob from './Components/AddJob/AddJob'
import MyJob from './Components/MyJob/MyJob'
import JobApply from './Components/JobApply/JobApply'
import EmployeeAccount from './Components/EmployeeAccount/EmployeeAccount'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 ;

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/addJob'>
          <AddJob></AddJob>
          </PrivateRoute>
          <PrivateRoute path='/employeeAccount'>
          <EmployeeAccount/>
          </PrivateRoute>
          <PrivateRoute path='/myJobList'>
           <MyJob/>
          </PrivateRoute>
          <PrivateRoute path='/applyJob/:id'>
            <JobApply/>
         
          </PrivateRoute>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
