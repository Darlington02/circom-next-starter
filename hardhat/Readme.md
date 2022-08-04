### To setup circom:
```bash
cd contracts
npm run setup:circom
```

### Run circuits

To run cicuits, located inside the `circuits` folder, first ensure wget is installed. to check, run:

```bash
wget -v
```

If it returns command not found, ensure to install wget, before proceeding.

```bash
cd circuits
npm run compile:circuits
```

### Bump version of generated Verifier contract

To bump contract version:

```bash
npm run version:fix
```

### Run contracts

To run contracts, located inside the `contracts` folder:

```bash
cd contracts
npm run compile:contracts
```

### Deploy to localhost
To run tests:

```bash
npm run deploy:localhost
```

### Run tests

To run tests:

```bash
npm run test
```

### To bump solidity version of verifier contract

```bash
npm run version:fix
```