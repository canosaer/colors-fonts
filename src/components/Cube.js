import React, { useEffect, useRef, useState} from 'react';
import Cube from 'react-3d-cube';
import { gsap } from "gsap";

const LogoCube = () => {

    const [ cubeWrapper, setCubeWrapper ] = useState(null);
    const [ cubeInitialized, setCubeInitialized ] = useState(false);

    const containerDiv = useRef();

    useEffect(() => {
        if(cubeWrapper && !cubeInitialized){
            cubeWrapper.classList.add('enter-transition')
            setCubeInitialized(true)
            cubeWrapper.classList.add('initial-cube')

            const timer = setTimeout(() => {
                cubeWrapper.classList.remove('enter-transition')
                cubeWrapper.classList.add('exit-transition')
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [cubeWrapper]);

    const unlockCube = () => {
        cubeWrapper.classList.remove('initial-cube')
        const timer = setTimeout(() => {
            if(cubeWrapper.classList.contains('exit-transition')) cubeWrapper.classList.remove('exit-transition')
            if(cubeWrapper.classList.contains('enter-transition')) cubeWrapper.classList.remove('enter-transition')
        }, 1500);
        return () => clearTimeout(timer);
    }


    useEffect(() => {
        if(containerDiv.current){
            setCubeWrapper(containerDiv.current.firstChild.firstChild)
        }
    }, [containerDiv]);

    return (
      <div>
        <center>
            <div ref={containerDiv} onMouseEnter={unlockCube}
            style={{
                width: 200,
                height: 200,
            }}
            >
                <Cube size={200} index="front">
                    <div className="cube__content"><p className="cube__letter">E</p></div>
                    <div className="cube__content"><p className="cube__letter">C</p></div>
                    <div className="cube__content"><p className="cube__letter">E</p></div>
                    <div className="cube__content"><p className="cube__letter">C</p></div>
                    <div className="cube__content">
                        <div className="cube__logo">
                            <div className="e e_audiowide e_dark"> E
                                <div className="e__curve-up e__curve-up_dark"></div>
                                <div className="e__curve-down e__curve-down_dark"></div>
                                <div className="e__curve-across e__curve-across_dark"></div>
                            </div>
                        </div>
                    </div>
                    <div className="cube__content">
                        <div className="cube__logo">
                            <div className="e e_audiowide e_dark"> E
                                <div className="e__curve-up e__curve-up_dark"></div>
                                <div className="e__curve-down e__curve-down_dark"></div>
                                <div className="e__curve-across e__curve-across_dark"></div>
                            </div>
                        </div>
                    </div>
                </Cube>
            </div>
        </center>
      </div>
    );
}

export default LogoCube