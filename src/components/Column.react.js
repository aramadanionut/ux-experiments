import React from 'react';
import classNames from 'classnames';

export default class Column extends React.Component {
    render() {
        // Build Foundation column classes
        let classes = classNames(
            this.props.className,
            'columns',
            this.props.large && `large-${this.props.large}`,
            this.props.medium && `medium-${this.props.medium}`,
            this.props.small && `small-${this.props.small}`
        );

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
