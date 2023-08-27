import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '@styles/components/Layout.scss';

const Layout = ({children}) => {
    return (
        <div className="Main">
            <Header/>
                {children}
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
