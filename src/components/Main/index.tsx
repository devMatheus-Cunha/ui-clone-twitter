import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Matheus Gomes</strong>
          <span>190 Tweets</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage /> */}

      {/* <BottonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu> */}
    </Container>
  );
};

export default Main;
