function DaredevilCommand(obj){
  var hasAllAttr = obj.hasOwnProperty('command') &&
                   obj.hasOwnProperty('callback');

  if (!hasAllAttr){ return ; }

  var callbackIsFunction = typeof obj.callback === 'function';
  var commandIsString = typeof obj.command === 'string';

  if (!(callbackIsFunction && commandIsString)){ return ; }

  eventCommand = new CustomEvent('DaredevilCommand', {'detail': obj});
  eventCommand.initEvent("daredevilAddCommand", false, false);
  document.dispatchEvent(eventCommand);
};
