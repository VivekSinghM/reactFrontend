import React, { useContext } from 'react'
import { TableContext } from '../../../context/TableProvicer'
import Table from './table/Table'
const Tables=props=>{
    const {tableDate} = useContext(TableContext);
    const {orders} = useContext(TableContext);
    const tablesJSX= Object.entries(tableDate).map(([tId,tdata])=>{
        const order_id = tdata['order_id']
        console.log(orders[order_id]);
        return <Table key={tId} tId = {tId} order={orders[order_id]} isOccupied = {tdata['occupied']} />
    });
    return(
        <>
            <div className="row">
                    {/* col 1 */}
                <div className="col-sm">
                    <div className='row d-flex' style={{justifyContent:"space-evenly"}}>
                        {tablesJSX}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tables