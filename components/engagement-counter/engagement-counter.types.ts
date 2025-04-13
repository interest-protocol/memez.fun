export interface EngagementCounterModalItemProps {
  username: string;
  avatar: string;
}

export interface EngagementCounterModalProps {
  title: string;
  data?: Array<EngagementCounterModalItemProps>;
}
