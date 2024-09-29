import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';

export default function Login() {
    return (
        <CDBContainer style={{ margin: "auto", width: "40%" }}>
            <CDBCard>
                <CDBCardBody className="mx-4 rounded">
                    <div className="text-center mt-4 mb-2">
                        <p className="h4 font-weight-bold"> Sign in </p>
                    </div>
                    <CDBInput placeholder='Enter your registered Email' type="email" icon="envelope" iconClass="text-muted" className='my-2' />
                    <CDBInput placeholder='Enter your password' type="password" icon="lock" iconClass="text-muted" className='my-2'/>
                    <CDBBtn color="primary" style={{ width: '40%' }} className="btn-block my-4 mx-auto">
                        Login
                    </CDBBtn>
                    <p className="text-center">
                        Not a member?{' '}
                        <CDBLink className="d-inline p-0 text-primary" to="/signup">
                            Register
                        </CDBLink>
                    </p>
                    <p className="text-center"> or sign in with</p>
                    <div className="flex-row my-3 d-flex justify-content-center">
                        <CDBBtn color="white" style={{ boxShadow: 'none' }}>
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn color="white" style={{ boxShadow: 'none' }}>
                            <CDBIcon fab icon="google-plus-g" />
                        </CDBBtn>
                    </div>
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>
    );
};