import React from 'react';
import Logo from './components/Logo';
import Menubar from './components/Menubar';
import GreenForm from './components/GreenForm';

const GreenRecordPage = () => {
    return (
        <>
            <div class ="header">
                <Logo/>
                <Menubar/>
            </div>
            <GreenForm/>
        </>
    );
};

export default GreenRecordPage;