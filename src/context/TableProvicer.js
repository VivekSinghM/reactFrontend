import React, { Children, createContext, useEffect, useState } from "react";

export const TableContext = createContext();

const TableProvicer = (props) => {
  const [tableDate, setTableDate] = useState({});
  const [orders, setOrders] = useState({});

  const getOrders = (orderIds) => {
    // console.log("loaded tables data:", tableDate);
    console.log("loding Orders");
    const payload = { ids: orderIds };
    fetch("/getOrders", {
      method: "POST",
      headers: {
        Accept: "appliation/json",
        "Content-type": "appliation/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
    // console.log("loaded Orders:", orders);
  };
  useEffect(() => {
    console.log("loading tables data");

    fetch("/tables")
      .then((res) => res.json())
      .then((data) => {
        setTableDate(data);
        const orderIds = [];
        Object.entries(data).forEach(([key, val]) => {
          if (!!val.order_id) orderIds.push(val.order_id);
        });
        if (orderIds.length>0) getOrders(orderIds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TableContext.Provider value={{ tableDate, orders }}>{props.children}</TableContext.Provider>
    </>
  );
};

export default TableProvicer;
