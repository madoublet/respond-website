/**
 * JS for the Respond site
 * @author: Matthew Smith
 */
var site = (function() {

  'use strict';

  var x, els, drawer;

  // setup toggle drawer
  els = document.querySelectorAll('[toggle-drawer]');

  for(x=0; x<els.length; x++) {
    els[x].addEventListener('click', function() {

      drawer = document.querySelector('.drawer');

      // toggle [active]
      if(drawer.hasAttribute('active')) {
        drawer.removeAttribute('active');
      }
      else {
        drawer.setAttribute('active', '');
      }

    });
  }

}());
