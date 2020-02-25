import React from 'react';
import { AddUserForm } from './AddUserForm';
import { UserList } from './UserList';
import { ListErrorBoundary } from '../common/ListErrorBoundary';

export class UsersController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isListLoading: true,
            users: null,
            hasError: false,
            error: null
          }

        this.onFormSubmitted = this.onFormSubmitted.bind(this);
    }

    componentDidMount() {
        this.loadUserData();
    }

    async loadUserData() {
        try {
        const users = await this.fetchUserData();
        // setTimout used to emphasize a delayed API response
        setTimeout(() => {
            this.setState({
            isListLoading: false,
            users
            });
        }, 1500);
        } catch(e) {
        this.setState({
            hasError: true,
            isListLoading: false,
            error: e
        });
        }
        
    }

    fetchUserData() {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Error response received');
            }
            return response.json();
        })
        .catch((e) => {
            throw e;
        });
    }

    onFormSubmitted(user) {
        if (!!this.state.users) {
            const id = this.state.users.length + 1;
            user = {...user, id};          
            const users = this.state.users.slice();
            users.unshift(user);
            this.setState({users});
        }
    }

    render() {
        return (
        <ListErrorBoundary>
            <AddUserForm whenFormSubmitted={this.onFormSubmitted} />
            <UserList 
                hasError={this.state.hasError}
                error={this.state.error}
                users={this.state.users}
                isListLoading={this.state.isListLoading}
            />
        </ListErrorBoundary>
        );
    }
}