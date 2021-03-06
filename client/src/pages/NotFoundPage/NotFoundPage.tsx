import React, { FC } from 'react';
import {
  StyledNotFoundPageHeading,
  StyledNotFoundPage,
  StyledLink,
} from './styled';

const NotFoundPage: FC = () => {
  return (
    <StyledNotFoundPage>
      <StyledNotFoundPageHeading>Page not found</StyledNotFoundPageHeading>
      <StyledLink to="/">Go to the main page</StyledLink>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
