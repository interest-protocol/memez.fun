import { formatAddress } from '@mysten/sui/utils';
import { Div, P, Span } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import AvatarGroup from '@/components/avatar-group';
import { DATA } from '@/components/avatar-group/avatar-group.data';
import RangeBar from '@/components/range';
import {
  ChevronUpSVG,
  ClipBoardPaperSVG,
  CubeSVG,
  DollarSignSVG,
  SuiLogoSVG,
  VerticalCoinSVG,
} from '@/components/svg';
import TokenCardIcon from '@/components/token-icon-card';
import { copyToClipboard } from '@/utils';
import LikeComponent from '@/views/home/components/like';

import { DetailsForm } from '../details.types';
import DetailsTokenBasicsSocials from '../details-token-basics/details-token-basics-social';

const MiniDetailsTokenBasics: FC = () => {
  const clipBoardSuccessMessage = 'Address copied to the clipboard';
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [isliked, setIsLiked] = useState<boolean>(false);

  const formValues = useWatch<DetailsForm>();

  const { coinType } = formValues;

  const handleClick = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  const handleLikes = () => {
    setIsLiked(not);
  };

  return (
    <Div
      py="1rem"
      bg="#131419"
      color="#fff"
      transition="0.3s"
      borderRadius="1.5rem"
      maxHeight="53.438rem"
      border="1px solid #24282D"
      display={['block', 'block', 'block', 'none', 'none']}
    >
      <Div>
        <Div
          px="1rem"
          gap="0.5rem"
          pb="1.25rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Div gap="0.5rem" display="flex" alignItems="center">
            <TokenCardIcon imgSrc="/suiMan.png" isMiniDetailsCard />
            <Div display="flex" flexDirection="column" justifyContent="center">
              <Span
                color="#fff"
                fontSize="1.5rem"
                fontWeight="500"
                fontFamily="Satoshi"
              >
                {formValues.name}
              </Span>
              <Div
                gap="0.5rem"
                display="flex"
                color="#90939D"
                alignItems="center"
              >
                {coinType && (
                  <P fontSize="0.75rem">{formatAddress(coinType as string)}</P>
                )}
                <Div
                  cursor="pointer"
                  onClick={() =>
                    copyToClipboard(coinType as string, clipBoardSuccessMessage)
                  }
                >
                  <ClipBoardPaperSVG
                    width="0.8rem"
                    maxWidth="0.8rem"
                    maxHeight="0.8rem"
                  />
                </Div>
              </Div>
            </Div>
          </Div>
          <LikeComponent
            poolId={formValues.poolId as string}
            revertOrder
            likeCounter={50}
            isLiked={isliked}
            handleLikes={handleLikes}
          />
        </Div>
        <Div
          p="1rem"
          gap="1rem"
          width="100%"
          display="flex"
          alignItems="center"
          borderRadius="0.75rem"
          justifyContent="center"
        >
          <RangeBar value={Number(formValues.bondingCurve)} />
          <P fontWeight="300" fontSize="0.875rem" color="#FFFFFF">
            Bonding
          </P>
        </Div>
      </Div>
      <Div
        pb="1rem"
        overflow="hidden"
        opacity={showMoreDetails ? 1 : 0}
        maxHeight={showMoreDetails ? '500px' : '0px'}
        transform={showMoreDetails ? 'translateY(0)' : 'translateY(-10px)'}
        transition="max-height 0.5s ease, opacity 0.3s ease, transform 0.3s ease"
      >
        <Div py="2rem" gap="1rem" display="flex" flexDirection="column">
          <DetailsTokenBasicsSocials />
          <Div
            pb="0.75rem"
            gap="0.5rem"
            display="flex"
            color="#FBFBFB"
            justifyContent="center"
          >
            <P fontSize="1rem">Created by • {formValues.creatorAddress}</P>
          </Div>
        </Div>
        <Div px="1rem">
          <Div
            px="1rem"
            width="100%"
            display="flex"
            borderRadius="1rem"
            flexDirection="column"
            justifyContent="center"
            border="1px solid #24282D"
          >
            <Div
              py="0.8rem"
              display="flex"
              color="#fff"
              bg="red"
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
                  <CubeSVG
                    maxHeight="0.8rem"
                    maxWidth="0.8rem"
                    width="0.8rem"
                  />
                </Div>
                <P fontSize="0.875rem">Dex:</P>
              </Div>
              <Div gap="0.6rem" display="flex" alignItems="center">
                <SuiLogoSVG maxHeight="2rem" maxWidth="2rem" width="2rem" />
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
                    maxHeight="0.8rem"
                    maxWidth="0.8rem"
                    width="0.8rem"
                  />
                </Div>
                <P fontSize="0.875rem">Total supply:</P>
              </Div>
              <Div gap="0.6rem" display="flex" alignItems="center">
                <Span fontSize="1.25rem">{formValues.allTimeVolume}</Span>
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
                    width="0.625rem"
                    maxWidth="0.625rem"
                    maxHeight="0.625rem"
                  />
                </Div>
                <P fontSize="0.875rem">Quote coin:</P>
              </Div>
              <Div gap="0.6rem" display="flex" alignItems="center">
                <Span fontSize="1.25rem">{formValues.virtualLiquidity}</Span>
              </Div>
            </Div>
          </Div>
          <Div display="flex" justifyContent="center" mt="1rem">
            <AvatarGroup items={DATA} />
          </Div>
        </Div>
      </Div>
      <Div
        pt="1rem"
        pb="0.5rem"
        gap="0.5rem"
        width="100%"
        display="flex"
        cursor="pointer"
        alignItems="center"
        onClick={handleClick}
        justifyContent="center"
        borderTop="1px solid #24282D"
        mt={showMoreDetails ? '1rem' : 'unset'}
      >
        <Span color="#90939D" fontSize="0.75rem">
          Details
        </Span>
        <Div
          display="flex"
          transition="0.3s"
          alignItems="center"
          transform={showMoreDetails ? 'rotate(180deg)' : ''}
        >
          <ChevronUpSVG
            width="0.75rem"
            maxWidth="0.75rem"
            maxHeight="0.75rem"
          />
        </Div>
      </Div>
    </Div>
  );
};

export default MiniDetailsTokenBasics;
