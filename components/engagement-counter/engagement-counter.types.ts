export interface EngagementCounterModalItemProps {
  userName: string;
  userAvatar: string;
}

export interface EngagementCounterModalProps {
  title: string;
  data?: Array<EngagementCounterModalItemProps>;
}
