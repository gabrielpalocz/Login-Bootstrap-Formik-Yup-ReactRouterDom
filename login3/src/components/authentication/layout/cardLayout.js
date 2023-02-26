import React from 'react'
import useWindowDimensions from '../../../utils/hook/screenSize';

/**
 * This is used to wrap the forms content
 */

export const CardLayout = (props) => {
    const { height } = useWindowDimensions()

    return (
        <div className='d-flex align-items-center p-3' style={{ minWidth: "30rem", minHeight: `${height}px`, backgroundColor: '#f5f5f5' }}>
            <div class="row g-0 align-items-center">
                <div class="col" >
                    <div className='d-flex justify-content-center'>
                        <div className="card shadow border-0 rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
                            <div className="card-body" >
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                
                    <div className='container px-md-5' style={{ minWidth: "24rem" }}>
                        <h1 class="my-5 display-3 fw-bold ">
                        COMPANY <br />
                            <span class="text-primary">info of your app</span>
                        </h1>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
