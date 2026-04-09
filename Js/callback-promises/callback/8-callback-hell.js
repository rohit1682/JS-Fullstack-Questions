
// suppose we have 4 APIs.

api.createOrder()
api.proceedToPayment()
api.showOrderSummary()
api.updateWallet()


// The Proceedure for each calling of Each APIs in any e-commerce website is:

// first the order is created
api.createOrder( function() {

    // then the payment is processed
    api.proceedToPayment( function() {

        //then the order summary is shown
        api.showOrderSummary( function() {

            //then the e-commerce wallet is updated
            api.updateWallet()

        } )

    } )

} )