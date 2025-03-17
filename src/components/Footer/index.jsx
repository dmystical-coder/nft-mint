
const Footer = () => {
  return (
<footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
    <div className="flex items-center gap-1">
        <img className="w-12 h-12" src="/logo.svg" alt="logo" />
        <span className="text-white font-bold font-['Space Grotesk'] text-3xl">NFTMint</span>
    </div>

        <p class="text-sm font-medium text-gray-600 dark:text-gray-300">© Copyright 2025. All Rights Reserved.</p>

        
    </div>
</footer>
  )
}

export default Footer;
