### To setup circom:
```bash
npm run setup:circom
```

### Run circuits

To run cicuits, located inside the `circuits` folder, first ensure wget is installed. to check, run:

```bash
wget -v
```

If it returns command not found, ensure to install wget, before proceeding.

```bash
npm run compile:circuits
```

### Bump solidity version of generated Verifier contract

To bump contract version:

```bash
npm run version:fix
```

### Run contracts

To run contracts, located inside the `contracts` folder:

```bash
npm run compile:contracts
```

### Deployment
To deploy your contracts:
1. Create a .secret file in the hardhat directory, and paste your private key there
2. To export your private key from Metamask, open Metamask and go to Account Details > Export Private Key
3. The hardhat.config.js file has been configured to read your .secret file already.
4. Update your deployment scripts in the deploy folder. We use hardhat-deploy for this boilerplate.
5. Add your network to hardhdat.config.js if it doesn't exist there.

To deploy to localhost:

```bash
npm run deploy:localhost
```

To deploy to other Networks:

```bash
npm run deploy networkName e.g npm run deploy rinkeby
```

### Run tests

To run tests:

```bash
npm run test
```