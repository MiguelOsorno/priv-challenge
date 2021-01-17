import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { PrivScreen } from '../components/priv/PrivScreen';


export const PrivRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    
                    <Route path='/' component={ PrivScreen } />

                </Switch>
            </div>
        </Router>
    )
}
