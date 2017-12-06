var slideWidth=300;
var sliderTimer;
$(function(){


    $.fn.extend({
        slider: function() {
            $('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
            sliderTimer=setInterval(nextSlide,1000);
            $('.viewport').hover(function(){
                clearInterval(sliderTimer);
            },function(){
                sliderTimer=setInterval(nextSlide,500);
            });

            function nextSlide(){
                // здесь будет реализация метода
                var currentSlide=parseInt($('.slidewrapper').data('current'));
                currentSlide++;
                if(currentSlide>=$('.slidewrapper').children().size())
                {
                    currentSlide=0;
                }
                $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
                return this.parseInt(false);
        }
    }
    });

    $('.slidewrapper').slider();
});

// function nextSlide(){
//     var currentSlide=parseInt($('.slidewrapper').data('current'));
//     currentSlide++;
//     if(currentSlide>=$('.slidewrapper').children().size())
//     {
//         currentSlide=0;
//     }
//     $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
// }

// jQuery   .plagin();