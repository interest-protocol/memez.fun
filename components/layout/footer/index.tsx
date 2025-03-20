import { Div, Footer } from '@stylin.js/elements';
import { v4 } from 'uuid';

import { MemeZLogoIconSVG } from '@/components/svg';
import { SOCIAL } from '@/constants/socials';
import SocialLink from '@/views/home/components/social';

const FooterBar = () => {
  return (
    <Footer
      px="1rem"
      py="2rem"
      mx="auto"
      display="flex"
      maxWidth="1400px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Div>
        <MemeZLogoIconSVG maxHeight="4rem" maxWidth="4rem" width="4rem" />
      </Div>
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        {SOCIAL.map(({ title, Icon, link }) => (
          <SocialLink pathname={link} title={title} Icon={Icon} key={v4()} />
        ))}
      </Div>
    </Footer>
  );
};

export default FooterBar;
