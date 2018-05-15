function setSelectors(){ // MAKE IT POSSIBLE TO HAVE A SEARCH FUNCTION IN THE SELECTORS IF NECESSARY
        $.ajax({
             url:"http://localhost:8080/api/airplane/all",
             type:"get",
             success: function(planes) {
                    html = "";
                    console.table(planes)

                     for(var key in planes) {
                         html += "<option value=" + planes[key].id  + ">" +planes[key].name + "</option>"
                     }
                     document.getElementById("airplane-select").innerHTML = html;
             }
        });
        $.ajax({
                     url:"http://localhost:8080/api/airport/all",
                     type:"get",
                     success: function(ports) {
                            html = "";
                            console.table(ports)

                             for(var key in ports) {
                                 html += "<option value=" + ports[key].id  + ">" +ports[key].name + "</option>"
                             }
                             document.getElementById("airport-select").innerHTML = html;
                     }
                });
}
myFunction(){
    var planeId =$("#airplane-select").val();
    var airportId =$("#airplane-select").val();
    $.ajax({
        url:"http://localhost:8080/api/airplane/flyPlaneTo/"+planeId+"/"+airportId,
        type: "put"
        success: function(){
        alert("you have flown to the given location");
        $.get( "airplane/index.html", function( data ) {
              $( "#page-home" ).html( data );
            });
        }
        failure: function(){
        alert("this was not allowed!");
        }
        }
    })
    $("#airport-select").val("");
    $("#airplane-select").val("");
}
$(document).ready(function () {
    setSelectors();
}