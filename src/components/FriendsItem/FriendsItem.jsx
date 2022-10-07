import PropTypes from 'prop-types';
import {
    Friends,
    FriendsItem,
    Status,
    Avatar,
    Name,
  } from './FriendList.styled';

export default function FriendsItem ({ avatar, name, isOnline}){
    return (    
    <FriendsItem>
        <Status status={isOnline} />
        <Avatar src={avatar} alt="User avatar" />
        <Name>{name}</Name>
    </FriendsItem>
    )
}


FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}