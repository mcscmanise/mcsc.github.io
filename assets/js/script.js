/// script js adalah file DOM untuk memanupulasi halaman index.html
$.when($.ready).then(function () {
    bannerResponsive();
    showModal();
});

function showModal() {

    $(window).on('load', function () {
        $('#staticBackdrop').modal('show');
        console.log('owen');
    });
}

function hubungi() {
    let elem = $('.hubungi .row');
    if ($(window).width() < 550) {
        elem.addClass('justify-content-center')
    } else {
        elem.removeClass('justify-content-center')
    }
    $(window).resize(function () {
        if ($(window).width() < 550) {
            elem.addClass('justify-content-center')
        } else {
            elem.removeClass('justify-content-center')

        }
    });

}


function bannerResponsive() {
    let text = `
    <h1 class="banner-text display-4 text-light">Maluku Computer Study Club</h1>
    <div class='text-banner'>
        <div class="quote bg-light d-inline-block p-1 px-2 rounded-pill">
            <p class="m-0 text-center"><i>Membangun <b>Maluku</b> dengan <b>komputer</b></i></p>
        </div>  
    </div>`;
    let logo = `<div class='logo text-center'><img src="assets/img/MCSC.PNG" width="250" height="250" class="d-inline-block align-top" alt="">
    </div>`;
    if ($(window).width() < 995) {
        console.log('owen');
        $('.jumbotron .bottom').html(text);

        $('.jumbotron .top').html(logo);
    } else {
        $('.jumbotron .top').html(text);

        $('.jumbotron .bottom').html(logo);
    }
    $(window).resize(function () {
        if ($(window).width() < 900) {
            $('.jumbotron .bottom').html(text);

            $('.jumbotron .top').html(logo);
        } else {
            $('.jumbotron .top').html(text);

            $('.jumbotron .bottom').html(logo);

        }
    });
}