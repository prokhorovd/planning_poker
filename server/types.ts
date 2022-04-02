export interface User {
  userName: string | null;
  userEmoji: string | null;
  pickedCard: string | null | number;
  userSocket: string | null;
  admin?: boolean;
}

export interface Room {
  roomID: string;
  roomName: string;
  userList: User[];
}

export interface Rooms {
  [roomID: string]: Room;
}

export interface getUserProps {
  roomID: string;
  userSocket: string;
}

export interface addUserToRoomProps {
  roomID: string;
  user: User;
}

export interface updateUserProps {
  roomID: string;
  userSocket: string;
  cardName: string;
}

export interface updateUserListProps {
  roomID: string;
}

export interface deleteUserProps {
  roomID: string;
  userSocket: string;
}
