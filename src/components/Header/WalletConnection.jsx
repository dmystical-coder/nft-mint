import { useAccount, useDisconnect } from "wagmi";
import WalletModal from "./WalletModal";
import { shortenAddress, generateProfileIconUrl } from "../../utils/index";
import { Popover, Flex } from "@radix-ui/themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { supportedNetworks } from "../../config/walletConnection/wagmi.config";
const WalletConnection = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  if (!account.address) {
    return <WalletModal />;
  }
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button>
          <Flex align="center" gap="2" className="items-center">
            <img className="w-8 h-8 rounded-full" src={generateProfileIconUrl(account.address)} alt="Profile Icon" />
            <span className="text-white font-medium">
              {shortenAddress(account.address)}
            </span>
            <Icon
              icon="radix-icons:caret-down"
              className="w-6 h-6 text-white"
            />
          </Flex>
        </button>
      </Popover.Trigger>
      <Popover.Content width="280px" className="!p-0 !px-4 shadow-lg">
        <a
          className=""
          href={`${supportedNetworks[0].blockExplorers.default.url}/address/${account.address}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="flex items-center gap-4 w-full px-4 py-2">
            <Icon icon="gridicons:external" className="w-6 h-6" />
            <span>Explorer</span>
          </span>
        </a>
        <button className="w-full flex gap-4 items-center p-4 text-primary rounded-md">
          <Icon icon="solar:copy-line-duotone" className="w-6 h-6" />
          <span>Copy</span>
        </button>
        <button
          onClick={disconnect}
          className="w-full flex gap-4 items-center p-4 text-primary rounded-md"
        >
          <Icon icon="grommet-icons:power-shutdown" className="w-6 h-6" />
          <span>Disconnect</span>
        </button>
      </Popover.Content>
    </Popover.Root>
  );
};

export default WalletConnection;
