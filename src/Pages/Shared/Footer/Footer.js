import React from 'react';
import "./Footer.scss"
import logo from "../../../assets/logo.png";
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
    <footer>
        <main className='footer-container'>
            <section>
                <img src={logo} width={189} height={38} alt="" />
                <li>Living Ecosystem</li>
                <li>Decentralized Token</li>
                <div className='d-flex align-items-center gap-2 icon4'>
                    <AiFillGithub/>
                    <BsDiscord/>
                    <BsFacebook/>
                    <AiOutlineInstagram/>
                </div>
            </section>
            <section>
                <ul>
                    <li>Pages</li>
                    <li>Network Statistic</li>
                    <li>What is AkaCoin</li>
                    <li>Wallets</li>
                    <li>Quick Start Guide </li>
                </ul>
                <ul>
                    <li>Learn</li>
                    <li>Vlog</li>
                    <li>Video</li>
                    <li>Podcast</li>
                    <li>Network states   </li>
                </ul>
                <ul>
                    <li>Support</li>
                    <li>Custommer Service</li>
                    <li>FAQ</li>
                    <li>Community</li>
                </ul>
                <ul>
                    <li>About AKA.Coin</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                    <li>Term of use</li>
                    <li>Quick start guide</li>
                    <li>Language support</li>
                    <li>Cookie policy</li>
                </ul>
            </section>
        </main>
    </footer>
    );
};

export default Footer;