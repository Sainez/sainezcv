$(document).ready(function(){

   

//---------- On Load Function ----------------

//------ Navigation-------------
$('#codeForm').show();
$('#experienceForm').hide();

//---------- Code Form ----------------

$('#codeTab').on('click', function () {	
    $('.list-group a').fadeOut(500);
    $('#experienceForm').fadeOut(500, function(){

        $('.list-group a').fadeIn(1000);
        $('#codeForm').fadeIn(1000);    

    });

});

//---------- Experince Form ----------------

$('#experienceTab').on('click', function () {	
    $('.list-group a').fadeOut(500);
    $('#codeForm').fadeOut( 500,function(){

            $('.list-group a').fadeIn(1000);
            $('#experienceForm').fadeIn(1000);      

    });

});



//--------------------------------------------

});