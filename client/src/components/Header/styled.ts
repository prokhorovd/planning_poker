import styled from 'styled-components';

export const HeaderLayout = styled.div`
  width: 60vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
  margin: 30px;
  width: 45px;
  height: 45px;
  background: url(${process.env.PUBLIC_URL + 'game-logo.png'}) center no-repeat rgba(158, 158, 158, 0.1);
  border-radius: 15px;
`

export const HeaderUserIcon = styled.div`
  margin: 30px;
`

export const HeaderUserIconHidden = styled.div`
  display: none;
`
