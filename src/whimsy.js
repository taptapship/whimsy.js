/*
 * whimsy.js
 *
 * Copyright (c) 2013 Stephen Sawchuk
 * Licensed under the MIT license.
 */

(function (window, $) {

  'use strict';

  appendStyle: {
    document.head.insertAdjacentHTML('beforeend'
      , '<style>'
      + '  .whimsy {'
      + '    display: inline-block;'
      + '    font-weight: bold;'
      + '    cursor: ne-resize;'
      + '    -webkit-transform: rotate(9deg);'
      + '    -ms-transform: rotate(9deg);'
      + '    transform: rotate(9deg);'
      + '    -webkit-transition: all .5s;';
      + '    transition: all .5s;'
      + '  }'
      + '  .whimsy:hover {'
      + '    -webkit-transform: rotate(360deg);'
      + '    transform: rotate(360deg);'
      + '    font-size: 300%;'
      + '    color: #281641;'
      + '  }'
      + '</style>'
    );
  };

  function whimsy(element) {
    (element = element || document.body).innerHTML =
      element.innerHTML.replace(/(\w)\.(?!\w)/g, '$1<i class="whimsy">!</i>');
  }

  $ && $.fn && ($.fn.whimsy = function () {
    return this.each(function () {
      whimsy(this);
    });
  });

  window.whimsy = whimsy;
})(window, jQuery);
