$( function() {
    
    if( $( "#accordion" ) != null ) {
        $( "#accordion" ).accordion();
    }
    
    if( $( "#tabs" ) != null ) {
        $( "#tabs" ).tabs();
    }
        
    if( $( '.center' ) != null ) {
        $('.center').slick({
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: false,
                //centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
    }   
    
    if( $( '.single-item' ) != null ) {
        $('.single-item').slick();
    }
    
    if( document.querySelector('.slick-track') != null ) {
        var _cont = document.querySelector('.slick-track').children,
            _note = document.querySelector('#note-bwi'),
            _label = document.querySelector('.bwi'),
            _firstElem = document.querySelector('.first-el');
    }
    
    function _q( elem ) {
        elem.onclick = function() {
            _firstElem.setAttribute('src',elem.children[0].getAttribute("src"));
            _note.checked = true;
        }
    }
    
    if( _cont != null ) {
        for( var q = 0; q < _cont.length; q++ ) {
            _q( _cont[q] );
        }
    }
    
    $('.autoplay').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    });
    
    $('.autoplay-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    });
    
} );

function calc_count_serv_st(){
	var ccount = $('div[aria-hidden=false] .plus-minus li:nth-child(2)').html();
	$('div[aria-hidden=false] .calc-val').html('Стоимость: ' + (3000+1500*(parseInt(ccount) - 1)) + ' рублей');
}
function calc_sum_servcomp(){
	$('div.os-block-costt span').html(600*(parseInt($('.plus-minusaa li:nth-child(2)').html()))  + 1500*(parseInt($('.plus-minusc li:nth-child(2)').html())));
}
function calc_count_serv_bz(){
	var ccount = $('div[aria-hidden=false] .plus-minus li:nth-child(2)').html();
	if (ccount > 3){
	    $('div[aria-hidden=false] .calc-val').html('Стоимость: ' + (8000+2000*(parseInt(ccount) - 3)) + ' рублей');
	} else {
    	$('div[aria-hidden=false] .calc-val').html('Стоимость: 8000 рублей');
	}
}
$('.plus-minusa li:nth-child(3)').click(function(){
	$('.plus-minusa li:nth-child(2)').text(parseInt($('.plus-minusa li:nth-child(2)').html())+1);
	calc_count_serv_st();
});
$('.plus-minusa li:nth-child(1)').click(function(){
	parseInt($('.plus-minusa li:nth-child(2)').html()) !== 1 ? $('.plus-minusa li:nth-child(2)').text(parseInt($('.plus-minusa li:nth-child(2)').html())-1): 1;
	calc_count_serv_st();
});
$('.plus-minusb li:nth-child(3)').click(function(){
	$('.plus-minusb li:nth-child(2)').text(parseInt($('.plus-minusb li:nth-child(2)').html())+1);
	calc_count_serv_bz();
});
$('.plus-minusb li:nth-child(1)').click(function(){
	parseInt($('.plus-minusb li:nth-child(2)').html()) > 1 ? $('.plus-minusb li:nth-child(2)').text(parseInt($('.plus-minusb li:nth-child(2)').html())-1): 1;
	calc_count_serv_bz();
});


$('.plus-minusc li:nth-child(3)').click(function(){
	$('.plus-minusc li:nth-child(2)').text(parseInt($('.plus-minusc li:nth-child(2)').html())+1);
	calc_sum_servcomp();
});
$('.plus-minusc li:nth-child(1)').click(function(){
	parseInt($('.plus-minusc li:nth-child(2)').html()) > 0 ? $('.plus-minusc li:nth-child(2)').text(parseInt($('.plus-minusc li:nth-child(2)').html())-1): 0;
	calc_sum_servcomp();
});
$('.plus-minusaa li:nth-child(3)').click(function(){
	$('.plus-minusaa li:nth-child(2)').text(parseInt($('.plus-minusaa li:nth-child(2)').html())+1);
	calc_sum_servcomp();
});
$('.plus-minusaa li:nth-child(1)').click(function(){
	parseInt($('.plus-minusaa li:nth-child(2)').html()) !== 1 ? $('.plus-minusaa li:nth-child(2)').text(parseInt($('.plus-minusaa li:nth-child(2)').html())-1): 1;
	calc_sum_servcomp();
});
$('.btn-it-serv-comp').click(function(){
	var el = $(this).parent().parent().parent();
	var comp_count = el.find('.plus-minusaa li:nth-child(2)').html()
	var serv_count = el.find('.plus-minusc li:nth-child(2)').html() + ', ' + $('div.os-block-costt span').html();
	$('.pop-up-form input[name=form_description]').val('Консультация по серв. обслуживанию комп. техники (Кол-во комп-в: ' + comp_count + ', Кол-во серверов: ' + serv_count + ' руб/мес)');
});


$('.btn-it-serv').click(function(){
	var el = $(this).parent().parent().parent();
	var tarif = el.find('li[tabindex=0] a').html();
	var serv_count = el.find('div[aria-hidden=false] .plus-minus li:nth-child(2)').html() + ', ' + $('div[aria-hidden=false] .calc-val').html();
	$('.pop-up-form input[name=form_description]').val('Консультация с нашим техническим специалистом (Тариф: ' + tarif + ', Количество серверов: ' + serv_count + ')');
});

// Очищает inline стили у блока "Аренда сервера"  в услугах
const advantagesBlock = document.querySelector('.__advantages');
advantagesBlock.style = '';