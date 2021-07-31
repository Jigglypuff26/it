import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import StartPage from '../pages/StartPage';
import UserList from '../pages/UserList';

const useRouter = (status) => {
    if(status) {
        return(
            <Switch>
                <Route path="/profile" exact>
                    <ProfilePage/>
                </Route>
                <Route path="/participants" exact>
                    <UserList/>
                </Route>
                <Redirect to="/profile"/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path="/" exact>
                <StartPage/>
            </Route>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
            <Route path="/participants" exact>
                <UserList/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export default useRouter;