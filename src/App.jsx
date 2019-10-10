import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Form';

function App() {
	return (
		<div className="App">
			<div>
				<h2>Buttons</h2>
				<Button onClick={() => console.log('click Primary')}>Primary</Button>
				<Button
					color="secondary"
					onClick={() => console.log('click Secondary')}
				>
					Secondary
				</Button>
				<Button color="success">Success</Button>
				<Button color="danger">Danger</Button>
				<Button color="warning">Warning</Button>
				<Button color="link">Link</Button>
			</div>

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
