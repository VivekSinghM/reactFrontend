import React from 'react'

const Table=props=>{
    return(
        <div className="card">
            <div className="card-header">
                <h3 className="d-flex justify-content-between m-0">T-01 <span className="badge badge-success">Occupied</span></h3>
            </div>
            <div className="card-body">
                <h5 className="card-title">Order</h5>
                <ul className="card-text">
                    <li><div className="row m-0 d-flex justify-content-between"><span>Coffee</span><span>- 2</span></div></li>
                    <li><div className="row m-0 d-flex justify-content-between"><span>Tea</span><span>- 2</span></div></li>
                    <li><div className="row m-0 d-flex justify-content-between"><span>Milk</span><span>- 2</span></div></li>
                </ul>
                <p> more..</p>
                {/* <p className="card-text">order 1</p> */}
                <div className='row m-auto'><div className='col p-0'><a href="#" className="btn btn-primary">Generate bill</a></div><div className="d-flex align-items-center font-weight-bold"><label className="m-0">total: 123.12</label></div></div>
            </div>
        </div>
    )
}
export default Table