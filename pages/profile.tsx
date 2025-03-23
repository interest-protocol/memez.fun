import { NextPage } from 'next';

import { SEO } from '@/components';
import Profile from '@/views/profile';

const ProfilePage: NextPage = () => {
  return (
    <>
      <SEO />
      <Profile />
    </>
  );
};

export default ProfilePage;
