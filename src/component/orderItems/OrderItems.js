import React, { useContext } from "react";
import { Order } from "../../context/OrderProvide";
const OrderItems=()=>{
  const {order} = useContext(Order)
  console.log('item: ', order)
    return (
        <>
            <div className="row justify-content-around">
                <div className="col-8">
                  <div className="card mt-4">
                        <div className="card-header">
                          <h3 className="m-0">Aloo Kachaloo</h3>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Your Order</h5>
                          <table className="table text-center m-0">
                            <thead className="thead thead-light">
                              <tr>
                                <td className="text-left">items</td>
                                <td>Rate</td>
                                <td>Qty</td>
                                <td>Amount</td>
                                <td style={{width: "auto"}}> </td>
                              </tr>
                            </thead>
                            <tbody className="tbody">
                              <tr>
                                <td className="text-left">Coffee</td>
                                <td>60</td>
                                <td>2</td>
                                <td>120</td>
                                <td style={{width: "1%"}}>
                                  <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-default btn-sm p-1">
                                      <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button type="button" className="btn btn-secondary p-1">
                                      <span className="material-symbols-outlined">close</span>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-left">Tea</td>
                                <td>60</td>
                                <td>2</td>
                                <td>120</td>
                                <td style={{width: "1%"}}>
                                  <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-default btn-sm p-1">
                                      <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button type="button" className="btn btn-secondary p-1">
                                      <span className="material-symbols-outlined">close</span>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-left text-weight-bold">Subtotal:</td>
                                <td></td>
                                <td></td>
                                <td>400</td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                          <hr className="mt-0"/>
                        
                          <div className='row m-auto'><div className='col p-0'><a href="/home" className="btn btn-primary">Generate bill</a></div><div className="d-flex align-items-center font-weight-bold">
                          </div></div>
                          
                        </div>
                      </div>
                </div>
            </div>
        </>
    )
}
export default OrderItems