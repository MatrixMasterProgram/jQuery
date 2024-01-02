$(document).ready(function(){
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json'
    // }).done(function (data) {
    //     console.log(data)
    //     $.map(data, function (post, i) {
    //         $('#result').append(`<h3> ${post.title} </h3> <p>${post.body}</p>`)
    //     } )
    // })

    $('#postForm').submit(function (e) {
        e.preventDefault()

        var title = $('#title').val()
        var body = $('#body').val()
        var url = $(this).attr('action')

        $.post(url, {title : title, body : body}).done(function (data) {
            console.log(data)
        })
    })
});