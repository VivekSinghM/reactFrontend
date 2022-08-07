import React from "react";
const Bill=()=>{
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
                              <th className="text-left">items</th>
                                <th>Rate</th>
                                <th>Qty</th>
                                <th>Amount</th>
                                <th style={{width: "auto"}}> </th>
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
                            </tbody>
                          </table>
                          <hr className="mt-0"/>
                          <table style={{width: "100%"}}>
                            <tr>
                              <td><label className="m-0">Subtotal:</label></td>
                              <td>400</td>
                            </tr>
                            <tr>
                              <td><label className="m-0">CGST 2.5%:</label></td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td><label className="m-0">SGST 2.5%:</label></td>
                              <td>10</td>
                            </tr>
                          </table>
                          <hr/>
                          <table className="mb-3" style={{width: "100%"}}>
                            <tr>
                              <td><label className="m-0">Grand Total:</label></td>
                              <td>800</td>
                            </tr>
                          </table>
                          <div className='row m-auto'><div className='col p-0'><a href="/home" className="btn btn-primary">Generate bill</a></div><div className="d-flex align-items-center font-weight-bold">
                            <div className="form-group row">
                              <label for="demo_overview_minimal">Select a food</label>
                              <select id="demo_overview_minimal" className="form-control" data-role="select-dropdown" data-profile="minimal" style={{display: "none"}}>
                                <option value="apples">Apples</option>
                                <option value="bananas">Bananas</option>
                                <option value="beef">Beef</option>
                              </select>
                                <div id="bsd5-container" className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="bsd5-button" data-toggle="dropdown" data-target="#bsd5-container" aria-haspopup="true" aria-expanded="false">Apples</button>
                                    <div className="dropdown-menu" aria-labelledby="bsd5-button" style={{height: "auto", maxHeight: "300px", overflowX: "hidden"}}>
                                        <div>
                                            <a href="#" className="dropdown-item active">Apples</a>
                                            <a href="#" className="dropdown-item">Bananas</a>
                                            <a href="#" className="dropdown-item">Beef</a>
                                            <a href="#" className="dropdown-item">Chicken</a>
                                            <a href="#" className="dropdown-item">Condensed milk</a>
                                            <a href="#" className="dropdown-item">Dark chocolate</a>
                                            <a href="#" className="dropdown-item">Dried bananas</a>
                                            <a href="#" className="dropdown-item">Eggs</a>
                                            <a href="#" className="dropdown-item">Ice cream</a>
                                            <a href="#" className="dropdown-item">Milk</a>
                                            <a href="#" className="dropdown-item">Milk chocolate</a>
                                            <a href="#" className="dropdown-item">Monosodium Glutamate</a>
                                            <a href="#" className="dropdown-item">Starfruit</a>
                                            <a href="#" className="dropdown-item">Strawberries</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div></div>
                          
                        </div>
                      </div>
                </div>
            </div>
        </>
    )
}
export default Bill