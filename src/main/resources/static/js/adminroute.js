
$("#airports").click(function (){
    console.log("airport aangeklikt")
    $.get( "/static/airport/index.html", function( data ) {
         $( "#page-home" ).html( data );
       });
});

$("#airplanes").click( function(){
    $.get( "/static/airplane/index.html", function( data ) {
      $( "#page-home" ).html( data );
    });
});