import React from 'react';

const Header = () => {
    return (
        <header className="sans-serif">
            <div className="cover bg-left bg-center-l">
                <div className="bg-black-80 pb5 pb6-m pb7-l">
                    <nav className="dt w-100 mw8 center">
                        <div className="dtc w2 v-mid pa3">
                            <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                                TeamWork
                            </a>
                        </div>
                        <div className="dtc v-mid tr pa3">
                            <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/">How it Works</a>
                            <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/">Contact</a>

                            <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba grow" href="/">Sign Up</a>
                        </div>
                    </nav>
                    <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">This is your super impressive headline</h1>
                        <h2 className="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
                        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
                        <span className="dib v-mid ph3 white-70 mb3">or</span>
                        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/">Secondary call to action</a>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;