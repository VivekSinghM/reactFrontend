import React from 'react'
import Tables from './tables/Tables'
const DineIn=()=>{
    return(
        <>
        <div className= "container bg-light">
              <br/>
              <div className="row">

                {/* dinein */}
                <div className="col">
                  <h1 className="text-center"> Dine-in </h1>
                  <br/>
                    <Tables></Tables>
                </div>

                {/* other orders */}
                <div className="col-3 border mr-3">
                  <div className="row">
                    <div className="col-sm">
                      <h3 className="text-center"> Other Orders </h3>
                    </div>
                  </div>
                </div>

              </div>
              <br/>
        </div> 
        </>
    )
}
export default DineIn
