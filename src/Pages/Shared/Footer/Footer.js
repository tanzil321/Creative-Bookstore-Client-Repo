import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
        style={{
            background: `url("https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            backgroundSize: 'cover'
        }}
    className="p-10 mt-10">
        <div className='footer'>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </div>
        <div className='text-center mt-32'>
            <p>Copyright © 2022 - All right reserved by CreativeBooks Industries Ltd</p>
        </div>
    </footer>
    );
};

export default Footer;