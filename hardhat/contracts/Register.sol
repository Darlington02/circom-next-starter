// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface Iverifier {

    function verifyProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[1] memory input
    )external view returns (bool);

}

contract Register {

    string public name;

    Iverifier verifier;

    mapping(uint256 => bool) public nullifiers;

    constructor(address _verifier) {
        verifier = Iverifier(_verifier);
    }

    function registerWithProof(
        uint256 _nullifier,
        uint256 _publicNumber,
        string memory _name,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c
    ) public {
        require(nullifiers[_nullifier] == false, "Register: Nullifier is used");

        require(verifier.verifyProof(
            a,
            b,
            c, 
            [_publicNumber]
        ), "Register: Invalid proof");

        nullifiers[_nullifier] = true;
        name = _name;
    }

    
}