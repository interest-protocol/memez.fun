import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import { PencilSVG } from '@/components/svg';

import UserAvatar from './components/user-avatar';

const Profile: FC = () => {
  return (
    <Layout>
      <Div
        pt="15rem"
        width="100%"
        display="flex"
        alignItems="center"
        border="1px solid red"
        justifyContent="center"
        backgroundPosition="center"
      >
        <Div
          p="1rem"
          bg="#131419"
          display="flex"
          width="44.75rem"
          position="relative"
          borderRadius="1.8rem"
          justifyContent="center"
          border="1px solid #24282D"
        >
          <Div top="-5rem" position="absolute">
            <UserAvatar imgSrc="/user-default-memez-fun.png" />
          </Div>
          <Div
            width="100%"
            color="#fff"
            display="flex"
            justifyContent="flex-start"
          >
            <Button
              gap="0.5rem"
              display="flex"
              color="#F6C853"
              cursor="pointer"
              width="8.063rem"
              bg="transparent"
              height="2.25rem"
              transition="0.3s"
              alignItems="center"
              borderRadius="3rem"
              justifyContent="center"
              border="1px solid #F6C853"
              nHover={{
                background: 'hsla(43, 90.10%, 64.50%, 0.20)',
              }}
            >
              <PencilSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
              <Span>Edit Profile</Span>
            </Button>
          </Div>
        </Div>
      </Div>
    </Layout>
  );
};

export default Profile;
