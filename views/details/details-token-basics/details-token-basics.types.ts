import { SocialProps } from '@/components/layout/footer/footer.types';
import { UserLike } from '@/views/home/card/card.types';

export interface DetailsTokenBasicsSocialsProps {
  isDisabled?: boolean;
  socials: Array<SocialProps>;
}

export interface DetailsTokenBasicsFooterProps {
  totalLikes?: number;
  usersLikes: UserLike[];
}
