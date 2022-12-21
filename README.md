        HOW TO DEPLOY UPGRADE AND USE CARDFI SMART CONTRACT:


        1. Clone this repo to your PC and open it in VS code.

        2. Create .env file in the same location where your hardhat.config.js file is

        3. add the variables below(the value must be yours):
        PRIV_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        RPC_API_KEY=https://polygon-mumbai.g.alchemy.com/xx/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        ETHERSCAN_API_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

        4. Open your terminal and execute the line:

        npx hardhat run --network mumbai scripts/deploy.js

        5. Open your wallet in the block explorer and you will see 3 deployed contracts:
             -TransparentUpgradeableProxy(Proxy contract);
             -ProxyAdmin(we won't need it);
             -Implementation contract;
        6. Inside of your proxy contract click "more options" button that is on the right side from the contract's name.
           Click "Is this a proxy" then click save and it will tell you that you implementation contract isn't verified

        7. Copy implementation contract's address and execute the line in your Terminal:

           npx hardhat verify --network  xxxxxxx

           where xxxxx is the implementation contracts's address

           Repeat step 6 and click "save" button again.
           This time it will save it and your proxy contract address is ready to be used.

        8. Copy your proxy contract's address and go to index.js file.
           in Line 17 replace the value of contractAddress with your proxy contract.

        9. in your Terminal Execute the line:

        node server.js

        click the localhost link from the Terminal.

        You can now use cardFi contract

        HOW TO UPGRADE YOUR CONTRACT

        10. In "contracts" folder open cardFi_Upgrade.sol file

        Make the changes that you need.

        Open scripts/deploy_upgrade.js

        Replace PROXY value with your proxy contract address

        execute the line:

        npx hardhat run --network mumbai /scripts/deploy_upgrade.js

        Repeat step 6 and 7

        Your contract is upgraded!
