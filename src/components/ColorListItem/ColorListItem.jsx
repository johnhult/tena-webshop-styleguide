import React, { Component } from 'react';

import Note from 'components/Note/Note.jsx';
import './ColorListItem.css';

class ColorListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
    }

    getVariations = () => {
        return (
            <div className="ColorVariation u-flexCenterLeft">
                <div className={"ColorVariation-square-" + this.props.code.replace('#', 'lighten-')}></div>
                <div className={"ColorVariation-square-" + this.props.code.replace('#', 'darken-')}></div>
                <div className={"ColorVariation-square-" + this.props.code.replace('#', 'secondary-')}></div>
            </div>
        )
    }

	render() {
        const hasVariations = this.props.variations;
        const Variations = hasVariations ? this.getVariations() : null;
		return (
			<div className="ColorListItem">
                <div className="ColorListItem-color">
                    <div className="ColorListItem-circle" style={{backgroundColor: this.props.code}}></div>
                    <code className={"u-meta " + hasVariations ? 'u-standardMargin' : ''}>{this.props.code}</code>
                    {Variations}
                </div>
                <div className="ColorListItem-Note">
                    <Note identifier={this.props.code} parent={this.props.parent} />
                </div>
            </div>
		);
	}
}

ColorListItem.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

ColorListItem.PropTypes = {
//	Example PropTypes:
//	label: PropTypes.string.isRequired,
//	onClick: PropTypes.func,
};

export default ColorListItem;
