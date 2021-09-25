$(document).ready(() => {
    $('.next').click(() => {
        let current = $('.active')
        let next = current.next()

        if (next.length) {
            current.removeClass('active')
            next.addClass('active')
        } else {
            current.removeClass('active').addClass('active')
            $('.is-first').addClass('active')
        }
    })

    $('.prev').on('click', () => {
        let current = $('.active')
        let prev = current.prev()
        if (prev.length) {
            current.removeClass('active')
            prev.addClass('active')
        } else {
            current.removeClass('active')
            $('.is-last').addClass('active')
        }
    })

    $('.image-gallery').mouseenter(function (e) {
        $('.big-image').attr("src", $(e.target).attr("src"))
        $('.big-image').show()
        $('.big-image').css({
            'width': '500px',
            'height': '400px',
            'border': '4px solid #ddd',
            'border-radius': '5px'
        })
        $('.bigDiv').css({
            'display': 'block'
        })
        $('.gallery .container').css({
            'opacity': '0.3'
        })
    })
    $('.image-gallery').mouseleave(function (e) {
        $('.big-image').attr("src", "")
        $('.big-image').hide()
        $('.bigDiv').css({
            'display': 'none'
        })
        $('.gallery .container').css({
            'opacity': '1'
        })
    })
})

const submitRegisterForm = () => {
    const nameInput = document.getElementById('name').value
    const passwordInput = document.getElementById('passwordReg').value
    const rePasswordInput = document.getElementById('re-password').value
    if (nameInput == "" || nameInput == " ") {
        document.getElementById('msg').innerHTML = "Enter Valid Username"
    }
    if (passwordInput != rePasswordInput) {
        document.getElementById('msg').innerHTML = "Password Not Match"
    }
}