import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { ethers, providers } from 'ethers'
const {BigNumber} = require("ethers");
import { useState } from 'react'
import Web3Modal from "web3modal"
const { exportCallDataGroth16 } = require("../zkproof/snarkjsZkproof");
require('dotenv').config()

// import ABIs
import register from "../abi/Register.json"
import verifier from "../abi/Verifier.json"

export default function Home(){
    const [loading, setLoading] = useState(false)
    const [ name, setName ] = useState("")
    const [ number, setNumber ] = useState("")

    // set contract addresses
    const registerAddress = "0x8804B67C2d0a014CC88CD2759f0e71a8C9714912"
    const verifierAddress = "0xA7057C14403ee2f827057Aa2B3A3F2c104d433eD"

    // verifies proof
    async function Verify() {
        try{
            setLoading(true)
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new providers.Web3Provider(connection)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(verifierAddress, verifier.abi, signer)

            // create an inputs object
            const inputs = {
                a: number,
                b: 12
            }

            // generate proof data
            let dataResult = await exportCallDataGroth16(
                inputs,
                "/zkproof/circuit.wasm",
                "/zkproof/circuit_final.zkey"
            );

            // Call the verify proof function
            let result = await contract.verifyProof(
                dataResult.a,
                dataResult.b,
                dataResult.c,
                dataResult.Input
            );

            if(result == true) alert("Your proof was successfully generated, you can go ahead to register!")

            setLoading(false)
        }
        catch(error){
            alert(error.message)
        }
    }

    // registers name
    async function Register() {
        setLoading(true)
        try{
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new providers.Web3Provider(connection)
            const userAddress = await provider.getSigner().getAddress()
            const signer = provider.getSigner()
            const contract = new ethers.Contract(registerAddress, register.abi, signer)

            const inputs = {
                a: number,
                b: 12
            }

            // generate proof data
            let dataResult = await exportCallDataGroth16(
                inputs,
                "/zkproof/circuit.wasm",
                "/zkproof/circuit_final.zkey"
            );

            // convert user address and use as nullifier
            const nullifier = BigNumber.from(userAddress).toString()
        
            const tx = await contract.registerWithProof(nullifier, number, name, dataResult.a, dataResult.b, dataResult.c)
            await tx.wait()

            alert("Name registered successfully")
        }
        catch(error){
            alert("Invalid Proof or Used Nullifier")
        }
        setLoading(false)
    }

    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Gasless Transactions using Relayers" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* set spinner */}
        {
          loading && (
            <div className={styles.spinnerWrapper}>
              <div className={styles.spinner}></div>
            </div>
          )
        }

        <main className={styles.main}>
            <h1 className={styles.title}>
            ZK <a href="#">App</a>
            </h1>

            <p className={styles.description}>
            This demo app represents a boilerplate for a full stack zero knowledge proof Dapp using Circom, Snarkjs and Nextjs
            </p>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Ensure to connect to Rinkeby! &rarr;</h2>
                    <p className={styles.instructions}>To register your name on the contract, you must first prove that you know the missing number <b>which multiplies 12 to give 144</b></p>

                    <div className={styles.numberForm}>
                        <input type="text" className={styles.input} placeholder="Enter Number" onChange={(e) => setNumber(e.target.value)} />
                        <input type="submit" className={styles.verifyButton} value="Verify" onClick={() => Verify()} />
                    </div>

                    <div className={styles.greetingForm}>
                        <input type="text" className={styles.input} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                        <input type="submit" className={styles.button} value="Register" onClick={() => Register()} />
                    </div>
                    <p>NB: You can only register once!</p>
                </div>
            </div>
        </main>
        </div>
    )
}