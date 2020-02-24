import React from 'react';
import {MOCK_USER_DATA} from "../data";

export function UserList() {

  const userList = MOCK_USER_DATA.map((user) => {
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
