import React from 'react'
import Table from 'react-bootstrap/Table'

export const Announcements = () => {
  return (
    <div>
        <div className="page-wrapper">

<div className="content container-fluid">


  <div className="row">
    <div className="col-sm-12">
     
      <br />  <br />
      <h3 className="page-title">Annoucements</h3>

    </div>
  </div>



  <div className="row">
    <div className="col-xl-12 col-sm-3 col-12">
      <div className="card">
        <div className="card-body">

          <Table striped bordered hover>

            <thead>
              <tr>

                <th>Order</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Level</th>
                <th>Status</th>
                <th>More</th>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      
    </div>
  )
}
export default Announcements;