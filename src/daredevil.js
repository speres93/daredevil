function Daredevil(){
  var speech = new webkitSpeechRecognition();
  var that = this;

  this.routes = [];
  this.initialize = function(userOptions){
    speech.continuos = true;
    speech.interimResults = false;
    speech.lang = 'pt-BR';

    speech.onresult = function(e){
      index = e.results.length - 1;
      text = e.results[index][0].transcript;
      that.checkActions(text);
      console.log(text);
    };

    speech.onend = function() {
        this.start();
    };
  }

  this.start = function(){
    speech.start();
  }

  this.addActions = function(action){
    var isActionExist = false;
    if (action){
      this.routes.forEach(function(element){
        if (element['regexp'] == action['regexp']){
          isActionExist = true;
        }
      });

      if(!isActionExist){
        this.routes.push(action);
      }
    }
    return !isActionExist
  }

  this.checkActions = function(text){
    this.routes.forEach(function(element){
      var currentRegex = new RegExp(element['regexp'], 'i');
      if(currentRegex.test(text)){
        element['callback'](text);
      }
    });
  }

  this.initialize()
}
