import styled from 'styled-components';
import {EMOJI_BACKGROUND} from '../../utils/constants/colors';

export const StyledUserIconLayout = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${EMOJI_BACKGROUND};
  border-radius: 25px;
`

export const StyledUserIconEmoji = styled.div`
  height: 24px;
`
