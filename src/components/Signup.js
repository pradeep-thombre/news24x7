import React from 'react'
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';

export default function Signup() {
    return (
        <CDBContainer style={{ margin: "auto", width: "40%" }} className='my-5'>
            <CDBCard style={{ width: '30rem' }}>
                <CDBCardBody className="mx-4">
                    <div className="text-center mt-4 mb-2">
                        <p className="h4"> Sign up </p>
                    </div>
                    <CDBInput placeholder='Enter your Name' type="text" icon="user" iconClass="text-muted" className='my-2' />
                    <CDBInput placeholder='Enter your registered Email' type="email" icon="envelope" iconClass="text-muted" className='my-2' />
                    <CDBInput placeholder='Enter your password' type="password" icon="lock" iconClass="text-muted" className='my-2'/>
                    <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p>
                    
                    <CDBInput focused placeholder='Enter Phone number' type="phone" icon="phone" iconClass="text-muted" className='my-2'/>
                    <p className="text-muted text-center small mt-n4">
                        Optional - for two step authentication
                    </p>
                    <CDBBtn color="primary" style={{ width: '40%' }} className="btn-block my-4 mx-auto">
                        Sign Up
                    </CDBBtn>

                    <p className="text-center"> or sign up with</p>
                    <div className="flex-row mb-3 d-flex justify-content-center">
                        <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                            <CDBIcon fab icon="google-plus-g" />
                        </CDBBtn>
                    </div>
                    <p className="text-center m-0">
                        Already have an account?{' '}
                        <CDBLink className="d-inline p-0 text-primary" to="/login">
                            Sign In
                        </CDBLink>
                    </p>
                    <hr />
                    <p className="text-center">
                        By clicking <em>Sign up</em> you agree to our{' '}
                        <CDBLink className="d-inline p-0 text-primary" to="/terms-conditions">
                            terms of service
                        </CDBLink>
                    </p>
                </CDBCardBody>
            </CDBCard>
        </CDBContainer>
    )
}
