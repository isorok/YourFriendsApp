import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

//import UsersList from './Users/UsersList'
import Users from './users/pages/Users'
import UserFriends from './friends/pages/UserFriends'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import LogIn from './shared/components/LogIn';



const App = () => {
  return <Router>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path='/login' exact>
        <LogIn/>
      </Route>
      <Route path='/users/' exact>
        <Users/>
      </Route>
      {/* <Route path='/:userid/friends' exact>
        <UserFriends/>
      </Route> */}
      <Route path='/friends/' exact>
        <UserFriends/>
      </Route>
      <Redirect to='/users/'/>
    </Switch>
    </main>
  </Router>
    
}

export default App;
