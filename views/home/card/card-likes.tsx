import { Div, P } from '@stylin.js/elements';

import { HeartSVG } from '@/components/svg';

const CardLikes = () => {
  return (
    <Div gap="0.4rem" display="flex" alignItems="center" color="#F6C853">
      <P fontSize="0.8rem">000k</P>
      <Div cursor="pointer">
        <HeartSVG maxHeight="1.2rem" maxWidth="1.2rem" width="1.2rem" />
      </Div>
    </Div>
  );
};

export default CardLikes;
