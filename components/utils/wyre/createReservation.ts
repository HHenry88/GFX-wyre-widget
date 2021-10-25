type Reservation = {
    url: string,
    reservation: string,
}

const createReservation = async (publicKey: string, amount: string) : Promise<Reservation> => {
  const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`
      },
      body: JSON.stringify({
        referrerAccountId: process.env.NEXT_PUBLIC_AC_ID,
        amount: amount,
        sourceCurrency: 'USD',
        destCurrency: 'USDC',
        dest: `matic:${publicKey}`
      })
    };

    // Testing api
    let res = await fetch('https://api.testwyre.com/v3/orders/reserve', options)   

    // Production api
    // let res = await fetch('https://api.sendwyre.com/v3/orders/reserve', options)        

    return res.json()
}

export default createReservation
