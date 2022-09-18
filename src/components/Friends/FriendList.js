import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends class="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </Friends>
  );
};
