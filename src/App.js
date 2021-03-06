import Home from './Components/Home/Home'
import Navbar from './Components/Navabr/Nabvar'
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AddJob from './Components/AddJob/AddJob'
import MyJob from './Components/MyJob/MyJob'
import JobApply from './Components/JobApply/JobApply'
import EmployeeAccount from './Components/EmployeeAccount/EmployeeAccount'
import ProcessPayment from './Components/ProcessPayment/ProcessPayment'
import NotFound from './Components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllJobData from './Components/AllJobData/AllJobData'
  ;

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/addJob'>
            <AddJob></AddJob>
          </PrivateRoute>
          <PrivateRoute path='/employeeAccount'>
            <EmployeeAccount />
          </PrivateRoute>
          <PrivateRoute path='/myJobList'>
            <MyJob />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <AllJobData />
          </PrivateRoute>
          <PrivateRoute path='/applyJob/:id'>
            <JobApply />

          </PrivateRoute>
          <PrivateRoute path='/processPayment'>
           <ProcessPayment/>

          </PrivateRoute>
          <Route path='*'>
            <NotFound/>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
