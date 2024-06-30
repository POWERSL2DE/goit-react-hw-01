import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48"/>
      <p className={css.text}>{name}</p>
      <p className={clsx('text', isOnline ? css.online : css.offline)}> 
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
    );
};