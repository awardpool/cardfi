<p align="center">
  <img src="https://assets.website-files.com/61f6aa17c5e295029bca4d0e/61f6aa17c5e295244aca4eaf_SportingDAO-Logo-256x256.png" width="150">
</p>
<h1 align="center" id="cardfi"><strong><a href="https://cardfi.co">CardFi</a></strong></h1>
<h3 align="center"><strong>NFT GIFT CARD PROTOCOL</strong></h1>
 
[CardFi](https://cardfi.co) is a new layer 3 NFT EVM protocol that provide NFT holders with the ability to store value assocated with a particular NFT and transfer it to someone else. They are essentially digital gift/debit cards with associated ERC20 tokens that can be attached to them. These tokens can then be deposited onto the card and can be locked for a given period of time. The current holder of the card is the only one that has the right to redeem the tokens. The NFT Gift Cards are easily transferable and can be traded, sold, or transferred on many popular marketplaces. There is a 3% deposit fee and a 5% withdrawal fee fee associated with these cards, however if the CardFi Token is used the fees are free.

## **What are asset-attached NFTs?**

An asset-attached NFT (non-fungible token) is a digital asset that is connected to a real-world asset. Non-fungible tokens (NFTs) are unique digital items that cannot be replaced or exchanged for something else of equal value. They are often used to represent ownership or authenticity of a digital asset, such as a piece of artwork or collectible.

When an NFT is attached to a external asset like fungibile tokens, it combines the value of the NFT with the value of the underlying asset. This can make the NFT more valuable and appealing to holders, as it represents both the unique qualities of the NFT and the value of the underlying asset.

For example, an NFT could be attached to a piece of ethreum ERC20 Token, and the value of the token would increase the value of the NFT. In this case, the NFT would represent ownership of the token and could potentially increase in value if the value of the eth token increases. This can make asset-attached NFTs an attractive asset for people looking to own and potentially profit from the attached assets.

Asset-attached NFT gift cards are a new type of gift card that are built on the decentralized web and use non-fungible tokens (NFTs) to store value. They offer several advantages over traditional gift cards, including being unique, secure, and able to be used to purchase a wide range of digital items. There is a large market opportunity for NFT gift cards, with a significant amount of money currently being spent on traditional gift cards and a growing demand for digital gift options.

# **Instructions**

This set of instructions provides a step-by-step guide to deploying, upgrading, and using a CardFi Smart Contract. It involves cloning the repository, creating a .env file with your own values, running a command in your terminal, verifying the contract, replacing the proxy address in the index.js file, running another command in the terminal, and finally upgrading the contract. Following these steps should allow you to successfully deploy and use the CardFi Smart Contract.

## **Steps to Deploy, Upgrade, and Use CardFi Smart Contract:**

1. Clone this repo to your PC and open it in VS code or IDE or your preferred IDE.

2. Create .env file in the same location as your hardhat.config.js file. The ".env" file is used to store environment variables like API keys that can be used within your application.

3. Add the following variables to the .env file, using your own values:
     PRIV_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
     RPC_API_KEY=https://polygon-mumbai.g.alchemy.com/xx/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ETHERSCAN_API_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

4. Open your terminal and run:
     npx hardhat run --network mumbai scripts/deploy.js

5. Open your wallet in the block explorer and you should see 3 deployed contracts:
     -TransparentUpgradeableProxy (Proxy contract)
     -ProxyAdmin (not needed)
     -Implementation contract

6. Click the "more options" button next to the proxy contract.
Click "Is this a proxy", then click save. It should tell you that the implementation contract is not verified.

7. Copy the address of the implementation contract and run the following command in your terminal:
     npx hardhat verify --network  xxxxxxx
(where xxxxx is the address of the implementation contract)

8. Click the save button again. This time it should save and your proxy contract address is ready to use.

9. Copy the proxy contract address and open the index.js file.
In line 17, replace the value of contractAddress with your proxy contract address.

10. Run the following command in your terminal:
     node server.js

11. Follow the localhost link from the terminal to use the CardFi contract.

## **To Upgrade the Contract:**

1. Open the cardFi_Upgrade.sol file in the "contracts" folder.

2. Make the changes needed.

3. Open the scripts/deploy_upgrade.js file.

4. Replace PROXY with your proxy contract address.

5. Run the following command in your terminal:
     npx hardhat run --network mumbai /scripts/deploy_upgrade.js

6. Repeat step 6 and 7 from the "Deploy" section above.

7. Your contract should now be upgraded.
