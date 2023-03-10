import css from './FriendList.module.css'
import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem';

export const FriendList = ({friends}) => { 
    return (
        <ul className={css.Friendlist}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            
            />
          ))}
        </ul>
    )
    
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ),
  };


   
