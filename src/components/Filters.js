import React, { useState } from 'react';
import fonts from '../store/fonts'

export default function Filters() {

    const [ fontPair, setFontPair ] = useState(0);

    const updateFilters = (value) => {
        const cssRootVariables = document.documentElement.style
        const headingFont = `${fonts[value][0].name}, ${fonts[value][0].fallback}`
        const textFont = `${fonts[value][1].name}, ${fonts[value][1].fallback}`

        cssRootVariables.setProperty('--heading-font', headingFont)
        cssRootVariables.setProperty('--text-font', textFont)
        
        if( value === 0 ) cssRootVariables.setProperty('--text-transform', 'uppercase')
        else cssRootVariables.setProperty('--text-transform', 'capitalize')

        if( value === 1 ){
            cssRootVariables.setProperty('--menu-font-size', '1.1rem')
            cssRootVariables.setProperty('--bar-spacing-mobile', '1.55rem')
            cssRootVariables.setProperty('--bar-spacing-desktop', '1.3rem')
            cssRootVariables.setProperty('--menu-font-mobile', '1.25rem')
            cssRootVariables.setProperty('--heading-font-small', '2rem')
            cssRootVariables.setProperty('--heading-font-big', '2.75rem')
        } 
        else if( value === 2 ){
            cssRootVariables.setProperty('--menu-font-size', '0.95rem')
            cssRootVariables.setProperty('--bar-spacing-mobile', '1.6rem')
            cssRootVariables.setProperty('--bar-spacing-desktop', '1.85rem')
            cssRootVariables.setProperty('--menu-font-mobile', '1rem')
            cssRootVariables.setProperty('--heading-font-small', '1.75rem')
            cssRootVariables.setProperty('--heading-font-big', '2.3rem')
            
        } 
        else if( value === 0 ){
            cssRootVariables.setProperty('--menu-font-size', '1.85rem')
            cssRootVariables.setProperty('--bar-spacing-mobile', '1.6rem')
            cssRootVariables.setProperty('--bar-spacing-desktop', '1.85rem')
            cssRootVariables.setProperty('--menu-font-mobile', '1.25rem')
            cssRootVariables.setProperty('--heading-font-small', '2.4rem')
            cssRootVariables.setProperty('--heading-font-big', '3rem')
            
        }
        else if( value === 3 ){
            cssRootVariables.setProperty('--menu-font-size', '1.4rem')
            cssRootVariables.setProperty('--bar-spacing-mobile', '1.5rem')
            cssRootVariables.setProperty('--bar-spacing-desktop', '1.6rem')
            cssRootVariables.setProperty('--menu-font-mobile', '1.25rem')
            cssRootVariables.setProperty('--heading-font-small', '2.4rem')
            cssRootVariables.setProperty('--heading-font-big', '3rem')
            
        } 
        else{
            cssRootVariables.setProperty('--menu-font-size', '1rem')
            cssRootVariables.setProperty('--bar-spacing-mobile', '1.55rem')
            cssRootVariables.setProperty('--bar-spacing-desktop', '1.3rem')
            cssRootVariables.setProperty('--menu-font-mobile', '1.25rem')
            cssRootVariables.setProperty('--heading-font-small', '2rem')
            cssRootVariables.setProperty('--heading-font-big', '2.75rem')
        }
        

    }


    return(
        <div className="filter-row">
            <select name="fonts" className="dropdown-filters" id="fonts" onChange={(e) => updateFilters(parseInt(e.target.value))}>
                {fonts.map((pair, i) => {
                    const key = `pair--${i}`
                    const pairDisplay = `${pair[0].name} / ${pair[1].name}`

                    return(
                        <option key={key} className="dropdown-filters__option" value={i}>{pairDisplay}</option>
                    )
                })}
            </select>
        </div>

    )
}