import PropTypes from 'prop-types';
import {
  Card,
  Wrap,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.syled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Wrap>
        <Avatar src={avatar} alt="User avatar" class="avatar" />
        <Name class="name">{username}</Name>
        <Tag class="tag"> @{tag} </Tag>
        <Location class="location">{location}</Location>
      </Wrap>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
