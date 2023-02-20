import React from 'react'
import useWindowDimensions from '../../../utils/hook/screenSize';
import image from '../../../assets/images/logImage.jpg';

/**
 * This is used to wrap the forms content
 */

export const Card = (props) => {
    const { height } = useWindowDimensions()

    return (

        <div className='row p-0 m-0 align-items-center' style={{ minWidth: "17rem", minHeight: `${height}px` }}>
            <div className='col p-3 m-0'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="card border-0" style={{ width: "30rem", minHeight: '14rem' }}>
                        <div className="card-body" >
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-5 p-0 m-0 d-none d-lg-block'>
                <img src={image} class="object-fit-fill w-100 vh-100 float-end p-0 m-0" alt="..." style={{ minHeight: "40rem" }} />
            </div>
        </div>

    )
}


