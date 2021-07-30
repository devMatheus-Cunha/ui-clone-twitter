import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcons,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}

        <h1>Matheus Gomes</h1>
        <h2>@mthgomess</h2>

        <p>Developer at <strong>Seidor</strong></p>

        <ul>
          <li>
            <LocationIcons />
            Minas Gerais, Brasim
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de agosto de 2000
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>47</strong>
            <span>
              <strong>1232</strong> seguidores
            </span>
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
