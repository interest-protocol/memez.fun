import { FC } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { RPC, RPC_DISPLAY, RPC_STORAGE_KEY, RPCs } from '@/constants/rpc';

import CollapseMenuItem from './list/list-with-collapse/collapse-item';

const ExplorerCollapseMenuInfo: FC = () => {
  const [localRPC, setRPC] = useLocalStorage<RPC>(RPC_STORAGE_KEY, RPC.Shinami);

  return RPCs.map((rpc, index) => (
    <CollapseMenuItem
      key={rpc}
      name={rpc}
      withBorder={!!index}
      title={RPC_DISPLAY[rpc]}
      selected={rpc === localRPC}
      onSelect={() => setRPC(rpc)}
    />
  ));
};

export default ExplorerCollapseMenuInfo;
