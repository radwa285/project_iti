
import React from 'react';
import Slider from './Slider';
import Footer from './Footer';
import Cardgrid from './Cardgrid';

export default function Home() {
    return (
        <div>
            <Slider />
            <div className='container'>
                <Cardgrid />
            </div>
            <Footer />
        </div>
    );
}
