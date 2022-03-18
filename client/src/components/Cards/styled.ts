import styled from 'styled-components';
import colors from '../../utils/constants/colors';

export const StyledCardItem = styled.div`
  margin: 5px;
  height: 145px;
  width: 90px;
  font-size: 24px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: 100ms;
  &:hover {
    background-color: ${colors.panache};
  }
`;

export const StyledCardItemActive = styled(StyledCardItem)`
  background-color: ${colors.peppermint};

  &:hover {
    background-color: ${colors.peppermint};
  }
`;

export const StyledCardField = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
