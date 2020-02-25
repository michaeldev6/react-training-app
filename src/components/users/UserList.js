import React from 'react';

export function UserList(props) { 

  if (props.hasError && !!props.error) {
    throw props.error;
  } 

  if (!props.isListLoading && !!props.users) {
    const users = props.users;
    const userList = users.map((user) => {
      return (
        <div key={user.id} className="user">
          {user.name}<br />
          <span>Email: {user.email}</span><br />
          {
            !!user.phone && 
            <>
              <span>Phone: {user.phone}</span><br />
            </> 
          }
          {
            !!user.website &&
            <>
              <span>
                Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
              </span><br />
            </>
          }
          
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
