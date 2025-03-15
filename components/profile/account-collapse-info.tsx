import {
  useAccounts,
  useCurrentAccount,
  useSwitchAccount,
} from '@mysten/dapp-kit';
import { formatAddress } from '@mysten/sui/utils';
import type { WalletAccount } from '@mysten/wallet-standard';
import { FC } from 'react';

import { isSameAddress } from '@/utils';

import CollapseMenuItem from './list/list-with-collapse/collapse-item';

const AccountsCollapseMenuInfo: FC = () => {
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  const { mutate: switchAccount } = useSwitchAccount();

  const onSwitchAccount = (account: WalletAccount) => {
    const isCurrentAccount =
      !!currentAccount &&
      isSameAddress(currentAccount.address, account.address);

    !isCurrentAccount && switchAccount({ account });
  };

  return accounts.map((account, index) => (
    <CollapseMenuItem
      key={account.address}
      name={account.address}
      withBorder={!!index}
      title={formatAddress(account.address)}
      selected={
        !!currentAccount &&
        isSameAddress(currentAccount.address, account.address)
      }
      onSelect={() => onSwitchAccount(account)}
    />
  ));
};

export default AccountsCollapseMenuInfo;
