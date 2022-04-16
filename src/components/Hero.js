import React, { useContext } from 'react';
import { Context } from '../store/store'

export default function Hero() {
    const [state, dispatch] = useContext(Context)
    // console.log(state)

    return(
        <section className="hero">
            <ul className="palette">
                {state.activePalette.colors.map((color, i) => {
                    const key = `color--${i}`
                    const colorClass = `palette__color ${color.bgClass}`

                    return(
                        <li key={key} className="palette__item">
                            <figcaption className="palette__color-name">{color.name}</figcaption>
                            <figure  className={colorClass}></figure>
                            <aside className="palette__hex">{color.hex}</aside>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}