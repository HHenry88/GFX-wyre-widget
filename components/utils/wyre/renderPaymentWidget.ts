import Router from 'next/router'

type PaymentSuccessData = {
    data: {
      accountId: string,
      blockchainNetworkTx: string | null,
      dest: string,
      destAmount: number,
      fees: string,
      orderId: string,
      transferId: string
    }
}

type PaymentSuccessResponse = {
  data:{
    data: {
      accountId: string,
      blockchainNetworkTx: string | null,
      dest: string,
      destAmount: number,
      fees: string,
      orderId: string,
      transferId: string
    }
    type: string
  }
}

const renderPaymentWidget = (reservationId: string): void => {

    const {Wyre}: any = global

    let widget = new Wyre({
        env: 'test',
        reservation: reservationId,
        /*A reservation id is mandatory. In order for the widget to open properly you must use a new, unexpired reservation id. 
        Reservation ids are only valid for 1 hour. A new reservation must also be made if a transaction fails.*/
        operation: {
            type: 'debitcard-hosted-dialog'
        }
      });

      widget.open()

      widget.on("paymentSuccess", function (res: PaymentSuccessResponse) {
        let paymentSuccessData: PaymentSuccessData = res.data;

        Router.push({
          pathname: '/paymentSuccess/[amount]',
          query: { amount: paymentSuccessData.data.destAmount }
        })
    });
}

export default renderPaymentWidget