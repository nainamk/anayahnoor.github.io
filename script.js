// SPEECH FUNCTION (given in lab)
function speak(textToSay) {
    const message = new SpeechSynthesisUtterance(textToSay);
    message.pitch = 1.2;
    message.rate = 1.0;
    window.speechSynthesis.speak(message);
}

// SHOW SENTENCE (Drill-down logic)
function showSentence() {
    const menu = document.getElementById("wordMenu");
    const box = document.getElementById("sentenceBox");

    if (menu.selectedIndex > 0) {
        const selectedOption = menu.options[menu.selectedIndex];

        // Get hidden sentence
        box.value = selectedOption.dataset.sentence;
    } else {
        box.value = "";
    }
}

// SPEAK WORD
function speakWord() {
    const menu = document.getElementById("wordMenu");

    if (menu.selectedIndex > 0) {
        const word = menu.value;
        speak(word);
    } else {
        alert("Please select a word first!");
    }
}

// SPEAK SENTENCE
function speakSentence() {
    const box = document.getElementById("sentenceBox");

    if (box.value !== "") {
        speak(box.value);
    } else {
        alert("No sentence to speak!");
    }
}
