
    $(document).ready(function(){
        var duration = 500;

        $('.myBtn').click(function(){
            $('body').animate({scrollTop: 0}, duration);
        })

    });

    $(document).ready(function(){
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

                var target = this.hash;
                var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top
            }, 1000, 'swing', function () {
                window.location.hash = $target;
        });        
    });

    var bio = anime({
        targets: 'div.el',
        translateX: [
            { value: 1550, duration:1000},    
        ],
            
        delay: function(el, i, l){return i * 500},
        easing: 'easeInOutQuart',
        autoplay: false 
    });

    document.querySelector('#biography .bio').onclick = bio.restart;
    });


    var numberOnes = anime({
        targets: 'div.record',
        translateY: [
            { value: -150, duration:1000},
            { value: 150, duration:1000},
            { value: 0, duration:1000}
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },

        translateX: [
            { value: 150, duration: 1000}
        ],

        opacity: {
            value:'1'
        },

            
        delay: function(el, i, l){return i * 500},
        easing: 'easeInOutQuart',
        autoplay: false

        
    });

    document.querySelector('#listItems .numberOnes').onclick = numberOnes.restart;
  





    







 


        



   






 




