import { useConnectors } from "wagmi";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, Flex } from "@radix-ui/themes";
import { useState } from "react";

const WalletModal = () => {
  const connectors = useConnectors();
  const [pendingConnectorUID, setPendingConnectorUID] = useState(null);

    const walletConnectConnector = connectors.find(
        (connector) => connector.id === "walletConnect"
    );

    const otherConnectors = connectors.filter(
        (connector) => connector.id !== "walletConnect"
    );

    const connectWallet = async (connector) => {
        try {
            setPendingConnectorUID(connector.id);
            await connector.connect();
        } catch (error) {
            console.error(error);
        } finally {
            setPendingConnectorUID(null);
        }
    };
  return (
    <Dialog.Root className="">
            <Dialog.Trigger>
                <button className="justify-center text-white text-xl font-semibold px-6 py-3 bg-blue-500 rounded-[60px] inline-flex items-center gap-2.5 cursor-pointer">
                    Connect Wallet
                </button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="400px">
                <Dialog.Title className="">
                    Available Wallets
                </Dialog.Title>

                <Flex direction="column" gap="3">
                    {walletConnectConnector && (
                        <button
                            onClick={() =>
                                connectWallet(walletConnectConnector)
                            }
                            disabled={
                                pendingConnectorUID ===
                                walletConnectConnector.uid
                            }
                            className="h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 w-full flex gap-4 items-center p-4 text-secondary cursor-pointer"
                        >
                            <img
                                src="https://logosarchive.com/wp-content/uploads/2022/02/WalletConnect-icon.svg"
                                className="w-6 h-6"
                            />
                            <span className="ml-2">Connect with WalletConnect</span>

                            {pendingConnectorUID ===
                                walletConnectConnector.uid && (
                                <Icon icon="codex:loader" className="w-4 h-4" />
                            )}
                        </button>
                    )}
                    <div className="flex flex-col gap-4">
                        {otherConnectors.map((connector) => (
                            <button
                                key={connector.id}
                                onClick={() => connectWallet(connector)}
                                disabled={pendingConnectorUID === connector.uid}
                                className="cursor-pointer h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 w-full flex gap-4 items-center p-4 bg-primary/85 text-secondary"
                            >
                                <img src={connector.icon} className="w-8 h-8" />
                                <span className="ml-2">Connect with {connector.name}</span>

                                {pendingConnectorUID === connector.uid && (
                                    <Icon
                                        icon="codex:loader"
                                        className="w-4 h-4"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
  );
};

export default WalletModal;
