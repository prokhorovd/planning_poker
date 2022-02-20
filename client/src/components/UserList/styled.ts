import styled from 'styled-components';

export const UserListLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const UserCardLayout = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserIconLayout = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(158, 158, 158, 0.1);
  border-radius: 25px;
`

export const UserIconLayoutVoted = styled(UserIconLayout)`
  background-color: #CAEECCFF;
`

export const UserIconLayoutNotVoted = styled(UserIconLayout)`
  opacity: 0.5;
`

export const UserNameLayout = styled.div`
  height: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
`
