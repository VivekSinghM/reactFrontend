import React from 'react'

const Table=props=>{
    return(
        <div className="card">
            <div className="card-header p-2">
                <h3 className="d-flex justify-content-between m-0">T-01 <span className="badge badge-success">Occupied</span></h3>
            </div>
            <div className="card-body p-2">
                <h5 className="card-title mb-2">Order</h5>
                <ul className="card-text mb-2">
                    <li><div className="row m-0 d-flex justify-content-between"><span>Coffee</span><span>- 2</span></div></li>
                    <li><div className="row m-0 d-flex justify-content-between"><span>Tea</span><span>- 2</span></div></li>
                    <li><div className="row m-0 d-flex justify-content-between"><span>Milk</span><span>- 2</span></div></li>
                </ul>
                <div className='row m-auto'>
                    <div className="d-flex align-items-center font-weight-bold"><span>more..</span></div> 
                    <div className='col p-0 d-flex justify-content-end align-items-end' ><button className="btn btn-primary p-1">Generate bill</button></div>
                </div>
                {/* <p className="card-text">order 1</p>
                <div className='row m-auto'>
                    <div className='col p-0'><a href="#" className="btn btn-primary">Generate bill</a></div>
                    <div className="d-flex align-items-center font-weight-bold"><label className="m-0">total: 123.12</label></div>
                </div> */}
            </div>
        </div>
    )
}
export default Table