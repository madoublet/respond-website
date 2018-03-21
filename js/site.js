/**
 * JS for the Respond site
 * @author: Matthew Smith
 */
var site = (function() {

  'use strict';

  var x, els, drawer, el, plan, starter, core, pro, target;

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
  
  // setup show-subscribe data-plan="respond-core"
  els = document.querySelectorAll('[show-subscribe]');

  for(x=0; x<els.length; x++) {
    els[x].addEventListener('click', function(e) {
    
      target = e.target;    
      el = document.querySelector('#subscribe-box');
      starter = document.querySelector('#respond-starter');
      core = document.querySelector('#respond-core');
      pro = document.querySelector('#respond-pro');
      
      starter.style.display = 'none';
      core.style.display = 'none';
      pro.style.display = 'none';

      // toggle [active]
      if(el.hasAttribute('active')) {
        el.removeAttribute('active');
      }
      else {
        el.setAttribute('active', '');
      }
     
      // get plan
      plan = target.getAttribute('data-plan');
      
      if(plan == "respond-starter") {
        starter.style.display = 'block';
        starter.setAttribute('disabled', 'disabled');
      }
      else if(plan == "respond-core") {
        core.style.display = 'block';
        starter.setAttribute('disabled', 'disabled');
      }
      else if(plan == "respond-pro") {
        pro.style.display = 'block';
        starter.setAttribute('disabled', 'disabled');
      }

    });
  }

}());
