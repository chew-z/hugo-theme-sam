$( document ).ready(function() {


    $('.carousel').on('slide.bs.carousel', function(e) {
        console.log(e.from);
        let $nextImage = $(e.relatedTarget).find('img');
        // set img src before loading image (lazy)
        $nextImage.attr('src', $nextImage.data('lazy-load-src'));
    });

    $('.carousel').on('slide.bs.carousel', function(e) {
        // sequential lazy load
        // let $nextImage = $('.active.carousel-item', this).next('.carousel-item').find('img');
    });

    // move to random image
    setInterval(function(){ 
        let randomSlide = Math.floor(Math.random() * $('.carousel-item').length);
        $('#carousel').carousel(randomSlide);
    }, 4950);
});