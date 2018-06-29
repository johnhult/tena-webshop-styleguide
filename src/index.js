import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import {
	BrowserRouter as Router,
	browserHistory
} from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Content from 'containers/Content/Content.jsx';
import NavigationList from "components/NavigationList/NavigationList.jsx";

const Routes = [
    {index: 0, url: 'color', name: 'Color'},
    {index: 1, url: 'typography', name: 'Typography'},
    {index: 2, url: 'elements', name: 'Elements'}
]

// Here you can add global headers and footers that will stay the same over different pages
const App = () => (
	<div>
		<Main />
	</div>
);


// Add other routes inside Switch to change pages here
const Main = () => (
	<main>
		<div className="TopHeader">
			<h1>Tena Webshop Styleguide</h1>
		</div>
		<div className="ContentWrapper u-flexCenterLeft">
			<NavigationList routes={Routes} />
			<Content />
		</div>
		<ToastContainer transition={Slide} position="bottom-left" autoClose={2000} />
	</main>
);

ReactDOM.render((
	<Router history={browserHistory}>
		<App />
	</Router>
), document.getElementById('root')
);
