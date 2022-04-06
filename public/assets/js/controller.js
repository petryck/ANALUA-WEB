



$(document).on('click', '.btn_categorias', function(e){
e.preventDefault()

var categoria = $(this).data('categoria')


$.ajax({
    url : "categorias",
    type : 'GET',
    data : {
         categoria : categoria,
    },
    beforeSend : function(){
        // AQUI O VAI SER ESTAR SENDO ENVIADO
    }
})
.done(function(msg){

    $(".page-home").html(msg);
})
.fail(function(jqXHR, textStatus, msg){
    // ERRO MSG
});
})



$(document).on('scroll', function(e){
    e.preventDefault()


    var top = document.body.scrollTop;
    var maxTop = (document.body.scrollHeight - document.body.clientHeight) - 400;

    
    if (parseInt(top) > maxTop) {
      $(".produtos_categorias").append($(".produtos_categorias").html());
    }

})

