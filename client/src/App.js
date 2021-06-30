import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Features from './components/Features';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { UserProvider } from './utils/UserContext';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/features" component={Features} />
						</Switch>
					</div>
<<<<<<< HEAD
					{/* <Footer /> */}
				
=======
					

>>>>>>> Shenanigans
				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
