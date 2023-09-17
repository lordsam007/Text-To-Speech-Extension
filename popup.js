document.addEventListener('DOMContentLoaded', function () {
  const speakButton = document.getElementById('speak-button');
  const textToSpeak = document.getElementById('text-to-speak');

  speakButton.addEventListener('click', function () {
    const text = textToSpeak.value;

    if (text) {
      speakText(text);
    }
  });

  // Function to speak text using the Web Speech API
  function speakText(text) {
    const speechSynthesis = window.speechSynthesis;
    const speechText = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(speechText);
  }
});
