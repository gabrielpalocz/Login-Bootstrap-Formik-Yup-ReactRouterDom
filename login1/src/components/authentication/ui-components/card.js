import React from 'react'
import useWindowDimensions from '../../../utils/hook/screenSize';

/**
 * This is the card used to wrap the forms content
 */

export const Card = (props) => {
    const { height } = useWindowDimensions()

    return (
        <div className='d-flex justify-content-center align-items-center p-3' style={{ minWidth: "17rem", minHeight: `${height}px`, backgroundColor: '#ddedff' }}>
            <div className="card rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
                <div className="card-body" >
                    {props.children}
                </div>
            </div>
        </div>
    )
}
