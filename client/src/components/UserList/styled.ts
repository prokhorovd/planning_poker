import styled from 'styled-components';
import {
  silverChalice10,
  peppermint,
} from '../../utils/constants/colors';

export const StyledUserList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledUserCard = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledUserIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${silverChalice10};
  border-radius: 25px;
`;

export const StyledUserIconVoted = styled(StyledUserIcon)`
  background-color: ${peppermint};
`;

export const StyledUserIconNotVoted = styled(StyledUserIcon)`
  opacity: 0.5;
`;

export const StyledUserName = styled.div`
  height: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
`;
