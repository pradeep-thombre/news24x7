import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function ToastItem({ imgUrl, title, description, time = 'Just Now' }) {
    const [visiblity, setVisiblity] = useState(true)

    return (
        <ToastContainer
            position='top-end'
            style={{ zIndex: 1 }}
        >
            {visiblity && <Toast
                onClose={() => setVisiblity(false)}
                bg='primary'
            >
                <Toast.Header>
                    {imgUrl && <img src={imgUrl} className="rounded me-2" alt="" />}
                    <strong className="me-auto">{title}</strong>
                    <small>{time}</small>
                </Toast.Header>
                <Toast.Body className={'text-white'}>{description}</Toast.Body>
            </Toast>
            }
        </ToastContainer>
    )
}
