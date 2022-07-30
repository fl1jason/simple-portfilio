import React from 'react'

function PortfilioItem({ item }) {
    console.log(item)
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={item.image} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfilioItem