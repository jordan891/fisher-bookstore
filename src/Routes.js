import React from "react";
import {Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
<<<<<<< HEAD
import Books from "./Books/Books";
=======
>>>>>>> 8b8bdb59796351fefef1c50fc023e0fc2eebee25

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
<<<<<<< HEAD
            <Route path ="/books" component={Books} />
        </Switch>
    );
=======
        </Switch>
    )
>>>>>>> 8b8bdb59796351fefef1c50fc023e0fc2eebee25
}