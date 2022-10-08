import PropTypes from 'prop-types';
import {
    StatusStyle,
    AvatarStyle,
    NameStyle,
    FriendsListStyle
  } from './FriendsListItem.styled';

export default function FriendsListItem ({avatar, name, isOnline}){
    return (    
    <FriendsListStyle>
        <StatusStyle status={isOnline} />
        <AvatarStyle src={avatar} alt="User avatar" />
        <NameStyle>{name}</NameStyle>
    </FriendsListStyle>
    )
}


FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}