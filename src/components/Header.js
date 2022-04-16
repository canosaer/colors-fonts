import React, { useState, useEffect, useContext } from 'react';
import palettes from '../store/palettes'
import { Context } from '../store/store'

export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);
    const [toggleBars, setToggleBars ] = useState([]);
    const [state, dispatch] = useContext(Context)

    const sidebarStyles = menuOpen ? 'menu menu_open' : 'menu'
    const dimmerStyles = menuOpen ? 'dimmer dimmer_open' : 'dimmer'

    const lockScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    const unlockScroll = () => {
        window.onscroll = function() {}
    }

    useEffect(() => {
        let toggleArray = ['','','']
        toggleArray.fill('toggle__bar')

        if(menuOpen){
            window.scrollTo(0,0)
            lockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i} toggle__bar_open`
            }
            setToggleBars(toggleArray)
        }
        else{
            unlockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i}`
            }
            setToggleBars(toggleArray)
        } 

    }, [menuOpen])

    const updatePalette = (target) => {
        if(menuOpen) setMenuOpen(!menuOpen)
        if(state.activePalette.name.toLowerCase() !== target){
            const activePalette = palettes.filter(palette => palette.name.toLowerCase() === target)[0]
            const cssRootVariables = document.documentElement.style
            cssRootVariables.setProperty('--background-color', activePalette.bodyColor)
            cssRootVariables.setProperty('--dark-color', activePalette.darkColor)
            cssRootVariables.setProperty('--light-color', activePalette.lightColor)
            dispatch ({type: 'UPDATE_PALETTE', payload: activePalette})
        }

    }

    return(
        <header className="header">

            <h1 className="header__heading">Eric Canosa</h1>
            <div className={dimmerStyles}></div>
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {toggleBars.map((bar, i) => {
                    const key = `bar--${i}`

                    return(
                        <div key={key} className={bar}></div>
                    )
                })}
            </button>

            <nav className={sidebarStyles}>
                <ul className="menu__list">
                    {palettes.map((palette, i) => {
                        const key = `palette--${i}`

                        return(
                            <li key={key} className="menu__item"><a href="#" onClick={(e) => updatePalette(e.target.innerText.toLowerCase())} className="menu__link">{palette.name} <div className="menu__bar"></div> </a></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}