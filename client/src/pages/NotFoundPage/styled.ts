import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNotFoundPage = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNotFoundPageHeading = styled('h1')`
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  margin-top: 15px;
`;
