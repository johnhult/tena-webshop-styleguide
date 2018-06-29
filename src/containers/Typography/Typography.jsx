import React, { Component } from 'react';

import TypographyBox from 'components/TypographyBox/TypographyBox.jsx';
import CodeSnippet from 'components/CodeSnippet/CodeSnippet.jsx';
import Note from 'components/Note/Note.jsx';
import Quote from 'components/Quote/Quote.jsx';
import './Typography.css';

const headerTypes = [
    {index: 1, tag: 'h1', size: '28px', weight: '900', lineHeight: '50px', text: 'Main Header - This is a page header'},
    {index: 2, tag: 'h2', size: '24px', weight: '900', lineHeight: '38px', text: 'Subpage Header - Section in page/Item name'},
    {index: 3, tag: 'h3', size: '18px', weight: '900', lineHeight: '30px', text: 'Section Header - Header of popup'},
    {index: 4, tag: 'h4', size: '16px', weight: '900', lineHeight: '28px', text: 'Content Header - Header for body text'},
    {index: 5, tag: 'span', size: '14px', weight: '900', lineHeight: '24px', text: 'Meta content - Labels and Buttons (all caps)', class: "u-meta"},
    {index: 6, tag: 'p', size: '16px', weight: '400', lineHeight: '24px', text: 'Content - Body content and bread text'},
]

class Typography extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
    }

	render() {
        const TypeBox = headerTypes.map((header) => {
            return <TypographyBox key={header.index} {...header} />
        })
        const CodeSnippets = headerTypes.map((header) => {
            return (
                <div className="CodeSection" key={header.index}>
                    <CodeSnippet {...header} />
                    <Note identifier={header.class ? header.class : header.tag} parent={this.props.match.url.replace('/', '')} />
                </div>
            )
        })
		return (
			<div className="TypographyContent">
                <div className="u-doubleMargin">
                    <h1>Typography</h1>
                    <p className="u-standardMargin">In the following section the typography of Tena Webshop is explained. Do not deviate from these standards as a breach of these styled elements will cause a disturbancy in the consistency of the page and lower the customer trust and usability of the page.</p>
                    <p className="u-standardMargin">We're using <strong>Helvetica Neue</strong> as our font-family. It's a grotesque sans serif font with a unified set of height and widths. A good standard for web, balanced, and common.</p>
                    <p className="u-standardMargin">Make sure you use the correct header tags as this will increase the chance of ranking higher in page rankings, e.g. Google. SEO (Search Enginge Optimization) takes this into account when calculating the rank.</p>
                    <Quote className="u-standardMargin" from="John Mueller" source="Google 2015" quote="We do use H tags to understand the structure of the text on a page better." />
                    <p>There is no reason to deviate from these standards in text unless the special case of having multiple headlines. This means that if you have a header that need a subheader that also needs some visual treat in order to bring balance to the section, you could use a regular font-weight. However, this should try to be avoided unless explicitly needed. Please use common sense.</p>
                </div>
                <div className="TypographyExamples">
                    {TypeBox}
                </div>
                <div className="TypographyNotes">
                    {CodeSnippets}
                </div>
            </div>
		);
	}
}

Typography.defaultProps = {
//	Example defaultProps
//	label: 'click me'
};

Typography.PropTypes = {
//	Example PropTypes:
//	label: PropTypes.string.isRequired,
//	onClick: PropTypes.func,
};

export default Typography;
