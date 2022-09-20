import PropTypes from 'prop-types';
import { FriendItem, FriendMarker } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <FriendItem>
      <FriendMarker status={friend.isOnline}></FriendMarker>
      <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p class="name">{friend.name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.string,
};
