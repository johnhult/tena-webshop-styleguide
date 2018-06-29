import React, { Component } from 'react';
import SyntaxHighlighter, {
	registerLanguage
} from 'react-syntax-highlighter/light';
import CodeBlock from 'react-copy-code';
import SCSS from 'react-syntax-highlighter/languages/hljs/scss';
import tomorrowNightEighties from 'react-syntax-highlighter/styles/hljs/tomorrow-night-eighties';

registerLanguage('scss', SCSS);

import ColorListItem from 'components/ColorListItem/ColorListItem.jsx';

const colors = [
	{code: '#26588B', hasVariations: true},
	{code: '#E3F0F7'},
	{code: '#3CB550', hasVariations: true},
	{code: '#EF3D3D', hasVariations: true},
	{code: '#373737'},
	{code: '#AAAAAA'},
	{code: '#E0E0E0'},
	{code: '#FFFFFF'},
]

class Color extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		const Colors = colors.map((color, index) => {
			return (
				<ColorListItem key={index} code={color.code} variations={color.hasVariations} parent={this.props.match.url.replace('/', '')} />
			)
		})
		const Code = `$blue: #26588B;

.Button {
	width: 120px;
	height: 40px;
	box-sizing: border-box;
	border-radius: 5px;
	transition: 0.2s;
}

.Button--blue {
	background-color: $blue;
	border: 2px solid $blue;
	&:hover {
		background-color: lighten($blue, 10%);
	}
	&.Button--secondary:hover {
		backgrund-color: rgba($blue, 0.1);
	}
}

.Button--secondary {
	background-color: transparent;
}`
		return (
			<div className="ColorContent">
				<div className="u-standardMargin">
					<h1>Color</h1>
					<p className="u-standardMargin">The colors we use should be limited to the following colors. We use these colors to align the site with other Tena site, while also having our own "branding". By enforcing these rules and keeping a strict color scheme, we will give the customer a consistent experience with a thought out look-and-feel. By using specific colors for specific scenarios we can also give the user a subconscious knowledge of certain actions that can be done.</p>
					<p className="u-standardMargin">Some of the colors include variations. We use these variations when hovering over a button. These variations are either; lightened or darkened by 10%, e.g. lightened when hovering a primanry button; or uses a transparency of the color with 0.1 alpha value, e.g. when hovering a secondary button. This is easily achived with Sass.</p>
					<p className="u-standardMargin">See code example below:</p>
					<CodeBlock highlight svg="null">
						<SyntaxHighlighter
							language="scss"
							className="CodeBlock"
							style={tomorrowNightEighties}
						>
							{Code}
						</SyntaxHighlighter>
					</CodeBlock>
				</div>
                <div className="ColorExamples">
					{Colors}
                </div>
            </div>
		);
	}
}

Color.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

Color.PropTypes = {
//	Example PropTypes:
//	label: PropTypes.string.isRequired,
//	onClick: PropTypes.func,
};

export default Color;
