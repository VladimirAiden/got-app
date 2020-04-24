import React from 'react';


const RowBlock = ({left, rigth}) => {
  return (
    <div className="row">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {rigth}
      </div>
    </div>
  )
}

export default RowBlock;