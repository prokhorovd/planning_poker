import styled from 'styled-components';
import colors from '../../utils/constants/colors';

export const StyledIconPicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledUserIconLayout = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.silverChalice10};
  border-radius: 25px;
  margin-bottom: 5px;
  animation-name: error;
  animation-duration: 1s;
  @keyframes error {
    0% {
      background-color: ${colors.silverChalice10};
    }
    50% {
      background-color: ${colors.pomegranate15};
    }
    100% {
      background-color: ${colors.silverChalice10};
    }
  }
`;

export const StyledUserIconEmoji = styled.div`
  height: 24px;
`;
