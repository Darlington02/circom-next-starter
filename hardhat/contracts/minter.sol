// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface Iverifier {

    function verifyProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[1] memory input
    )external view returns (bool);

}

contract NFTMint is ERC721 {

    uint256 public newItemId;

    Iverifier verifier;

    mapping(uint256 => bool) public nullifiers;

    constructor(address _verifier, string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        verifier = Iverifier(_verifier);
    }

    function mintWithProof(
        uint256 _nullifier,
        uint256 _publicNumber,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c
    ) public {
        require(nullifiers[_nullifier] == false, "NFTMint: Nullifier is used");

        require(verifier.verifyProof(
            a,
            b,
            c, 
            [_publicNumber]
        ), "NFTMint: Invalid proof");

        nullifiers[_nullifier] = true;
        newItemId++;
    }

    
}