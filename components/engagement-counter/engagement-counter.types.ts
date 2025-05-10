import { UserProps } from '@/interface';

export interface EngagementCounterModalItemProps {
  id: string;
  bio: string;
  avatar: string;
  username: string;
}

export interface EngagementCounterModalProps {
  title: string;
  data?: Array<UserProps>;
}
