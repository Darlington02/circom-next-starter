import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { ethers } from 'ethers'
const {BigNumber} = require("ethers");
const { exportCallDataGroth16 } = require("../zkproof/snarkjsZkproof");
import { useState } from 'react'
import Web3Modal from "web3modal"
require('dotenv').config()

// APP UI COMES IN HERE
