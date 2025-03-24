export interface UserItemProps {
  userName: string;
  userAvatar: string;
}

export interface UserModalProps {
  title: string;
  allUser: number;
  userData: ReadonlyArray<UserItemProps>;
}
