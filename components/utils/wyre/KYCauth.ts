import getDeviceToken from "../deviceToken";

const KYCauth = (publicKey: string, amount:string) => {
    const authType = window.ethereum ? 'metamask' : 'secretKey';
    const deviceToken = getDeviceToken()
    console.log(authType)
    
    let handler = new window.Wyre({
        env: "test",//or "prod"
        accountId: process.env.NEXT_PUBLIC_AC_ID,
        auth: {
            type: authType,
            secretKey: deviceToken
        },
        operation: {
            type: "onramp",
            destCurrency: "USDC",
            dest: `matic:${publicKey}`,
            sourceAmount: amount
        },
        onExit: function (error) {
            if (error != null)
                console.error(error)
            else
                console.log("exited!")
        },
        onSuccess: function () {
            console.log("success!")
        }
    });

    handler.open()
}

export default KYCauth