import React from 'react';
import css from './ProfileStyle.module.css';


export const Profile = ({
  username,
  tag ,
  location,
  avatar,
  stats ,
  
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span class="label">Followers</span>
          <span class="quantity"> {stats.followers}</span>
        </li>
        <li className={css.item}>
          <span class="label">Views</span>
          <span class="quantity"> {stats.views}</span>
        </li>
        <li className={css.item}>
          <span class="label">Likes</span>
          <span class="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };
