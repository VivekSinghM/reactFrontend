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
                      
                      <Table/>
                    </div>

                  </div>
        </>
    )
}
export default Tables