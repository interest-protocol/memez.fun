import { Button, Div } from '@stylin.js/elements';
import { FC } from 'react';

import { SearchSVG } from '../svg';

const SearchButton: FC = () => {
  return (
    <Button
      mb="0.5rem"
      px="1.4rem"
      bg="#24282D"
      border="none"
      display={['flex', 'flex', 'flex', 'none', 'none']}
      color="#E4E7EB"
      height="2.75rem"
      cursor="pointer"
      alignItems="center"
      justifyContent="center"
      width={['1.5rem', '1.5rem', '1.5rem', 'auto', 'auto']}
      borderRadius={['2rem', '2rem', '1.5rem', '1.5rem', '1.5rem']}
    >
      <Div display={['flex', 'flex', 'flex', 'none', 'none']}>
        <SearchSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
      </Div>
    </Button>
  );
};

export default SearchButton;
