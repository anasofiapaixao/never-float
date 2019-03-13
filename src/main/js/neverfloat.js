
import '../css/neverfloat.css';

(function () {
  'use strict';


  for (let element of document.getElementsByTagName("*")) {
    element.style.setProperty("float", "none", "important");
  }
})();