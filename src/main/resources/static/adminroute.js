
$("#airports").click(function (){
    console.log("airport aangeklikt")
    $.get( "airport/index.html", function( data ) {
         $( "#page-home" ).html( data );
       });
});

$("#airplanes").click( function(){
    $.get( "airplane/index.html", function( data ) {
      $( "#page-home" ).html( data );
    });
});

$("#fly").click( function(){
    $.get( "fly/index.html", function( data ) {
      $( "#page-home" ).html( data );
    });
});

$("#tank").click( function(){
    $.get( "fuel/index.html", function( data ) {
      $( "#page-home" ).html( data );
    });
});