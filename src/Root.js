import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Form from './components/Form';
import Smoke from './components/Smoke';
import UserData from './components/UserData';
import Login from './components/Login';
import Create from './components/Create';
 
export default class Root extends Component {
 
    render() {
        return (
            <Router>
                <Stack key="Root">
                    <Scene 
                    key="Login" 
                    component={Login} 
                    hideNavBar 
                    initial
                    />
                    <Scene 
                    key="Form" 
                    component={Form} 
                    hideNavBar 
                    />
                    <Scene 
                    key="Smoke" 
                    component={Smoke} 
                    hideNavBar 
                    />
                    <Scene 
                    key="UserData" 
                    component={UserData} 
                    hideNavBar 
                    />
                    <Scene 
                    key="Create" 
                    component={Create} 
                    hideNavBar 
                    
                    />
                </Stack>
            </Router>
        );
    }
};