import React from 'react';

// components 
import ProfilePage from '../ProfilePage'

// styles 
import { Container, Header, BackIcon, ProfileInfo,BottonMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

// ----------------
// Export function
// ----------------
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
      <ProfilePage />

      <BottonMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu>
    </Container>
  );
};

export default Main;
