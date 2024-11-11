import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./Footerstyle.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <div className="newsletter-wrapper">

                    <div className="newsletter">
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Sign up for updates from mettā muse.</p>
                        <div className="subscribe">
                            <input type="email" placeholder="Enter your email..." />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>

                    <div className="footer-sections">
                        <div className="footer-section">
                            <h4>CONTACT US</h4>
                            <p>+44 221 133 5360</p>
                            <p>customercare@mettamuse.com</p>
                        </div>
                        <div className="footer-section">
                            <h4>CURRENCY</h4>
                            <div className="currency-container">
                                <Image src="/United States of America (US).svg" alt="currency icon" className="currency-icon" width={300}
                                    height={300} />
                                <p>USD</p>

                            </div>
                            <p className="transaction-info">
                                Transaction will be completed in Euros, and a currency reference is available on hover.
                            </p>
                        </div>
                    </div>

                </div>

                <hr className="divider" />



                <div className="footer-content">
                    <div className="footer-section">
                        <h4>mettā muse</h4>
                        <Link href="/about">About</Link>
                        <Link href="/stories">Stories</Link>
                        <Link href="/artisans">Artisans</Link>
                        <Link href="/boutiques">Boutiques</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/eu-compliance">EU Compliance Docs</Link>
                    </div>
                    <div className="footer-section">
                        <h4>QUICK LINKS</h4>
                        <Link href="/orders">Orders & Shipping</Link>
                        <Link href="/join">Join/Login as a Seller</Link>
                        <Link href="/payment">Payment & Pricing</Link>
                        <Link href="/returns">Return & Refunds</Link>
                        <Link href="/faqs">FAQs</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms & Conditions</Link>
                    </div>


                    <div>
                        <div className="footer-section">
                            <h4>FOLLOW US</h4>

                            <Image src="/Insta.svg" alt="Instagram icon" className="currency-icon" width={300} height={300} />
                            <Image src="/Insta.svg" alt="linked icon" className="currency-icon" width={300} height={300} />


                        </div>

                        <div className="footer-section">
                            <h4>meeta muse ACCEPTS</h4>
                            <div className="currency-container">
                                <Image src="/Google.svg" alt="Instagram icon" className="currency-icon" width={300} height={300} />
                                <Image src="/redorange_img.svg" alt="linked icon" className="currency-icon" width={300} height={300} />
                                <Image src="/paytm_img.svg" alt="linked icon" className="currency-icon" width={300} height={300} />
                            
                                <Image src="/apes.svg" alt="linked icon" className="currency-icon" width={300} height={300} />

                                
                                <Image src="/apple.svg" alt="linked icon" className="currency-icon" width={300} height={300} />
                                <Image src="/opay.svg" alt="linked icon" className="currency-icon" width={300} height={300} />

                            </div>
                        </div>


                    </div>


                </div>


                <div className="footer-bottom">
                    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
