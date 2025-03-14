import { NextPage } from 'next';

import { SEO } from '@/components';
import Details from '@/views/details';

const DetailsPage: NextPage = () => (
  <>
    <SEO />
    <Details />
  </>
);

export default DetailsPage;
