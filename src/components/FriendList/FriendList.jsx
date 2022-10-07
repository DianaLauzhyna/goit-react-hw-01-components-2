import PropTypes from 'prop-types';
import {
  Friends,
  FriendsItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id}) => (
        <FriendsItem key={id}
        avatar ={avatar}
        name={name}
        isOnline={isOnline}
        />
         
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
