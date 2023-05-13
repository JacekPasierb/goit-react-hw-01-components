import React from 'react';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  console.log('po', friends);
  return(
  
    <ul className={css.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => {
       const colorStatus =  isOnline ? 'green' : 'red';
       return <li className={css.item} id={id}>
          <span className={css.status} style={{ backgroundColor: colorStatus }}/>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>;
      })}
    </ul>
  );
};
