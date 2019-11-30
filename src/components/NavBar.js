import React from 'react';
import './NavBar.css';
import teamwork from '../img/teamwork.png';
export default function NavBar() {
    return (
        <nav class="db dt-l w-100 border-box pa3 ph5-l navbar">
            <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
                <img src={teamwork} class="dib w4" alt="Teamwork" />
            </a>
            <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
                <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/about" title="How it Works">How it Works</a>

                <a class="link dim dark-gray f6 f5-l dib" href="/" title="Contact">Contact</a>
            </div>
        </nav>

    )
}
