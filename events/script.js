/*
-- Event 
- click
- on 
- dblclick
- hover
- toggle
- focus
- change
- submit
*/

// $('#btn1').click(() => {
//     alert('clicked')
// })

// $('#btn1').on('click', () => {
//     alert('clicked')
// })

// $(document).ready(function () {
//     alert('hello')
// })

// $('#btn1').dblclick( () =>{
//     alert('double click')
// })

// $('#btn1').hover(() =>{
//     $('.para1').toggle()
// })

// $('input').focus(function(){
//     //alert('you can write a name!');
//     $(this).css('background', 'red');
// });

// $('select#gender').change(function(e){
//     alert(e.target.value)
// })

$('#form').submit(function (e) {
    e.preventDefault()
    var name = $('input#name').val()
    console.log(name)
})