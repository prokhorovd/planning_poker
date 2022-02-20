import React, {FC} from 'react';
import {UserCardLayout, UserIconLayout, UserNameLayout, UserListLayout, UserIconLayoutVoted, UserIconLayoutNotVoted} from './styled';
import {Emoji} from 'emoji-mart';

export interface UserData {
  userName: string,
  userEmoji: string,
  pickedCard: null | string,
}

interface UserListProps {
  listState: 'idle' | 'vote' | 'voted',
  listData: UserData[],
}

const UserList: FC<UserListProps> = ({listState, listData}) => {
  // single user card
  const UserCard:FC<UserData> = (userData) => {
    if (listState === 'idle') {
      // lobby room - show all users
      return(
        <UserCardLayout>
          <UserIconLayout>
            <Emoji emoji={userData.userEmoji} size={24}/>
          </UserIconLayout>
          <UserNameLayout>{userData.userName}</UserNameLayout>
        </UserCardLayout>
      );
    } else if (listState === 'vote') {
      // vote process: blur icon if user didn't vote yet, else show green background
      return (
      <UserCardLayout>
        {userData.pickedCard ?
        <UserIconLayoutVoted>
          <Emoji emoji={userData.userEmoji} size={24}/>
        </UserIconLayoutVoted>
          :
        <UserIconLayoutNotVoted>
          <Emoji emoji={userData.userEmoji} size={24}/>
        </UserIconLayoutNotVoted>}
        <UserNameLayout>{userData.userName}</UserNameLayout>
      </UserCardLayout>
      );
    }
    // result page: show users choice.
    return(
      <UserCardLayout>
        {userData.pickedCard ?
          <UserIconLayout>
            {userData.pickedCard}
          </UserIconLayout>
          :
          <UserIconLayoutNotVoted>
            <Emoji emoji={userData.userEmoji} size={24}/>
          </UserIconLayoutNotVoted>}
        <UserNameLayout>{userData.userName}</UserNameLayout>
      </UserCardLayout>
    );
  }
  // make list of user cards
  const userCards = listData.map(element =>
    <UserCard {...element} key={element.userName}/>
  )
  return (
    <div>
      <div>liststate is: {listState}</div>
      <UserListLayout>{userCards}</UserListLayout>
    </div>
  );
}

export default UserList;
