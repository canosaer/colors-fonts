import React from 'react';
import Cube from 'react-3d-cube';

const LogoCube = () => {

    return (
      <div>
        <center>
            <h1>react-3d-cube</h1>
            <h2>set children</h2>
            <div
            style={{
                width: 300,
                height: 300
            }}
            >
            <Cube size={300} index="front">
                <div className="cube__front">E</div>
                <div className="cube__right">C</div>
                <div className="cube__back">E</div>
                <div className="cube__left">C</div>
                <div className="cube__top"></div>
                <div className="cube__bottom"></div>
            </Cube>
            </div>
        </center>
      </div>
    );
}
export default LogoCube