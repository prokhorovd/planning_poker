import styled from 'styled-components';
import { GameState } from './stores/store';
import { alabaster, ginFizz, aquaSqueeze } from './utils/constants/colors';

export function defineBackgroundColor(gameState: GameState) {
  let appBackground;
  if (gameState === GameState.Vote) {
    appBackground = ginFizz;
  } else if (gameState === GameState.Voted) {
    appBackground = aquaSqueeze;
  } else {
    appBackground = alabaster;
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
