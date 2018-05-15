function setSelectors(){ // MAKE IT POSSIBLE TO HAVE A SEARCH FUNCTION IN THE SELECTORS IF NECESSARY
        $.ajax({
             url:"http://localhost:8080/api/airplane/all",
             type:"get",
             success: function(planes) {
             console.table(planes)
                    html = "";
                    console.table(planes)

                     for(var key in planes) {
                         html += "<option value=" + planes[key].id  + ">" +planes[key].airplaneId+ "</option>"
                         console.log(html)
                     }
                     document.getElementById("airplane-select").innerHTML = html;
             }
        });
        $.ajax({
                     url:"http://localhost:8080/api/airport/all",
                     type:"get",
                     success: function(ports) {
                     console.table(ports)
                            html = "";
                            console.table(ports)

                             for(var key in ports) {
                                 html += "<option value=" + ports[key].id  + ">" +ports[key].name + "</option>"
                                 console.log(html)
                             }
                             document.getElementById("airport-select").innerHTML = html;
                     }
                });
}
function myFunction(){
    var planeId =$("#airplane-select").val();
    console.log(planeId)
    var airportId =$("#airport-select").val();
    console.log(airportId)
    $.ajax({
        url:"http://localhost:8080/api/airplane/flyPlaneTo/"+planeId+"/"+airportId,
        type: "put",
        success: function(){
        alert("you have flown to the given location");
        $.get( "airplane/index.html", function( data ) {
              $( "#page-home" ).html( data );
            });
        },
        error: function(){
        alert("this was not allowed!");
        }
    })
    $("#airport-select").val("");
    $("#airplane-select").val("");
}
$(document).ready(function () {
    setSelectors();
});