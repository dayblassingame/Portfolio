import React from "react";
import { useEffect } from "react";

export default function Hero(){
    const mission  =  'I am here to curate bold, modern experiences that positively impact users of all demographics.';
    let missionArray = mission.split('');
    let position = 0;
    let end = missionArray.length;
    let currentText = '';
    
    const typewriter = () => {
        const text = document.getElementById('mission');
        setTimeout(()=>{
            if(position < end){
                currentText += missionArray[position];
                position++;
                text.textContent = currentText + '|';
                typewriter();
            }
        },80)
    }

    useEffect(()=>{
        const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

        if(!!isReduced){
            const text = document.getElementById('mission');
            text.textContent = mission;
        }else{
            typewriter();
        }
    },[])

    return(
        <div id='hero' className="p-C-hero">
            <span className="p-C-hero_missionContainer">
                <h2 id='mission'></h2>
            </span>
            <a href='google.com'>
                <button> View Portfolio</button>
            </a>
        </div>
    );
}