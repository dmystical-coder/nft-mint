import Header from "./components/Header";
import { useAppContext } from "./contexts/appContext";
import NFTCard from "./components/Main/NFTCard";
import useMintToken from "./hooks/useMintToken";
import Footer from "./components/Footer";
const App = () => {
  const { nextTokenId, tokenMetaData, mintPrice } = useAppContext();

  console.log("nextTokenId: ", nextTokenId);

  const tokenMetaDataArray = Array.from(tokenMetaData.values());
  const mintToken = useMintToken();
  return (
    <>
      <Header />
      <main className="h-full min-h-[calc(100vh-128px)] p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-6">
          <div className="border-l-2 border-primary p-4">
            <h1 className="text-xl font-bold">Mint NFT</h1>
            <p className="text-gray-500">
              Mint your NFT and make it available for sale
            </p>
          </div>
          <div className="border-l-2 border-primary p-4">
            <h1 className="text-xl font-bold">Manage NFTs</h1>
            <p className="text-gray-500">View and manage your minted NFTs</p>
          </div>
          <div className="border-l-2 border-primary p-4">
            <h1 className="text-xl font-bold">Marketplace</h1>
            <p className="text-gray-500">
              Buy and sell NFTs on the marketplace
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tokenMetaDataArray.map((token, i) => (
            <NFTCard
              key={token.name.split(" ").join("")}
              metadata={token}
              mintPrice={mintPrice}
              tokenId={i}
              nextTokenId={nextTokenId}
              mintNFT={mintToken}
            />
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default App;
