$(document).ready(function(){

   

//---------- On Load Function ----------------

//------ Navigation-------------
$('#codeForm').show();
$('#experienceForm').hide();
$('#portfolioForm').hide();

//---------- Code Form ----------------

$('#codeTab').on('click', function () {
    
    $('.list-group a').fadeOut(500);

    $('#experienceForm').fadeOut(500, function(){

        $('#portfolioForm').fadeOut(500, function(){

            $('.list-group a').fadeIn(1000);
            $('#codeForm').fadeIn(1000);  
        
        });

    });

});

//---------- Experince Form ----------------

$('#experienceTab').on('click', function () {

    $('.list-group a').fadeOut(500);

    $('#codeForm').fadeOut( 500,function(){

        $('#portfolioForm').fadeOut(500, function(){

            $('.list-group a').fadeIn(1000);
            $('#experienceForm').fadeIn(1000);  
        
        });

    });

});

//---------- Portfolio Form ----------------

$('#portfolioTab').on('click', function () {

    $('.list-group a').fadeOut(500);

    $('#codeForm').fadeOut( 500,function(){

        $('#experienceForm').fadeOut(500, function(){

            $('.list-group a').fadeIn(1000);
            $('#portfolioForm').fadeIn(1000);  
        
        });

    });

});



//--------------------------------------------

});