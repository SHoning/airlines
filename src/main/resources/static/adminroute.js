
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