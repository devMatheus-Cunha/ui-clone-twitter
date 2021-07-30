import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/Icons';
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow: auto;

  scrollbar-width: none; /* firefox */
  ::-webkit-scrollbar {
    /* chrome */
    display: none;
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background-color: var(--twitter);
  position: relative;
`;
export const Avatar = styled.div``;
export const ProfileData = styled.div``;
export const Followage = styled.div``;

const icoCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcons = styled(LocationOn)`
  ${icoCSS}
`;
export const CakeIcon = styled(Cake)`
  ${icoCSS}
`;
