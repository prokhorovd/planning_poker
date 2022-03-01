import styled from 'styled-components';
import { APP_BACKGROUND } from './utils/constants/colors';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${APP_BACKGROUND};
  font-size: calc(10px + 1vmin);
`;
