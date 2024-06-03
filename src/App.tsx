import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import Todo from "./component/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
           <Todo/>
        </Provider>
    );
}

export default App;
