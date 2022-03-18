import styled from 'styled-components';
import { GameState } from './stores/store';
import colors from './utils/constants/colors';

export function defineBackgroundColor(gameState: GameState) {
  let appBackground;
  if (gameState === GameState.Vote) {
    appBackground = colors.ginFizz;
  } else if (gameState === GameState.Voted) {
    appBackground = colors.aquaSqueeze;
  } else {
    appBackground = colors.alabaster;
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
