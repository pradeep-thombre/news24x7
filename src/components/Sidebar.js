import React from 'react';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
} from 'cdbreact';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export default function Sidebar({loggedIn=false}) {
    return (
        <CDBSidebar toggled className='sidebar bg-body-tertiary text-dark'>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                <img className='mx-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9m3CZmuzIUBqrQjNoJNRgnVIMLcbOj0ZQg&s" alt="Bootstrap" width="60" height="50" />
                News 23x7
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem icon="th-large" textFontSize="14px">
                        Dashboard
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="sticky-note" textFontSize="14px">
                        Explore
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="credit-card" iconType="solid" textFontSize="14px">
                        Care Products
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="gamepad" iconType="solid" textFontSize="14px">
                        Fun and Games <Badge bg="primary">New</Badge>
                    </CDBSidebarMenuItem>
                </CDBSidebarMenu>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem>
                        <Link className='text-dark' to='/employees'>
                            Our Employees
                        </Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem >
                        <Link className='text-dark' to='/grivance'>
                            Grivance
                        </Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem>
                        <Link className='text-dark' to='/careers'>
                            Careers
                        </Link>
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem>
                        <Link className='text-dark' to='/login'>
                            {loggedIn?'Logout':'Register/Login'}
                        </Link>
                    </CDBSidebarMenuItem>
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    );
};