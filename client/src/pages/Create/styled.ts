import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCreatePage = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCreatePageHeading = styled('h1')`
  margin-bottom: 40px;
`;

export const StyledCreatePageLink = styled(Link)`
  margin-top: 15px;
`;
