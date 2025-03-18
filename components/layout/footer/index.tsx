import { Div, Footer } from '@stylin.js/elements';
import Link from 'next/link';

import { MemeZLogoIconSVG } from '@/components/svg';
import { SOCIAL } from '@/constants/socials';

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
      <Div display="flex" justifyContent="center" alignItems="center">
        {SOCIAL.map(({ title, Icon, link }) => (
          <Link href={link} target="blank" key={title} title={title}>
            <Div
              mr="0.5rem"
              bg="#171F28"
              color="#FFF"
              width="2.5rem"
              display="flex"
              height="2.5rem"
              cursor="pointer"
              transition="0.3s"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              nHover={{
                background: '#202b37',
              }}
            >
              <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
            </Div>
          </Link>
        ))}
      </Div>
    </Footer>
  );
};

export default FooterBar;
