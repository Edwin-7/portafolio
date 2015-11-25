/*********** Components *****************/


// Menu Copallasible

// Initialize collapse button
  $(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

// Modal form hv

$('.modal-trigger').leanModal();

// Parallax

 $('.parallax').parallax();

 /******************* Menu **************************/

function posiciones(){
   
   
  var pos_sobre_mi = $('#sobre_mi').offset();

  var pos_proyectos = $('#proyectos').offset();
  var pos_habilidades = $('#habilidades').offset();
  var pos_contacto = $('#contacto').offset();

  var endEfecto ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('#inicio').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: 0,
      },800)
    }); 

  $('#acercaDeMi').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: pos_sobre_mi.top ,
      },800, function(){

      $('#img_psd').addClass('animated fadeInDownBig').one(endEfecto, function(){
          $('#img_responsive').addClass('animated fadeInDownBig').one(endEfecto, function(){
            $('#img_start').addClass('animated fadeInDownBig');
          });
        });

      });

    });

  $('#btn_proyectos').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: pos_proyectos.top ,
      },800)
    });

  $('#btn_habilidades').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: pos_habilidades.top ,
      },800)
    });

  $('#btn_contacto').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: pos_contacto.top ,
      },800)
    }); 

  // Funciones Adiconales
  $(document).on('scroll', function(e){

    var desplazamientoActual = $(document).scrollTop();
     var pos_sobre_mi = $('#sobre_mi').offset();
    console.log(desplazamientoActual);

    if (desplazamientoActual >= pos_sobre_mi.top ) {

      $('#img_psd').addClass('animated fadeInDownBig').one(endEfecto, function(){
          $('#img_responsive').addClass('animated fadeInDownBig').one(endEfecto, function(){
            $('#img_start').addClass('animated fadeInDownBig');
          });
        });
    };

  });

}

/***************** Inicio ***********************/

 // Funciones de efectos

 function llamar_efecto(){

  var endEfecto ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
      $('#boton-hv').addClass('animated bounceInUp').one(endEfecto, function(){
        $('#targeta').addClass('animated flipInX');
        

      });
    

  };


// Maquina de escribir

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "Hola, soy Edwin, programador de paginas web especializado en el desarrollo Front End. _";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.


$(document).ready(function(){

  // $("#boton-hv").fadeTo("fast", 0);
  // $("#targeta").fadeTo("fast", 0);

    maquina("maquinas",texto,100);
    setTimeout('llamar_efecto()', '10000');   
    setInterval('posiciones()', '1000');   

  /*********************** Proyectos ********************************/

    $('#btn_all').click(function(){

      $('.paginas').each(function(i){

          $(this).show(3000);
      
      })

    });

    $('#btn_html').click(function(){

      $('.paginas').each(function(i){
        if ($(this).hasClass('html')) {
          $(this).show(3000);
        }else{
          $(this).hide('slow');
        }
      })

    });

    $('#btn_joomla').click(function(){

      $('.paginas').each(function(i){
        if ($(this).hasClass('joomla')) {
          $(this).show(3000);
        }else{
          $(this).hide('slow');
        }
      })

    });

    $('#btn_wordpress').click(function(){

      $('.paginas').each(function(i){
        if ($(this).hasClass('wordpress')) {
          $(this).show(3000);
        }else{
          $(this).hide('slow');
        }
      })

    });

    $('#btn_prestashop').click(function(){

      $('.paginas').each(function(i){
        if ($(this).hasClass('prestashop')) {
          $(this).show(3000);
        }else{
          $(this).hide('slow');
        }
      })

    });

    $('#btn_rails').click(function(){

      $('.paginas').each(function(i){
        if ($(this).hasClass('rails')) {
          $(this).show(3000);
        }else{
          $(this).hide('slow');
        }
      })

    });  


    $('.bg-pag').each(function(i){
      $(this).hover(function(){
        $(this).children(".hover-pag").addClass('animated bounceInRight');
      }, function(){
        $(this).children(".hover-pag").removeClass('animated bounceInRight');
      });
     });

    /******************************** Habilidades ***************************/

    $('.hover-habilidad').each(function(i){
      $(this).hover(function(){
        $(this).removeClass('animated rotateOut');
        $(this).addClass('animated rotateIn');
      }, function(){
        $(this).removeClass('animated rotateOut');
        $(this).addClass('animated rotateOut');
      })
    })
})