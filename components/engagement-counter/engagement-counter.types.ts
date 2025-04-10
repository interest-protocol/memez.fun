export interface EngagementCounterModalItemProps {
  id: string;
  name: string;
  avatar: string;
}

export interface EngagementCounterModalProps {
  title: string;
  data?: Array<EngagementCounterModalItemProps>;
}
