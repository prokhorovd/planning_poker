import styled from 'styled-components';
import { GameState } from './stores/store';
import {
  APP_BACKGROUND,
  APP_BACKGROUND_PLAY,
  APP_BACKGROUND_RESULT,
} from './utils/constants/colors';

export function defineBackgroundColor(gameState: GameState) {
  let appBackground;
  if (gameState === GameState.Vote) {
    appBackground = APP_BACKGROUND_PLAY;
  } else if (gameState === GameState.Voted) {
    appBackground = APP_BACKGROUND_RESULT;
  } else {
    appBackground = APP_BACKGROUND;
  }
  return appBackground;
}

interface Props {
  gameState: GameState;
}

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-size: calc(10px + 1vmin);
  background: ${({ gameState }: Props) => defineBackgroundColor(gameState)};
`;
