export interface UsersItemProps {
  id: string;
  userName: string;
  userAvatar: string;
}

export interface UserModalProps {
  title: string;
  allUser: number;
  userData: ReadonlyArray<UsersItemProps>;
}
