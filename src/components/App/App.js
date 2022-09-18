import user from '../../user.json';
import stats from '../../stats.json';

import { Profile } from '../Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="Upload stats" />
    </Container>
  );
};
