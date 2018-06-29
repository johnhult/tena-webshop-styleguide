import React, { Component } from 'react';

class Elements extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div>
				<h1>Elements content will be updated shortly.</h1>
			</div>
		);
	}
}

Elements.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

Elements.PropTypes = {
//	Example PropTypes:
//	label: PropTypes.string.isRequired,
//	onClick: PropTypes.func,
};

export default Elements;
