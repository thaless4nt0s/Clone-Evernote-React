import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeScreen from "./assets/screens/home"
import RegisterScreen from './assets/screens/auth/register'
import LoginScreen from './assets/screens/auth/login'
import NotesIndexScreen from './assets/screens/notes/index'
import UserEditScreen from "./assets/screens/auth/users/edit"
const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/notes" component={NotesIndexScreen} />
            <Route exact path="/users/edit" component={UserEditScreen}/>
        </Switch>
    </BrowserRouter>
)

export default Routes