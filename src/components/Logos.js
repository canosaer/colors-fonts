import React from 'react';
import LogoCube from './Cube'

export default function Logos() {

    return(
        <section className="logos" id="logos">
            <h3 className="logos__heading">Logos</h3>
            <div className="logos__card-display">
                <article className="logos__card">
                    <div className="cube">
                        <LogoCube />
                    </div>
                </article>
                <article className="logos__card">
                    <div className="e e_audiowide e_dark"> E
                        <div className="e__curve-up e__curve-up_dark"></div>
                        <div className="e__curve-down e__curve-down_dark"></div>
                        <div className="e__curve-across e__curve-across_dark"></div>
                    </div>
                </article>
                <article className="logos__card">
                    <div className="e e_audiowide e_light"> E
                        <div className="e__curve-up e__curve-up_light"></div>
                        <div className="e__curve-down e__curve-down_light"></div>
                        <div className="e__curve-across e__curve-across_light"></div>
                    </div>
                </article>
                <article className="logos__card">
                    <div className="e e_audiowide e_gradient"> E </div>
                </article>
                <article className="logos__card">
                    <div className="e e_audiowide e_light"> E </div>
                </article>
                <article className="logos__card">
                    <div className="e e_audiowide e_dark"> E </div>
                </article>
            </div>
        </section>
    )
}