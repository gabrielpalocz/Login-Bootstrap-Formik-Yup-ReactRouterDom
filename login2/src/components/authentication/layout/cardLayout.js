import React from 'react'
import useWindowDimensions from '../../../utils/hook/screenSize';
import image from '../../../assets/images/logImage.jpg';


/**
 * This is used to wrap the forms content
 */

export const CardLayout = (props) => {
    const { height } = useWindowDimensions()

    return (
        <div className='d-flex justify-content-center align-items-center p-3' style={{ minWidth: "17rem", minHeight: `${height}px`, backgroundColor: '#ddedff' }}>
            <div className="card rounded shadow" style={{ width: "53rem", minHeight: "14rem" }}>
                <div class="row g-0 align-items-center">
                    <div class="col d-none d-md-block">
                        <img src={image} class="object-fit-fill rounded-start" alt="logImage" />
                    </div>
                    <div class="col">
                        <div className="card-body" >
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


