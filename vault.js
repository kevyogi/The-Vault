'use strict';
module.exports = function() {
  var vault = {};
  function setValue (key, value){
    vault.key = key;
    vault.value = value;
  }

  function getValue(key){
    if(key === undefined || key !== vault.key){
      return null;
    }else if(key === vault.key){
      return vault.value;
    }
  }
 return {
  setValue: setValue,
  getValue: getValue
 }
};