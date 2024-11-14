import React from 'react';

function Car(props) {
    return <li>I am a { props.brand }</li>;
}

export default function C20241114(props){

    const array1 = [1, 4, 9, 16];
    const map1 = array1.map((x) => x * 2);
    console.log("test : " + map1);

    const cars = ['Ford', 'BMW', 'Audi'];
    
    return (
        <>
            <div>
                C20241114 : {props.name}
            </div>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </>
    );
}