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
    }


    return(
        <div className="filter-row">
            <select name="fonts" className="dropdown-filters" id="fonts" onChange={(e) => updateFilters(e.target.value)}>
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