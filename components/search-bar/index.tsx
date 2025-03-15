import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import useEventListener from '@/hooks/use-event-listener';
import { useIsMacOS } from '@/hooks/use-is-mac-os';
import { useModal } from '@/hooks/use-modal';

import { CommandSVG, SearchSVG } from '../svg';
import SearchModal from './search-modal';

const SearchBar: FC = () => {
  const isMacOS = useIsMacOS();
  const { setContent, onClose } = useModal();

  const handleSearch = () => setContent(<SearchModal />, { onClose });

  useEventListener(
    'keydown',
    (e) => {
      if (!e) return;

      if ((e as KeyboardEvent).key === 'k' && (e as KeyboardEvent).metaKey)
        handleSearch();
    },
    true
  );

  return (
    <>
      <Div
        px="1rem"
        py="0.5rem"
        gap="0.5rem"
        width="30rem"
        cursor="text"
        color="#90939D"
        border="1px solid #90939D"
        alignItems="center"
        borderRadius="10rem"
        onClick={handleSearch}
        transition="all .3s"
        nHover={{ borderColor: '#F5B722' }}
        display={['none', 'none', 'none', 'flex']}
      >
        <SearchSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        <Span flex="1" fontSize="1rem">
          Search
        </Span>
        <Span
          py="0.25rem"
          px="0.55rem"
          bg="#161616"
          display="flex"
          gap="0.125rem"
          alignItems="center"
          borderRadius="0.5rem"
        >
          {isMacOS ? (
            <CommandSVG maxWidth="0.75rem" maxHeight="0.75rem" width="100%" />
          ) : (
            <Span fontSize="0.75rem">CTRL + </Span>
          )}
          <Span fontSize="0.75rem">K</Span>
        </Span>
      </Div>
      <Div
        flex="1"
        mr="1rem"
        color="#7C7C7C"
        textAlign="right"
        onClick={handleSearch}
        display={['block', 'block', 'block', 'none']}
        alignItems="center"
      >
        <SearchSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Div>
    </>
  );
};

export default SearchBar;
