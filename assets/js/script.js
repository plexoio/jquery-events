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

     // STREAM 1
     $('.stream1 .card_para').hide('slow');
     $(".show1").click(function (event) { // does the same as .on('click', function() {}); call-back
          event.preventDefault();
          $('.stream1').slideDown('slow').addClass('highlight_stream'); // chaining
          $('.stream2 .card_para').fadeOut('slow');
          $('.stream3 .card_para').fadeOut('slow');
          $('.stream4 .card_para').fadeOut('slow');
          $('.stream5 .card_para').fadeOut('slow');
          $('.stream6 .card_para').fadeOut('slow');

          $('.stream1 .card_para').toggle('slow');

          $('.stream2').fadeTo(1000, 0.5);
          $('.stream3').fadeTo(1000, 0.5);
          $('.stream4').fadeTo(1000, 0.5);
          $('.stream5').fadeTo(1000, 0.5);
          $('.stream6').fadeTo(1000, 0.5);
          
          $(".stream2").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream4").removeClass('highlight_stream');
          $(".stream5").removeClass('highlight_stream');
          $(".stream6").removeClass('highlight_stream');
          
     });

     // STREAM 2
     $('.stream2 .card_para').hide('slow');
     $(".show2").click(function (event) {
          event.preventDefault();
          $('.stream2').fadeTo(1000, 1);
          $('.stream1 .card_para').fadeOut('slow');
          $('.stream3 .card_para').fadeOut('slow');
          $('.stream4 .card_para').fadeOut('slow');
          $('.stream5 .card_para').fadeOut('slow');
          $('.stream6 .card_para').fadeOut('slow');

          $('.stream2 .card_para').toggle('slow');

          $(".stream2").addClass('highlight_stream');
          $(".stream1").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream4").removeClass('highlight_stream');
          $(".stream5").removeClass('highlight_stream');
          $(".stream6").removeClass('highlight_stream');
     });

     // STREAM 3
     $('.stream3 .card_para').hide('slow');
     $(".show3").on("click", function (event) {
          event.preventDefault();
          $('.stream3').fadeTo(1000, 1);
          $('.stream2 .card_para').fadeOut('slow');
          $('.stream1 .card_para').fadeOut('slow');
          $('.stream4 .card_para').fadeOut('slow');
          $('.stream5 .card_para').fadeOut('slow');
          $('.stream6 .card_para').fadeOut('slow');

          $('.stream3 .card_para').toggle('slow');

          $(".stream3").addClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream1").removeClass('highlight_stream');
          $(".stream4").removeClass('highlight_stream');
          $(".stream5").removeClass('highlight_stream');
          $(".stream6").removeClass('highlight_stream');
     });

     // STREAM 4
     $('.stream4 .card_para').hide('slow');
     $(".show4").on("click", function (event) {
          event.preventDefault();
          $('.stream4').fadeTo(1000, 1);
          $('.stream3 .card_para').fadeOut('slow');
          $('.stream2 .card_para').fadeOut('slow');
          $('.stream1 .card_para').fadeOut('slow');
          $('.stream5 .card_para').fadeOut('slow');
          $('.stream6 .card_para').fadeOut('slow');

          $('.stream4 .card_para').toggle('slow');

          $(".stream4").addClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream1").removeClass('highlight_stream');
          $(".stream5").removeClass('highlight_stream');
          $(".stream6").removeClass('highlight_stream');
     });

     // STREAM 5
     $('.stream5 .card_para').hide('slow');
     $(".show5").on("click", function (event) {
          event.preventDefault();
          $('.stream5').fadeTo(1000, 1);
          $('.stream4 .card_para').fadeOut('slow');
          $('.stream3 .card_para').fadeOut('slow');
          $('.stream2 .card_para').fadeOut('slow');
          $('.stream1 .card_para').fadeOut('slow');
          $('.stream6 .card_para').fadeOut('slow');

          $('.stream5 .card_para').toggle('slow');

          $(".stream5").addClass('highlight_stream');
          $(".stream4").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream1").removeClass('highlight_stream');
          $(".stream6").removeClass('highlight_stream');
     });

     
     // STREAM 6
     $('.stream6 .card_para').hide('slow');
     $(".show6").on("click", function (event) {
          event.preventDefault();
          $('.stream6').fadeTo(1000, 1);
          $('.stream5 .card_para').fadeOut('slow');
          $('.stream4 .card_para').fadeOut('slow');
          $('.stream3 .card_para').fadeOut('slow');
          $('.stream2 .card_para').fadeOut('slow');
          $('.stream1 .card_para').fadeOut('slow');

          $('.stream6 .card_para').toggle('slow');

          $(".stream6").addClass('highlight_stream');
          $(".stream5").removeClass('highlight_stream');
          $(".stream4").removeClass('highlight_stream');
          $(".stream3").removeClass('highlight_stream');
          $(".stream2").removeClass('highlight_stream');
          $(".stream1").removeClass('highlight_stream');
     });

});