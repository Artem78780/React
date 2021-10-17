import React from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'


import { Route } from "react-router-dom";
import { Header } from './components/'
import { Home, Cart } from "./components/pages";
import { setPizzas  } from "./redux/action/pizzas";





function App() {

	const dispatch = useDispatch();


	React.useEffect(() =>{
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			dispatch(setPizzas(data.pizzas));
		});
	}, []);

	return(
		<div className="wrapper">
		<Header />
		<div className="content">
			<Route path='/' component ={Home} exact />
			<Route path='/cart' component={Cart} exact />
		</div>
	</div>
	)
} 

export default App;

