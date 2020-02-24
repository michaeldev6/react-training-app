import React from 'react';
import { Notification, notificationStyles } from '../core/Notification';

export class ListErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (!!this.state.errorInfo) {
            return (
                <Notification notificationStyle={notificationStyles.alert}>
                    <p>Issue loading list</p>
                    <details>
                        <summary>Click for more details</summary>
                        <p>{ !!this.state.error && this.state.error.toString() }</p>
                        <p>{ this.state.errorInfo.componentStack }</p>
                    </details>
                </Notification>
            );
        }

        return this.props.children;
    }
}