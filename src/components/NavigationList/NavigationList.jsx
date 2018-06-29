import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import 'style-extra/util.css';
import './NavigationList.css';

class NavigationList extends Component {

	constructor(props) {
		super(props);
    }

	render() {
        const navigationList = this.props.routes.map((navItem) => {
            return (<li key={navItem.index}><NavLink className="u-meta Navigation" to={'/' + navItem.url} activeClassName="ActiveNavigation">{navItem.name}</NavLink></li>);
        });
		return (
            <nav>
                <ul>
                    {navigationList}
                </ul>
		    </nav>
		);
	}
}

NavigationList.defaultProps = {};

NavigationList.PropTypes = {
	routes: PropTypes.object.isRequired
};

export default NavigationList;
