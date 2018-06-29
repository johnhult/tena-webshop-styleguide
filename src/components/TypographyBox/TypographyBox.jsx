import React, { Component } from 'react';

import './TypographyBox.css';

class TypographyBox extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
        const CustomTag = `${this.props.tag}`;
		return (
			<div>
                <div className="TypoBox u-flexCenterLeft">
                    <CustomTag className={"u-flex1 " + this.props.class}>{this.props.text}</CustomTag>
                    <span className="TypoBox-details">{this.props.size}/{this.props.lineHeight}</span>
                </div>
            </div>
		);
	}
}

TypographyBox.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

TypographyBox.PropTypes = {
//	Example PropTypes:
//	label: PropTypes.string.isRequired,
//	onClick: PropTypes.func,
};

export default TypographyBox;
