import { useDisconnectWallet } from '@mysten/dapp-kit';
import { Div } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { MEMEZ_FUN_TOKEN_AUTH } from '@/constants';

import {
  DocIDSVG,
  ExplorerSVG,
  LogoutSVG,
  PencilSVG,
  SwitchSVG,
  ToggleSVG,
} from '../svg';
import AccountsCollapseMenuInfo from './account-collapse-info';
import ExplorerCollapseMenuInfo from './explorer-collapse-info';
import ListItem from './list';
import CollapseMenuInfo from './list/list-with-collapse';
import RPCCollapseMenuInfo from './rpc-collapse-info';

const MenuList: FC = () => {
  const [isActiveNSFE, setIsActiveNSFE] = useState(false);
  const [isRPCMenuOpen, setIsRPCMenuOpen] = useState(false);
  const { mutate: disconnectWallet } = useDisconnectWallet();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isExplorerMenuOpen, setIsExplorerMenuOpen] = useState(false);

  const [, setSignedPM] = useLocalStorage<{
    signature: string;
    message: string;
    cookies?: unknown;
  }>(MEMEZ_FUN_TOKEN_AUTH, { signature: '', message: '' });

  const handleDisconnectWallet = async () => {
    setSignedPM({ signature: '', message: '' });
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/auth/sign-out`, {
      method: 'DELETE',
      credentials: 'include',
    });
    disconnectWallet();
  };

  return (
    <Div>
      <ListItem
        Icon={ToggleSVG}
        title="Turn off NSFE"
        onClick={() => setIsActiveNSFE(not)}
        activeToggle={isActiveNSFE}
      />
      <CollapseMenuInfo
        Icon={PencilSVG}
        show={isRPCMenuOpen}
        title="Select custom RPC"
        collapseInfo={<RPCCollapseMenuInfo />}
        onClick={() => setIsRPCMenuOpen(not)}
      />
      <CollapseMenuInfo
        Icon={ExplorerSVG}
        show={isExplorerMenuOpen}
        title="Select custom explorer"
        collapseInfo={<ExplorerCollapseMenuInfo />}
        onClick={() => setIsExplorerMenuOpen(not)}
      />
      <CollapseMenuInfo
        Icon={SwitchSVG}
        show={isAccountMenuOpen}
        title="Switch Accounts"
        collapseInfo={<AccountsCollapseMenuInfo />}
        onClick={() => setIsAccountMenuOpen(not)}
      />
      <ListItem Icon={DocIDSVG} title="See portfolio" />
      <ListItem
        Icon={LogoutSVG}
        title="Disconnect"
        color="#E85965"
        onClick={handleDisconnectWallet}
      />
    </Div>
  );
};

export default MenuList;
