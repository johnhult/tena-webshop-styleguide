import React, { Component } from 'react';

import TypographyNotes from 'data/TypographyNotes.json';
import ColorNotes from 'data/ColorNotes.json';
import './Note.css';

class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
    }

    getCategory = (category) => {
        switch (this.props.parent) {
            case 'typography':
            return TypographyNotes;
            case 'color':
            return ColorNotes;
            default:
            return null;
        }
    }

	render() {
        const category = this.getCategory(this.props.parent);
		return (
			<div className="NoteWrapper">
                <h4>Notes about {this.props.identifier}</h4>
                {category[this.props.identifier]}
            </div>
		);
	}
}

Note.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

Note.PropTypes = {
//	Example PropTypes:
//	label: PropTypes.string.isRequired,
//	onClick: PropTypes.func,
};

export default Note;
