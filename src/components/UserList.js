import React from 'react';

export class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListLoading: true,
      users: null,
      hasError: false,
      error: null
    }
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

  render() {
    if (this.state.hasError && !!this.state.error) {
      throw this.state.error;
    } 
    
    if (!this.state.isListLoading && !!this.state.users) {
      const users = this.state.users;
      const userList = users.map((user) => {
        return (
          <div key={user.id} className="user">
            {user.name}<br />
            <span>Email: {user.email}</span><br />
            <span>Phone: {user.phone}</span><br />
            <span>
          Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
        </span><br />
          </div>
        );
      });

      return (
        <div className="user-list">
          {userList}
        </div>
      )
    }


    return (
      <div className="user-list">
        Loading...
      </div>
    )

  }


}
