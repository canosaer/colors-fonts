import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Logos() {

    return(
        <section className="logos" id="logos">
            <h3 className="logos__heading">Logos</h3>
            <div className="logos__card-display">
                {/* <article className="logos__card logo__card">
                    <div className="e e_audiowide e_black"> E
                        <div className="e__curve-up e__curve-up_black"></div>
                        <div className="e__curve-down e__curve-down_black"></div>
                        <div className="e__curve-across e__curve-across_black"></div>
                    </div>
                </article> */}
                <article className="logos__card logo__card">
                    <div className="e e_audiowide e_dark"> E
                        <div className="e__curve-up e__curve-up_dark"></div>
                        <div className="e__curve-down e__curve-down_dark"></div>
                        <div className="e__curve-across e__curve-across_dark"></div>
                    </div>
                </article>
                <article className="logos__card logo__card">
                    <div className="e e_audiowide e_light"> E
                        <div className="e__curve-up e__curve-up_light"></div>
                        <div className="e__curve-down e__curve-down_light"></div>
                        <div className="e__curve-across e__curve-across_light"></div>
                    </div>
                </article>
                <article className="logos__card logo__card">
                    <div className="e e_audiowide e_gradient"> E </div>
                </article>
                <article className="logos__card logo__card">
                    <div className="e e_audiowide e_light"> E </div>
                </article>
                <article className="logos__card logo__card">
                    <div className="e e_audiowide e_dark"> E </div>
                </article>
                <article className="logos__card logo__card">
                    <div className="e e_rock e_dark"> E </div>
                </article>
                <article className="logos__card logo__card">
                    <div className="e e_rock e_light"> E </div>
                </article>
                <article className="logos__card logo__card">
                    <FontAwesomeIcon className="chip chip_dark" icon="fa-solid fa-microchip" />
                    <div className="chip__top-curve chip__top-curve_dark chip__top-curve_outer"></div>
                    <div className="chip__top-curve chip__top-curve_dark chip__top-curve_middle"></div>
                    <div className="chip__top-curve chip__top-curve_dark chip__top-curve_inner"></div>
                    <div className="chip__bottom-curve chip__bottom-curve_dark chip__bottom-curve_outer"></div>
                    <div className="chip__bottom-curve chip__bottom-curve_dark chip__bottom-curve_middle"></div>
                    <div className="chip__bottom-curve chip__bottom-curve_dark chip__bottom-curve_inner"></div>
                    <div className="chip__line-across chip__line-across_dark chip__line-across_top"></div>
                    <div className="chip__line-across chip__line-across_dark chip__line-across_middle"></div>
                    <div className="chip__line-across chip__line-across_dark chip__line-across_bottom"></div>
                </article>
                <article className="logos__card logo__card">
                    <FontAwesomeIcon className="chip chip_light" icon="fa-solid fa-microchip" />
                    <div className="chip__top-curve chip__top-curve_light chip__top-curve_outer"></div>
                    <div className="chip__top-curve chip__top-curve_light chip__top-curve_middle"></div>
                    <div className="chip__top-curve chip__top-curve_light chip__top-curve_inner"></div>
                    <div className="chip__bottom-curve chip__bottom-curve_light chip__bottom-curve_outer"></div>
                    <div className="chip__bottom-curve chip__bottom-curve_light chip__bottom-curve_middle"></div>
                    <div className="chip__bottom-curve chip__bottom-curve_light chip__bottom-curve_inner"></div>
                    <div className="chip__line-across chip__line-across_light chip__line-across_top"></div>
                    <div className="chip__line-across chip__line-across_light chip__line-across_middle"></div>
                    <div className="chip__line-across chip__line-across_light chip__line-across_bottom"></div>
                </article>
                <article className="logos__card logo__card">
                    <FontAwesomeIcon className="litecoin litecoin_dark" icon="fa-solid fa-litecoin-sign" />
                    <div className="litecoin__top litecoin__top_dark"></div>
                </article>
                <article className="logos__card logo__card">
                    <FontAwesomeIcon className="litecoin litecoin_light" icon="fa-solid fa-litecoin-sign" />
                    <div className="litecoin__top litecoin__top_light"></div>
                </article>
            </div>
        </section>
    )
}