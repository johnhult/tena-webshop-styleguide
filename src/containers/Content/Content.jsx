import React, { Component } from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Color from 'containers/Color/Color.jsx';
import Typography from 'containers/Typography/Typography.jsx';
import Elements from 'containers/Elements/Elements.jsx';

class Content extends Component {
	render() {
		return (
			<section className="MainContent">
				<Switch>
					<Redirect exact from="/" to='/color' />
					<Route exact path="/color" component={Color} />
					<Route exact path="/typography" component={Typography} />
					<Route exact path="/elements" component={Elements} />
				</Switch>
			</section>
		);
	}
}

export default Content;
