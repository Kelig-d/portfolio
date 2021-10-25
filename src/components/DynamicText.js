import React, { useEffect } from "react";
import "../assets/styles/DynamicText.css";
import $ from 'jquery';
const DynamicText = () => {

    useEffect(() => {
        let array = ["Web", "Logiciel"];
        let wordIndex = 0;
        let letterIndex = 0;
        const target = document.getElementById("text-target");

        const createLetter = () => {
            const letterNumber = array[wordIndex].length;
            const time = 1000 + ((letterNumber - letterIndex) * 200);
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "1";
            letter.textContent = array[wordIndex][letterIndex];
            setTimeout(() => {
                letter.remove();
            }, time);
        };

        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(() => {
                        loop();
                    }, 2000);
                }
            }, 80);
        };
        loop();
    }, []);


    function blink_text() {
        $('.blink').fadeOut(500);
        $('.blink').fadeIn(500);
    }
    setInterval(blink_text, 1);


    return (
        <span>
            <span id="text-target"></span><span className="blink" id="input">_</span>
        </span>
    );
};

export default DynamicText;