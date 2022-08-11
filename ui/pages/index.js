import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { ethers } from 'ethers'
const {BigNumber} = require("ethers");
import { useState } from 'react'
import Web3Modal from "web3modal"
const { exportCallDataGroth16 } = require("../zkproof/snarkjsZkproof");
require('dotenv').config()

export default function Home(){
    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Gasless Transactions using Relayers" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            ZK <a href="#">App</a>
            </h1>

            <p className={styles.description}>
            This demo app represents a boilerplate for a full stack zero knowledge proof Dapp using Circom, Snarkjs and Nextjs
            </p>

            <div className={styles.grid}>
            <a href="#" className={styles.card}>
                <h2>Ensure to connect to Rinkeby! &rarr;</h2>
                <p>Insert a greeting to store on Contract.</p>

                <div className={styles.greetingForm}>
                <input type="text" className={styles.input} placeholder="Enter greeting" />

                <input type="submit" className={styles.button} value="Greet" />
                </div>

                <p>Greeting: </p>
            </a>
            </div>
        </main>
        </div>
    )
}