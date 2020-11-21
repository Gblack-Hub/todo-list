import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="d-flex justify-content-center align-items-center navbar-light bg-dark p-1">
            <Link className="mr-2 bg-light text-dark py-2 px-4" to="/">Login</Link>
            <Link className="ml-2 bg-light text-dark py-2 px-4" to="/home">Home</Link>
         </nav>
		);
	}
}
