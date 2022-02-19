import styled from 'styled-components';

export const CardItem = styled.div`
  margin: 5px;
  height: 145px;
  width: 90px;
  font-size: 24px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: 100ms;
  &:hover {
    background-color: #E8F5E9;
  }
`

export const CardItemActive = styled(CardItem)`
  background-color: #caeecc;

  &:hover {
    background-color: #caeecc;
  }
`

export const CardField = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
