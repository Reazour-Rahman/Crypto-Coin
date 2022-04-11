import React from 'react';
import "./AboutAkacoin.scss";

const AboutAkacoin = () => {
    return (
        <div className='about-aka'>
            <section className='activities-container container'>
                <div>
                    <p>Transactions<span className='on-hide'>/Second</span></p>
                    <p>2,905</p>
                </div>
                <div>
                    <p><span  className='on-hide'>Total</span>Transactions</p>
                    <p>$64,540,470,129</p>
                </div>
                <div>
                    <p>Avg. Cost<span className='on-hide'>/Transaction</span></p>
                    <p>$0.00025</p>
                </div>
                <div>
                    <p>Validator<span className='on-hide'>Nodes</span></p>
                    <p>1,645</p>
                </div>
            </section>
        </div>
    );
};

export default AboutAkacoin;