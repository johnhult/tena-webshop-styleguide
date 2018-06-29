import React, { Component } from 'react';
import SyntaxHighlighter, {
	registerLanguage
} from 'react-syntax-highlighter/light';
import CodeBlock from 'react-copy-code';
import { toast } from 'react-toastify';
import SCSS from 'react-syntax-highlighter/languages/hljs/scss';
import tomorrowNightEighties from 'react-syntax-highlighter/styles/hljs/tomorrow-night-eighties';

import './CodeSnippet.css';

registerLanguage('scss', SCSS);

class CodeSnippet extends Component {
	constructor(props) {
		super(props);
    }

    showNotification() {
        toast('🦄 Code copied', {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false
        });
    }

	render() {
		const code = `${this.props.class ? '.' + this.props.class : this.props.tag} {
    font-size: ${this.props.size};
    line-height: ${this.props.lineHeight};
    font-weight: ${this.props.weight};
}`;
		return (
            <div className="CodeWrapper">
                <CodeBlock highlight svg="null" onCopy={() => this.showNotification()}>
                    <SyntaxHighlighter
                        language="scss"
                        className="CodeBlock"
                        style={tomorrowNightEighties}
                    >
                        {code}
                    </SyntaxHighlighter>
                </CodeBlock>
            </div>
		);
	}
}

CodeSnippet.defaultProps = {
	//	Example defaultProps
	//	label: 'click me'
};

CodeSnippet.PropTypes = {
	//	Example PropTypes:
	//	label: PropTypes.string.isRequired,
	//	onClick: PropTypes.func,
};

export default CodeSnippet;
