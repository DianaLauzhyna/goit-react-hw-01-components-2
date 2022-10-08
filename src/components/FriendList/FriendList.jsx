import PropTypes from 'prop-types';
import {
  FriendsStyle
} from './FriendList.styled';

import FriendsListItem from 'components/FriendsListItem/FriendsListItem'

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <FriendsStyle>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendsListItem 
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
      ))}
    </FriendsStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
