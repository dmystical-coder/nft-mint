import { JsonRpcProvider } from "ethers";
import { generateAvatarURL } from '@cfx-kit/wallet-avatar'
import { supportedNetworks } from "../config/walletConnection/wagmi.config";

export const shortenAddress = (address, length = 4) => {
    return `${address.slice(0, length)}...${address.slice(-length)}`;
};

export const generateProfileIconUrl = (account) => {
    return generateAvatarURL(account);
}

export const truncateString = (str, num) => {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
};

let readonlyProvider = null;

export const getReadOnlyProvider = () => {
    if (readonlyProvider) return readonlyProvider;
    readonlyProvider = new JsonRpcProvider(
"https://eth-sepolia.g.alchemy.com/v2/9eVwsEHVGABEzSLEcLfbUqZyES0jlBuC"    );

    return readonlyProvider;
};

export const isSupportedNetwork = (chainId) => {
    return supportedNetworks.some((network) => network.id === chainId);
};