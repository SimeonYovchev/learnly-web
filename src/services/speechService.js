let previousWord;

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 1;
  utterance.rate = previousWord === text ? 0.7 : 1;
  utterance.lang = 'en-GB';

  speechSynthesis.speak(utterance);
  previousWord = !previousWord ? text : undefined;
};

export default {
  speak,
};
