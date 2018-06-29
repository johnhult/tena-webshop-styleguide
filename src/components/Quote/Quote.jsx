import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Quote.css';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className={"Quote " + this.props.className}>
                <h3>{this.props.quote}</h3>
                <span className="u-meta u-inlineBlock u-textRight u-width100">- {this.props.from}, {this.props.source}</span>
            </div>
		);
	}
}

Quote.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

Quote.PropTypes = {
	person: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired
};

export default Quote;
