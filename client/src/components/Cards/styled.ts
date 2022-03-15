import styled from 'styled-components';
import {
  CARD_UNSELECTED,
  CARD_SELECTED,
  CARD_SELECTED_HOVER,
  CARD_UNSELECTED_HOVER,
} from '../../utils/constants/colors';

export const StyledCardItem = styled.div`
  margin: 5px;
  height: 145px;
  width: 90px;
  font-size: 24px;
  background-color: ${CARD_UNSELECTED};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: 100ms;
  &:hover {
    background-color: ${CARD_UNSELECTED_HOVER};
  }
`;

export const StyledCardItemActive = styled(StyledCardItem)`
  background-color: ${CARD_SELECTED};

  &:hover {
    background-color: ${CARD_SELECTED_HOVER};
  }
`;

export const StyledCardField = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
