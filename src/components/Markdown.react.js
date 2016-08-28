import React from 'react';
import Remarkable from 'remarkable';
import * as highlight from 'highlight.js';

var md = new Remarkable({
    highlight: (str, lang) => {
        if (lang && highlight.getLanguage(lang)) {
            try {
                return highlight.highlight(lang, str).value;
            } catch (err) {}
        }

        return '';
    }
});

export default class Markdown extends React.Component {
    render() {
        var compiled = {
            __html: md.render(this.props.content)
        };

        return <div dangerouslySetInnerHTML={compiled} />;
    }
}