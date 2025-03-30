export interface UploadImageProps {
  name: string;
  isReview?: boolean;
  description?: string;
  status?: 'error' | 'default';
}
