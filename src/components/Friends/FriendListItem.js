export const FriendListItem = ({ friend }) => {
  return (
    <li class="item">
      <span class="status" status={friend.isOnline}></span>
      <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p class="name">{friend.name}</p>
    </li>
  );
};
