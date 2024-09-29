import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBSelect, CDBContainer } from 'cdbreact';

export default function Grivance() {
    const option = [
        {
            text: 'Feature request',
            value: '1',
        },
        {
            text: 'Report a bug',
            value: '2',
        },
        {
            text: 'Help',
            value: '3',
            icon: 'question-circle',
        },
    ];
    return (
        <CDBContainer style={{ margin: "auto", padding: "30px", width: "40%" }}>
            <CDBCard style={{ width: '30rem' }}>
                <CDBCardBody className="mx-4">
                    <div className="text-center mt-4 mb-2">
                        <p className="h4"> Grivance </p>
                    </div>
                    <CDBInput type="text" icon="user" placeholder="Enter your Name" className='my-3' iconClass="text-muted" />
                    <CDBInput type="email" icon="envelope" placeholder='Enter your Email' className='my-3' iconClass="text-muted" />
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <p className="text-center m-0">Subject</p>
                        <CDBSelect className='m-3' style={{ width: '60%' }} options={option} selected="Feedback" />
                    </div>
                    <CDBInput hint="Message" type="textarea" placeholder='Enter you message here' />
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <CDBInput material type="Checkbox" />
                        <p className="m-2">Send me a copy of this message</p>
                    </div>
                    <CDBBtn color="primary" style={{ width: '40%' }} className="btn-block my-3 mx-auto">
                        Send
                    </CDBBtn>
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>
    );
};