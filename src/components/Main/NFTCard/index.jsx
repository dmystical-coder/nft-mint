import { Icon } from "@iconify/react/dist/iconify.js";
import { formatEther } from "ethers";
import React from "react";
import { truncateString } from "../../../utils";

const NFTCard = ({ metadata, mintPrice, tokenId, nextTokenId, mintNFT }) => {
    return (
        <div className="w-full space-y-4 rounded-xl bg-secondary shadow-sm border border-primary p-2">
            <img
                src={metadata.image}
                alt={`${metadata.name} image`}
                className="rounded-xl w-full h-64"
            />
            <h1 className="font-bold">{metadata.name}</h1>
            <p className="text-s ">
                {truncateString(metadata.description, 100)}
            </p>

            <div className="flex gap-2">
                <Icon icon="ri:file-list-3-line" className="w-6 h-6" />
                <span>{metadata.attributes.length} Attributes</span>
            </div>

            <div className="flex gap-2">
                <Icon icon="ri:eth-line" className="w-6 h-6" />
                <span>{`${formatEther(mintPrice)} ETH`}</span>
            </div>

            <button
                disabled={Number(nextTokenId) !== tokenId}
                onClick={mintNFT}
                className="justify-center text-white text-xl font-semibold px-6 py-3 bg-blue-500 rounded-[60px] inline-flex items-center gap-2.5 cursor-pointer disabled:bg-gray-500"
            >
                {Number(nextTokenId) <= tokenId ? "Mint NFT" : "Owned"}
            </button>
        </div>
    );
};

export default NFTCard;