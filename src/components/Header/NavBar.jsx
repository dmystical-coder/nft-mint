import WalletConnection from "./WalletConnection";
const NavBar = () => {

  return (
  <nav className="flex items-center justify-between mx-12 my-8">
    <div className="flex items-center gap-1">
        <img className="w-12 h-12" src="/logo.svg" alt="logo" />
        <span className="text-white font-bold font-['Space Grotesk'] text-3xl">NFTMint</span>
    </div>
    <WalletConnection/>
  </nav>
  )
};

export default NavBar;
