function Daredevil(_callback){
  this.start = function(){};
  var Speech = window.SpeechRecognition ||
               window.webkitSpeechRecognition ||
               window.mozSpeechRecognition ||
               window.msSpeechRecognition ||
               window.oSpeechRecognition;

  if(Speech === "undefined"){
    //dont support speech
    return
  }

  var speech = new Speech();
  var callback = _callback;

  var initialize = function(){
    speech.continuos = true;
    speech.interimResults = false;
    speech.lang = 'pt-BR';

    speech.onresult = function(e){
      index = e.results.length - 1;
      text = e.results[index][0].transcript;
      callback(text);
    };
  }

  this.start = function(){
    speech.start();
  };

  initialize();
}
