const { redirect } = require("react-router-dom");





const createOrder = async(req , res)=>{
    try{

        const {userId, cartItems, addressInfo,
            orderStatus ,
  paymentMethod,
  paymentStatus,
  totalAmount,
  orderDate,
  orderUpdateDate,
  paymentId,
  payerId,
        } = req.body;

        const create_payment_json={
            intent : 'sale',
            payer: {
                payment_method :'paypal'
            },
            redirect_urls : {
                return_url :,
                cancel_url : 
            }
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured!'
        })
    }
}



const capturePayment = async(req , res)=>{
    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured!'
        })
    }
}


module.exports ={createOrder, capturePayment}