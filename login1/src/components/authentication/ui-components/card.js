import React from 'react'

export const Card = (props) => {

    return (
        <div className='d-flex justify-content-center align-items-center p-3' style={{ minWidth: "17rem", minHeight: '100vh', backgroundColor: '#ddedff' }}>
            <div className="card rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
                <div className="card-body" >
                    {props.children}
                </div>
            </div>
        </div>
    )
}
