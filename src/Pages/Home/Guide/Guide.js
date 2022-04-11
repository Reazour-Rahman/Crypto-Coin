import React from 'react';
import './Guide.scss';
import guide1 from '../../../assets/guide1.png';
import guide2 from '../../../assets/guide2.png';
import guide3 from '../../../assets/guide3.png';
import guide4 from '../../../assets/guide4.png';

const Guide = () => {
    return (
        <div>
            {[0].map(guide => 
            
            <main className='guide-container'>
                <p className='guide-title'>Quick Start Guide</p>
                <section className='guide-steps-container'>
                    <div className='step'>
                        <img src={guide1} alt="" />
                        <div>
                            <p>1. Create a wallet</p>
                            <p>Create a Wallet using either a desktop computer or an mobile device</p>
                        </div>
                    </div>
                    <div className='step'>
                        <img src={guide2} alt="" />
                        <div>
                            <p>2. Buy ETH</p>
                            <p>You can buy Ethereum (ETH) directly on MetaMask or transfer it</p>
                        </div>
                    </div>
                    <div className='step'>
                        <img src={guide3} alt="" />
                        <div>
                            <p>3. Connect your wallet</p>
                            <p>Access your wallet to AoaSwap by clicking ‘Connect to a wallet’</p>
                        </div>
                    </div>
                    <div className='step'>
                        <img src={guide4} alt="" />
                        <div>
                            <p>4. Swap ETH to AKO</p>
                            <p>You can start swapping as you have ETH available! Press ‘Select a token’ </p>
                        </div>
                    </div>
                </section>
            </main>
            )}
        </div>
    );
};

export default Guide;