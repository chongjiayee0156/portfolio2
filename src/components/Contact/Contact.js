import React from 'react';
import './Contact.scss';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

export default function Contact() {
    return (
        <div className="contact">
            <div className="description">
                {/* <h5>Feel free to find me at:</h5> */}
            </div>
            <div className="apps">
                <div className="app gmail">
                    <AiOutlineMail className="icon" />
                    <a href="mailto:chongjyee@gmail.com">Gmail</a>
                </div>
                <div className="app linkedin">
                    <FaLinkedin className="icon" />
                    <a href="www.linkedin.com/in/jia-yee-chong-2a5a60285">LinkedIn</a>
                </div>
                <div className="app github">
                    <AiFillGithub className="icon" />
                    <a href="https://github.com/chongjiayee0156">GitHub</a>
                </div>
                <div className="app phone">
                    <AiOutlinePhone className="icon" />
                    <a href="tel:+0173319897">Phone</a>
                </div>
            </div>
        </div>
    );
}
