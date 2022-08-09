import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuCard } from "../../context/MenuProvider";
import { Order } from "../../context/OrderProvide";
import Item from "./items/Item";
import css from "./OrderItems.module.css";
const OrderItems = () => {
  const { menu } = useContext(MenuCard);
  const { order } = useContext(Order);
  let temp = <></>;
  let subTotal = 0;
  // console.log(!!Object.keys(menu).length,menu);
  
    console.log("starting order effect:", order,);
    const [orderId, orderItems] = Object.entries(order)[0];
    console.log(Object.entries(order)[0], "lol", orderItems);
    console.log("menu", menu);
    temp = Object.entries(orderItems).map(([id, qty]) => {
      console.log(id, menu[id], qty);
      let item = menu[id];
      const amount = item.rate * qty;
      subTotal += amount;
      return (
        <Item item = {item} qty={qty} amount={amount} cssIconCenter={css.iconCenter}/>
      );
    });
  
  console.log("item: ", order);
  return (
    <>
      <div className="row justify-content-around">
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-header">
              <Link to='/'><h3 className="m-0">Aloo Kachaloo</h3></Link>
            </div>
            <div className="card-body" style={{overflow:'auto'}}>
              <div className="row m-2 ml-0 mr-0" style={{verticalAlign:"middle"}}>
                <div className="col-6 p-0">
                  <h5 className="card-title m-0">Your Order</h5>
                </div>
                <div className="col-6 p-0 d-flex justify-content-end">
                    <a href="/home" className="btn btn-primary p-1">
                      add item
                    </a>
                </div>
              </div>              
              <table className="table text-center m-0">
                <thead className="thead thead-light">
                  <tr>
                    <td className="text-left">items</td>
                    <td>Rate</td>
                    <td>Qty</td>
                    <td>Amount</td>
                    <td style={{ width: "auto" }}> </td>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {temp}
                  <tr>
                    <td className="text-left">Sub-Total:</td>
                    <td></td>
                    <td></td>
                    <td>{subTotal}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <hr className="mt-0" />
              <div className="row m-auto">
                <div className="col p-0">
                  <a href="/home" className="btn btn-primary">
                    Generate bill
                  </a>
                </div>
                <div className="d-flex align-items-center font-weight-bold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderItems;
