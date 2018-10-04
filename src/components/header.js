import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import Game from './game'

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav handleReset={e => props.handleReset()}/>
            {/* <InfoModal /> */}
            <h1>HOT or COLD</h1>
        </header>
    );
};
