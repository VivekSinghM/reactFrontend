import React, { useState, createContext } from "react";

export const Order = createContext()

const OrderProvider = props =>{
    const [order,setOrder] = useState({})

    const sendOrder=(orderItems)=>{
        const payload={order:orderItems}
        const tid=1
        fetch('/order?tid=' + tid, {
            method: "POST",
            headers: {
              "Accept": "appliation/json",
              "Content-type": "appliation/json",
            },
            body: JSON.stringify(payload),
          })
        .then(res=>res.json()).then(res=>{const orderId=res.order_id; console.log("order id:",orderId); setOrder({ orderId : orderItems })})
        .catch(error=>console.log(error));
    }
    return (
        <>
        <Order.Provider value={{order,sendOrder}}>
            {props.children}
        </Order.Provider>
        </>
    );
}
export default OrderProvider