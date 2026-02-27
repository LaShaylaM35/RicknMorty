import React from 'react'

export const Cards = ({name, status, image}) => {
    return (
        <>
            <div className="card m-3" >
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{status}</p>
                </div>
            </div>
        </>

    )
}
