/*global jQuery:false */
/*!
 * jQuery Hover Highlight Plugin v0.0.1
 * https://github.com/sunliwen/jquery-hoverlight
 *
 * Copyright 2013 Sun Liwen
 * Released under the MIT license
 */
 (function($) {
  'use strict';

  $.fn.hoverlight = function() {
    
    // class name of the hoverlightable wrapper
    var hoverlightable = "js-hoverlightable";
    
    var reg = /\b(\w+)\b/g;
    var wrapper = "<span class='" + hoverlightable + "'>$1</span>";
    
    var color = "#ffff66";

    this.each(function(){
      var self = this;
      var $self = $(self);
      $self.html($self.text().replace(reg, wrapper));
    });
    
    $('.' +  hoverlightable).hover(
        function () {
            $(this).css('background-color', color);
        },
        function () {
            $(this).css('background-color', '');
        }
    );
    
    return this;
  };
})(jQuery);