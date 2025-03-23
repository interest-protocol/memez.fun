import { Div, P, Span } from '@stylin.js/elements';
import { useWatch } from 'react-hook-form';

import Like from '@/components/like';
import {
  CetusSVG,
  ClipBoardSVG,
  CubeSVG,
  DollarSignSVG,
  VerticalCoinSVG,
} from '@/components/svg';
import TokenCardIcon from '@/components/token-icon-card';
import { copyToClipboard } from '@/utils';

import { DetailsForm } from '../details.types';
import DetailsTokenBasicsFooter from './details-token-basics-footer';
import DetailsTokenBasicsSocials from './details-token-basics-social';

const DetailsTokenBasics = () => {
  const clipBoardSuccessMessage = 'Address copied to the clipboard';

  const formValues = useWatch<DetailsForm>();

  return (
    <Div
      py="1rem"
      bg="#131419"
      transition="0.3s"
      borderRadius="1.5rem"
      maxHeight="53.438rem"
      border="1px solid #24282D"
      display={['none', 'none', 'none', 'flex', 'flex']}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Div
        px="1rem"
        pb="1.25rem"
        display="flex"
        color="#fff"
        justifyContent="space-between"
      >
        <Span fontSize="1.5rem" fontWeight="500" fontFamily="Satoshi">
          {formValues.name}
        </Span>
        <Like invertOrder isLiked />
      </Div>
      <TokenCardIcon imgSrc={formValues.tokenIcon as string} />
      <Div
        py="0.75rem"
        gap="0.5rem"
        display="flex"
        color="#FBFBFB"
        alignItems="center"
        justifyContent="center"
      >
        <P fontSize="0.75rem">{formValues.type}</P>
        <Div
          cursor="pointer"
          onClick={() =>
            copyToClipboard(formValues.type as string, clipBoardSuccessMessage)
          }
        >
          <ClipBoardSVG maxHeight="0.8rem" maxWidth="0.8rem" width="0.8rem" />
        </Div>
      </Div>
      <Div
        py="2rem"
        gap="0.5rem"
        display="flex"
        color="#FBFBFB"
        justifyContent="center"
      >
        <P fontSize="1rem">Created by • {formValues.createdBy}</P>
      </Div>
      <DetailsTokenBasicsSocials />
      <Div pt="5rem" pb="1.2rem" display="flex" justifyContent="center">
        <Div
          px="1rem"
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
              <Span fontSize="1.25rem">{formValues.dex}</Span>{' '}
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
              <Span fontSize="1.25rem">{formValues.volume}</Span>
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
              <Span fontSize="1.25rem">{formValues.quoteCoin}</Span>{' '}
            </Div>
          </Div>
        </Div>
      </Div>
      <DetailsTokenBasicsFooter />
    </Div>
  );
};

export default DetailsTokenBasics;
