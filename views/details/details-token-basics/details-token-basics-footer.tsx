import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import AvatarGroup from '@/components/avatar-group';

import { DetailsForm } from '../details.types';

const DetailsTokenBasicsFooter: FC = () => {
  const { control } = useFormContext<DetailsForm>();

  const likes = useWatch<DetailsForm>({
    control,
    name: 'likes',
  });

  console.log('likes', likes);

  return (
    <Div
      pt="1rem"
      px="1rem"
      height="4rem"
      display="flex"
      maxHeight="4rem"
      alignItems="center"
      justifyContent="space-between"
      borderTop="1px solid #24282D"
      borderBottomLeftRadius="1.5rem"
      borderBottomRightRadius="1.5rem"
    >
      <AvatarGroup items={likes.data} />
    </Div>
  );
};

export default DetailsTokenBasicsFooter;
