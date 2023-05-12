import React from 'react';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  <ul className={css.friendList}>
    {friends.map(friend => {
      return (
        <li class="item" id={friend.id}>
          <span class="status">{friends.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      );
    })}
  </ul>;
};
