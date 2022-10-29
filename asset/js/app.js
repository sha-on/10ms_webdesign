$(document).ready(function(){
    $(".player-info:first").hide('slow', function (){
        $(".player-info:last").slideUp();
    });

    $("#messi img").click( function (){
     $(".player-info:first").toggle();
    });

    $("#ronaldo img").click( function (){
        $(".player-info:last").toggle();
    });

    $("#votting").submit(function (){
       $("#votting-from").prepend("<div class='alert alert-dark' role='alert'>Thak you votting"+
    $('#votting-from input [name="name"]') +", For your vote</div>");
       $('#votting').remove()

       return false;
    });
    $('tr').click(function (){
        $(this).hover("light");
    });

});