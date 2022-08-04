# **CIRCOM-NEXT-STARTER** -The Ultimate ZK Boilerplate

This repository contains a boilerplate for full stack development of a Zero Knowledge decentralized application with the use of DSLs and tools such as Hardhat, Circom, Snarkjs, Nextjs etc.

## **A LITTLE CONTEXT**
**ZERO KNOWLEDGE PROOFS:** In cryptography, a zero-knowledge proof or zero-knowledge protocol is a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true while the prover avoids conveying any additional information apart from the fact that the statement is indeed true. The most commonly used types are ZK-Snarks and ZK-Starks. For this boilerplate, we'd be utilizing ZK-Snarks.

**ZK-Snarks:** zk-SNARK is an acronym which stands for Zero Knowledge Succinct Non-Interactive Argument of Knowledge. All zk-SNARKs have these properties; they don’t leak information, they are tiny and easy to verify even if the notion being proven is complicated, they don’t require back and forth communication, and they are proofs of knowledge — the prover must actually know the thing being claimed, not just that it is true.

**HARDHAT:** Hardhat is an environment developers use to test, compile, deploy and debug dApps based on the Ethereum blockchain. We would be using this for this boilerplate. Other significant alternatives are Truffle, Foundary and Brownie. Available Commands to aid development can be found in package.json scripts in the hardhat folder.

**CIRCOM:** Like most ZKPs, zk-SNARKs permits proving computational statements, but they cannot be applied to the computational problem directly, the statement first needs to be converted into the right form(Circuits). Circom is a novel domain-specific language (DSL) for defining arithmetic circuits that can be used to generate zero-knowledge proofs.

**SNARKJs:** Snarkjs is a JavaScript and Pure Web Assembly implementation of zkSNARK and PLONK schemes. It uses the Groth16 Protocol (3 point only and 3 pairings) and PLONK. 
You can read more about it in [the official repo](https://github.com/iden3/snarkjs)

**NEXTJs:** Nextjs is a React framework that lets you build server-side rendering and static web applications using React. We would be using Nextjs as opposed to React, as it helps you build production ready websites faster.

## **GETTING STARTED**
To get started:
1. clone the repo using:
```bash
 git clone git@github.com:Darlington02/circom-next-starter.git 
 ```

2. change directory into the hardhat folder and run:
```bash
 npm install or yarn install 
 ```

3. Follow the instructions in the Readme located in hardhat to compile, test and deploy your projects.

4. change directory into the ui folder and run:
```bash
 npm install or yarn install 
 ```

5. Follow the instructions in the Readme located in ui to run your ui locally.

6. Was the boilerplate helpful? Do give it a star.

## **PROJECT STRUCTURE**
The following graphic shows the structure of the most important elements of the boilerplate.

```text
├── circuits
│   ├── circuit.circom
│  
├── contracts
│   ├── contracts
│   │   ├── verifier.sol
├── ui
│   ├── public
│   │   ├── zkproof
│   │   │   ├── circuit.wasm
│   │   │   │── circuit_final.zkey
│   │   │
│   ├── zkproof
│   │   ├── snarkjsZkproof.js
│   │   ├
```