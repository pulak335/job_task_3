import React from 'react';
import { NavLink } from 'react-router-dom';


import './Footer.css'

const Footer = () => {
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiB0pKc02jdbhtrRDMNYYVEUdojxjNepLZUAIu8xH1ILJRFOdPIKLs0tUkzmmvogeKKPo&usqp=CAU';



    const url2 = "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png";

    const url3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJQSe0EhXELphSpq_1NThILQ4WCL4aIb_OQ&usqp=CAU'

    const url4 = "data:image/png;base64,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"

    return (

        <footer className='footer'>
            <div>
                <div>
                    <img className='footer-img' src={url} alt="" />
                </div>

            </div>
            <hr />
            <div className="d-flex justify-content-between ms-5 word ">
                <div>
                    <div>
                        <h3>ADDRESS</h3>
                    </div>
                    <div>
                        <p>
                            Farmgate, Market Plazza
                        </p>
                        <p>
                            20 No road
                        </p>
                        <p>
                            Green Road
                        </p>
                    </div>
                </div>
                <div>
                    <h3>ALSO VISIT</h3>
                    <div >
                        <div>
                            <NavLink className='navlink' to="/#">
                                Campaign World
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className='navlink' to="/#">
                                Campaign World Forum
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className='footerlink' to="/#">
                                Campaign World Blog
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="pe-4 me-5">
                    <h3 >Connect With Us</h3>
                    <div className="ms-5">
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/'>

                            <img className="url2" src={url2} alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/'>

                            <img className="url2" src={url3} alt="" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/'>

                            <img className="url2" src={url4} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;