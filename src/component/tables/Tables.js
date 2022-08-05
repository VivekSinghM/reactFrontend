import React from 'react'
import Table from './table/Table'
const Tables=props=>{
    return(
        <>
            <div className="row">

                    {/* col 1 */}
                    <div className="col-sm">
                    
                        <Table></Table>

                    </div>

                    {/* col 2 */}
                    <div className="col-sm">
                      <div className="card">
                        <div className="card-header">
                          T-02<span className="badge badge-secondary">Vacant</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Special title treatment</h5>
                          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>

                    </div>
                  </div>
        </>
    )
}
export default Tables