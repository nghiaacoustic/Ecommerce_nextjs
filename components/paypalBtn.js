import { useEffect, useRef, useContext } from 'react'
import { patchData } from '../utils/fetchData'
import { DataContext } from '../store/GlobalState'
import { updateItem } from '../store/Action'


const PaypalBtn = ({ order }) => { //address, mobile, state, dispatch, total
    const refPaypalBtn = useRef()
    const { state, dispatch } = useContext(DataContext)
    const { auth, orders } = state
    useEffect(() => {
        paypal.Buttons({
            createOrder: function (data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: order.total
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                // This function captures the funds from the transaction.
                dispatch({ type: 'NOTIFY', payload: { loading: true } })

                return actions.order.capture().then(function (details) {
                    console.log(details)
                    patchData(`order/payment/${order._id}`, {
                        paymentId: details.payer.payer_id
                    }, auth.token)
                        .then(res => {
                            if (res.err) return dispatch({ type: 'NOTIFY', payload: { err: res.err } })

                            dispatch(updateItem(orders, order._id,
                                {
                                    ...order,
                                    paid: true, dateOfPayment: details.create_time,
                                    paymentId: details.payer.payer_id,
                                    method: 'Paypal'
                                }, 'ADD_ORDERS'))

                            return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
                        })
                    // console.log(data)
                    // This function shows a transaction success message to your buyer.
                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            }
        }).render(refPaypalBtn.current);
    }, [])
    return (
        <div ref={refPaypalBtn}></div>
    )
}

export default PaypalBtn