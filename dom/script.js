/*
--Dom
- addClass
- removeClass
- text
- html
- append
- prepend
- appendTo
*/

// $('#btn1').click( () =>{
//     $('.para1').addClass('myClass')
// })

$('p.para1').addClass('myClass')
$('p.para1').removeClass('myClass')

$('#myDiv').text('here is my text')
$('#myDiv').html('<h3> test </h3>')

$('ul').append('<li> append to my list </li>')
$('ul').prepend('<li> show me where are you </li>')

$('.para1').appendTo('.para2')