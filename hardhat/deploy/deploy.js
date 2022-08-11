module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const Verifier = await deploy('Verifier', {
        from: deployer,
        log: true
    });

    await deploy('NFTMint', {
        from: deployer,
        args: [Verifier.address, "ZKAPP", "ZKP"],
        log: true
    });

    // Verifier deployed to: 0xA7057C14403ee2f827057Aa2B3A3F2c104d433eD
    // NFTMint deployed to: 0xa5f8Acf6eEB36A3e9284F52b5DA2bEB9c8728523
};
module.exports.tags = ['complete'];
