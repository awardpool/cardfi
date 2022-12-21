Steps to Deploy, Upgrade, and Use CardFi Smart Contract:

1. Clone this repo to your PC and open it in VS code.

2. Create .env file in the same location as your hardhat.config.js file.

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

To Upgrade the Contract:

1. Open the cardFi_Upgrade.sol file in the "contracts" folder.

2. Make the changes needed.

3. Open the scripts/deploy_upgrade.js file.

4. Replace PROXY with your proxy contract address.

5. Run the following command in your terminal:
     npx hardhat run --network mumbai /scripts/deploy_upgrade.js

6. Repeat step 6 and 7 from the "Deploy" section above.

7. Your contract should now be upgraded.
