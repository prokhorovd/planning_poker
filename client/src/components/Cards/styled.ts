import styled from 'styled-components';
import { white, peppermint, panache } from '../../utils/constants/colors';

export const StyledCardItem = styled.div`
  margin: 5px;
  height: 145px;
  width: 90px;
  font-size: 24px;
  background-color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: 100ms;
  &:hover {
    background-color: ${panache};
  }
`;

export const StyledCardItemActive = styled(StyledCardItem)`
  background-color: ${peppermint};

  &:hover {
    background-color: ${peppermint};
  }
`;

export const StyledCardField = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
