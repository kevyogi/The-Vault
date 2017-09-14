'use strict';
module.exports = function() {
  function setValue (key, value){
    setValue.key = key;
    setValue.value = value;
  }

  function getValue(key){
    if(key === undefined){
      return null;
    }else if(key !== setValue.key){
      return null;
    }else if(key === setValue.key){
      return setValue.value;
    }
  }
 return {
  setValue: setValue,
  getValue: getValue
 }
};