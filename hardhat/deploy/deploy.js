module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const Verifier = await deploy('Verifier', {
        from: deployer,
        log: true
    });

    await deploy('Register', {
        from: deployer,
        args: [Verifier.address],
        log: true
    });

    // Verifier deployed to: 0xA7057C14403ee2f827057Aa2B3A3F2c104d433eD
    // Register deployed to: 0x8804B67C2d0a014CC88CD2759f0e71a8C9714912
};
module.exports.tags = ['complete'];
