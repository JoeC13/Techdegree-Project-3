const name = document.getElementById('name');
let total = 0;
//starts with name focused when page loads
$('#name').focus();

//hides input with id other-title.
$('#other-title').hide();

//if 'other' is selected from the option menu, input text field will show
$('#title').change(function(){
  if ($(this).val() === 'other'){
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  };
});
//extra credit - Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
$('#colors-js-puns').hide();

//only shows color of the of the shirt design selected.
//EXTRA CREDIT. Shows the color menu after a design is selected.
$('#design').change(function(event){
  if ($(this).val() === 'js puns') {
    $('#colors-js-puns').show();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  } else if ($(this).val() === 'heart js') {
    $('#colors-js-puns').show();
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
  } else {
    $('#colors-js-puns').hide();
  }
});

//disables conflicting time workshops
$('.activities').on('click', function(event){
    if ($('.activities input[name="js-frameworks"]').prop('checked') === true){
    $('.activities input[name="express"]').attr('disabled', true);
    $('.activities label').eq(3).css('color', 'lightgrey');
  } else {
    $('.activities input[name="express"]').attr('disabled', false);
    $('.activities label').eq(3).css('color', '#000');
 };
});

//disables conflicting time workshops
$('.activities').on('click', function(event){
    if ($('.activities input[name="express"]').prop('checked') === true){
    $('.activities input[name="js-frameworks"]').attr('disabled', true);
    $('.activities label').eq(1).css('color', 'lightgrey');
  } else {
    $('.activities input[name="js-frameworks"]').attr('disabled', false);
    $('.activities label').eq(1).css('color', '#000');
 };
});

//disables conflicting time workshops
$('.activities').on('click', function(event){
    if ($('.activities input[name="js-libs"]').prop('checked') === true){
    $('.activities input[name="node"]').attr('disabled', true);
    $('.activities label').eq(4).css('color', 'lightgrey');
  } else {
    $('.activities input[name="node"]').attr('disabled', false);
    $('.activities label').eq(4).css('color', '#000');
 };
});

//disables conflicting time workshops
$('.activities').on('click', function(event){
    if ($('.activities input[name="node"]').prop('checked') === true){
    $('.activities input[name="js-libs"]').attr('disabled', true);
    $('.activities label').eq(2).css('color', 'lightgrey');
  } else {
    $('.activities input[name="js-libs"]').attr('disabled', false);
    $('.activities label').eq(2).css('color', '#000');
 };
});

//Appends a Total counter for the total cost of workshops.
$('.activities').append('<h2 class="total">Total: ' + total + '</h2>');
$('.activities .total').hide();

//Adding monetary value to Total after workshop selected.
$('.activities input[name="all"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="all"]').prop('checked') === true){
    total += 200;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="all"]').prop('checked') === false){
    total -= 200;
    $('.activities .total').text ('Total: $' + total);
  };
});
$('.activities input[name="js-frameworks"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="js-frameworks"]').prop('checked') === true){
    total += 100;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="js-frameworks"]').prop('checked') === false){
    total -= 100;
    $('.activities .total').text ('Total: $' + total);
  };
});
$('.activities input[name="js-libs"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="js-libs"]').prop('checked') === true){
    total += 100;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="js-libs"]').prop('checked') === false){
    total -= 100;
    $('.activities .total').text ('Total: $' + total);
  };
});
$('.activities input[name="express"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="express"]').prop('checked') === true){
    total += 100;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="express"]').prop('checked') === false){
    total -= 100;
    $('.activities .total').text ('Total: $' + total);
  };
});
$('.activities input[name="node"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="node"]').prop('checked') === true){
    total += 100;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="node"]').prop('checked') === false){
    total -= 100;
    $('.activities .total').text ('Total: $' + total);
  };
});
$('.activities input[name="build-tools"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="build-tools"]').prop('checked') === true){
    total += 100;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="build-tools"]').prop('checked') === false){
    total -= 100;
    $('.activities .total').text ('Total: $' + total);
  };
});
$('.activities input[name="npm"]').on('click', function(event){
  $('.activities .total').show();
    if ($('.activities input[name="npm"]').prop('checked') === true){
    total += 100;
    $('.activities .total').text ('Total: $' + total);
  } else if ($('.activities input[name="npm"]').prop('checked') === false){
    total -= 100;
    $('.activities .total').text ('Total: $' + total);
  };
});

//defaults the credit credit as the option on page load nad hides other options
$('#payment option[value="credit card"]').attr("selected",true);
$('#credit-card').next().hide();
$('#credit-card').next().next().hide();
$('#credit-card').show();

//only shows which option is selected
$('#payment').change(function(event){
  if ($('#payment [value="credit card"]').prop('selected') === true) {
    $('#credit-card').show();
  } else {
    $('#credit-card').hide();
  };
});

$('#payment').change(function(event){
  if ($('#payment [value="paypal"]').prop('selected') === true) {
    $('#credit-card').next().show();
  } else {
    $('#credit-card').next().hide();
  };
});

$('#payment').change(function(event){
  if ($('#payment [value="bitcoin"]').prop('selected') === true) {
    $('#credit-card').next().next().show();
  } else {
    $('#credit-card').next().next().hide();
  };
});



 $('button').on('click', function(event){
   if ($('#name').val() === "") {
   event.preventDefault();
   $('#name').css('borderColor', 'red');
   $('#name').prev().css('color', 'red');
} else {
  $('#name').css('borderColor', '#c1deeb');
  $('#name').prev().css('color', 'black');
};
  });

  $('button').on('click', function(event){
    const emailInput = $('#mail').val();
    const emailRegex = /[^@]+@[^@.]+\.[a-z]+$/i;
    if (emailRegex.test(emailInput)) {
      $('#mail').css('borderColor', '#c1deeb');
      $('#mail').prev().css('color', 'black');
 } else {
    event.preventDefault();
    $('#mail').css('borderColor', 'red');
    $('#mail').prev().css('color', 'red');
 };
});

$('.activities legend').append('<p>Please pick an activity</p>');
$('.activities legend p').hide();

$('button').on('click', function(event){
  if ($('.activities input:checked').length < 1){
    event.preventDefault();
    $('.activities legend p').css('color', 'red');
    $('.activities legend p').show();
  } else {
    $('.activities legend p').hide();
  };
});

$('button').on('click', function(event){
  const ccInput = $('#cc-num');
  const creditCardRegex = /^\d{13,16}$/;
  const creditCardInput = $('#cc-num').val();
    if ($('#payment option[value="credit card"]').prop('selected') === true){
        if (creditCardRegex.test(creditCardInput)) {
              ccInput.css('borderColor', '#c1deeb');
              ccInput.prev().css('color', 'black').text('Card Number:');
              $('#payment').prev().prev().text('Payment Info').css('color', '');
            } else {
              event.preventDefault();
              ccInput.css('borderColor', 'red');
              ccInput.prev().css('color', 'red');
              $('#payment').prev().prev().html('Payment Info <br> Enter a 13 to 16 digit credit card number').css('color', 'red');//Extra Credit error message

            };
          };
        });

$('button').on('click', function(event){
const zipCodeRegex = /^\d{5}$/;
const zipCodeInput = $('#zip').val();
if ($('#payment option[value="credit card"]').prop('selected') === true) {
if (zipCodeRegex.test(zipCodeInput)) {
    $('#zip').css('borderColor', '#c1deeb');
    $('#zip').prev().css('color', 'black');
  } else {
    event.preventDefault();
    $('#zip').css('borderColor', 'red');
    $('#zip').prev().css('color', 'red');
  };
 };
});

$('button').on('click', function(event){
const cvvRegex = /^\d{3}$/;
const cvvInput = $('#cvv').val();
if ($('#payment option[value="credit card"]').prop('selected') === true){
  if (cvvRegex.test(cvvInput)) {
    $('#cvv').css('borderColor', '#c1deeb');
    $('#cvv').prev().css('color', 'black');
  } else {
    event.preventDefault();
    $('#cvv').css('borderColor', 'red');
    $('#cvv').prev().css('color', 'red');
  };
 };
});
