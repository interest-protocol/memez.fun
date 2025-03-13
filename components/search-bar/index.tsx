import { Div, Input } from '@stylin.js/elements';
import { FC } from 'react';

import { SearchSVG } from '../svg';

const SearchBar: FC = () => {
  return (
    <Div
      py="0.5rem"
      gap="0.7rem"
      px="1rem"
      display="flex"
      color="#90939D"
      width="26.625rem"
      transition="0.3s"
      alignItems="center"
      borderRadius="2rem"
      min-width="26.625rem"
      justifyContent="center"
      border="1px solid #90939D"
    >
      <SearchSVG maxWidth="1.3rem" maxHeight="1.3rem" width="1.3rem" />
      <Input
        flex="1"
        type="text"
        color="#fff"
        border="none"
        outline="none"
        fontSize="1rem"
        placeholder="Search..."
        background="transparent"
        style={{ caretColor: '#fff' }}
      />
    </Div>
  );
};

export default SearchBar;
