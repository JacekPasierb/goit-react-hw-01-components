import React from 'react';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
