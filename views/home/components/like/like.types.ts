export interface LikeComponentProps {
  disabled?: boolean;
  likeCounter: number;
  handleLikes: (e: Event) => void;
}
