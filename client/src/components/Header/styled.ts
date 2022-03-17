import styled from 'styled-components';
import { silverChalice10 } from '../../utils/constants/colors';

export const StyledHeaderLayout = styled.div`
  width: 60vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledHeaderLogo = styled.div`
  margin: 30px;
  width: 45px;
  height: 45px;
  background: url('assets/images/game-logo.png') center no-repeat
    ${silverChalice10};
  border-radius: 15px;
`;

export const StyledHeaderUserIcon = styled.div`
  margin: 30px;
`;
