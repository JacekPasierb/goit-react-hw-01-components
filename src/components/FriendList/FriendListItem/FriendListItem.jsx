import React from 'react';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name, id }) => {
  const colorStatus = isOnline ? 'green' : 'red';
  return (
    <li className={css.item} key={id}>
      <span className={css.status} style={{ backgroundColor: colorStatus }} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
