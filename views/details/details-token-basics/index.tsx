import { formatAddress } from '@mysten/sui/utils';
import { Div, P, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { not } from 'ramda';
import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

import {
  CetusSVG,
  ClipBoardSVG,
  CubeSVG,
  DollarSignSVG,
  VerticalCoinSVG,
} from '@/components/svg';
import TokenCardIcon from '@/components/token-icon-card';
import { copyToClipboard } from '@/utils';
import LikeComponent from '@/views/home/components/like';

import { DetailsForm } from '../details.types';
import DetailsTokenBasicsFooter from './details-token-basics-footer';
import DetailsTokenBasicsSocials from './details-token-basics-social';

const DetailsTokenBasics = () => {
  const clipBoardSuccessMessage = 'Address copied to the clipboard';

  const formValues = useWatch<DetailsForm>();

  const { coinType, creatorAddress, allTimeVolume, likes } = formValues;
  const [likeCounter, setLikeCounter] = useState<number>(
    () => likes?.total ?? 0
  );

  const router = useRouter();
  const { id: poolId } = router.query;

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (likes?.total !== undefined) {
      setLikeCounter(likes.total);
    }
  }, [likes?.total]);

  const handleLike = () => {
    setIsLiked(not);
    setLikeCounter((likeCounter: number) =>
      isLiked ? likeCounter - 1 : likeCounter + 1
    );
  };

  return (
    <Div
      py="1rem"
      bg="#131419"
      transition="0.3s"
      borderRadius="1.5rem"
      maxHeight="53.438rem"
      flexDirection="column"
      border="1px solid #24282D"
      justifyContent="space-between"
      display={['none', 'none', 'none', 'flex', 'flex']}
    >
      <Div
        px="1rem"
        pb="1.25rem"
        display="flex"
        color="#fff"
        alignItems="center"
        justifyContent="space-between"
      >
        <Span fontSize="1.5rem" fontWeight="500" fontFamily="Satoshi">
          {formValues.name}
        </Span>
        <LikeComponent
          revertOrder
          handleLikes={handleLike}
          poolId={poolId as string}
          likeCounter={likeCounter}
        />
      </Div>
      <TokenCardIcon imgSrc={formValues.iconUrl as string} />
      {coinType && (
        <Div
          py="0.75rem"
          gap="0.5rem"
          display="flex"
          color="#FBFBFB"
          alignItems="center"
          justifyContent="center"
        >
          <P fontSize="0.75rem">{formatAddress(coinType as string)}</P>
          <Div
            cursor="pointer"
            onClick={() =>
              copyToClipboard(
                formValues.coinType as string,
                clipBoardSuccessMessage
              )
            }
          >
            <ClipBoardSVG maxHeight="0.8rem" maxWidth="0.8rem" width="0.8rem" />
          </Div>
        </Div>
      )}
      {creatorAddress && (
        <Div
          py="2rem"
          gap="0.5rem"
          display="flex"
          color="#FBFBFB"
          justifyContent="center"
        >
          <P fontSize="1rem">
            Created by • {formatAddress(creatorAddress as string)}
          </P>
        </Div>
      )}
      <DetailsTokenBasicsSocials />
      <Div mt="4rem" mb="1.2rem" display="flex" justifyContent="center">
        <Div
          p="1rem"
          borderRadius="1rem"
          border="1px solid #24282D"
          width={[
            '18.625rem',
            '18.625rem',
            '18.625rem',
            '16.625rem',
            '18.625rem',
          ]}
        >
          <Div
            py="0.8rem"
            display="flex"
            color="#fff"
            justifyContent="space-between"
          >
            <Div display="flex" alignItems="center" gap="0.3rem">
              <Div
                bg="#24282D"
                display="flex"
                width="1.25rem"
                height="1.25rem"
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
              >
                <CubeSVG maxHeight="0.8rem" maxWidth="0.8rem" width="0.8rem" />
              </Div>
              <P fontSize="0.875rem">Dex:</P>
            </Div>
            <Div gap="0.6rem" display="flex" alignItems="center">
              <CetusSVG maxHeight="2rem" maxWidth="2rem" width="2rem" />
              <Span fontSize="1.25rem">{formValues.symbol}</Span>
            </Div>
          </Div>
          <Div
            py="0.8rem"
            display="flex"
            color="#fff"
            justifyContent="space-between"
          >
            <Div display="flex" alignItems="center" gap="0.3rem">
              <Div
                bg="#24282D"
                display="flex"
                width="1.25rem"
                height="1.25rem"
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
              >
                <DollarSignSVG
                  width="0.8rem"
                  maxWidth="0.8rem"
                  maxHeight="0.8rem"
                />
              </Div>
              <P fontSize="0.875rem">Total supply:</P>
            </Div>
            <Div gap="0.6rem" display="flex" alignItems="center">
              <Span fontSize="1.25rem">{allTimeVolume}</Span>
            </Div>
          </Div>
          <Div
            py="0.8rem"
            display="flex"
            color="#fff"
            justifyContent="space-between"
          >
            <Div display="flex" alignItems="center" gap="0.3rem">
              <Div
                bg="#24282D"
                display="flex"
                width="1.25rem"
                height="1.25rem"
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
              >
                <VerticalCoinSVG
                  maxHeight="0.8rem"
                  maxWidth="0.8rem"
                  width="0.8rem"
                />
              </Div>
              <P fontSize="0.875rem">Quote coin:</P>
            </Div>
            <Div gap="0.6rem" display="flex" alignItems="center">
              <Span fontSize="1.25rem">{formValues.virtualLiquidity}</Span>
            </Div>
          </Div>
        </Div>
      </Div>
      <DetailsTokenBasicsFooter />
    </Div>
  );
};

export default DetailsTokenBasics;
