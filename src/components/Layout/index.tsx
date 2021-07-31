import React from 'react';

// components
import Main from '../Main';

// styles
import { Container, Wrapper } from './styles';

// ----------------
// Export function
// ----------------
const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <Sidebar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
