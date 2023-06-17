/** Effects:
 * 
 * show() // slow, medium or fast OR numbers '1000' milliseconds
 * hide()
 * toggle() // if off then on, if on then off, with all kinds of event listeners
 * slideDown() // show if hidden
 * slideUp() // hide if shown
 * slideToggle() // includes slideDown & slideUp
 * fadeIn() // fade & show a hidden element
 * fadeOut() // fade & hide a visible element
 * fadeToggle() // includes fadeIn & fadeOut
 * fadeTo(1000, 0.5) // fade to a specific state, make transparent, 2 parameters needed 'value, opacity'
 * '0' is 100% transparent (hidden) & '1' is fully opaque (shown)
 * 
*/

/** Event listeners:
 * 
 * mouseenter(function(){//effects})
 * mouseleave(function(){//effects})
 * hover(function(){//effects})
 * click(function(){//effects})
 * load(function(){//effects})  for images, iframes, and other elements loaded from external sources
 * 
 */

/** Methods:
 * 
 * removeClass('class_name') // remove element class
 * addClass('class_name') // add element class
 * html() // to show or add html
 * css() // to show or add inline css
 * 
 */

/**
 * $(document).ready(function () { // add code here }); // run after DOM is loaded
 */

$(document).ready(function () {

     $('.stream1 .card_para').hide('slow');
     $(".show1").click(function () { // does the same as .on('click', function() {}); call-back
          $('.stream1 .card_para').toggle('slow');
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream1").addClass('highlight_stream');
     }).mouseleave(function () { // start chaining
          $(".stream1").removeClass('highlight_stream');
     });

     $('.stream2 .card_para').hide('slow');
     $(".show2").click(function () {
          $('.stream2 .card_para').toggle('slow');
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream2").addClass('highlight_stream');
     }).mouseleave(function () { // start chaining
          $(".stream2").removeClass('highlight_stream');
     });

     $('.stream3 .card_para').hide('slow');
     $(".show3").on("click", function () {
          $('.stream3 .card_para').toggle('slow');
          $(".stream1").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream3").addClass('highlight_stream');
     }).mouseleave(function () { // start chaining
          $(".stream3").removeClass('highlight_stream');
     });
});