import { Div } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import AvatarGroup from '@/components/avatar-group';
import { fetchPoolLikes } from '@/utils/pools';

import { DetailsForm } from '../details.types';
import { DetailsTokenBasicsFooterProps } from './details-token-basics.types';

const DetailsTokenBasicsFooter: FC<DetailsTokenBasicsFooterProps> = ({
  poolId,
}) => {
  const { control } = useFormContext<DetailsForm>();

  const [likes, setLikes] = useState({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const getPoolLikes = async () => {
      setLikes((prev) => ({ ...prev, loading: true }));

      try {
        const res = await fetchPoolLikes(poolId as string);
        setLikes({
          data: res.data.map((el) => ({ ...el, name: el.username })),
          loading: false,
          error: null,
        });
      } catch (err) {
        setLikes({
          data: [],
          loading: false,
          error: err,
        });
      }
    };

    getPoolLikes();
  }, [poolId]);

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
      <AvatarGroup
        items={
          likes?.data || [
            {
              id: '',
              name: '',
              avatar: '',
            },
          ]
        }
      />
    </Div>
  );
};

export default DetailsTokenBasicsFooter;
