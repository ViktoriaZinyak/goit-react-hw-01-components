import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
