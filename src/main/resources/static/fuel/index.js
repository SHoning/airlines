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
}

myFunction(){
    var id =$("#airplane-select").val();
    var amount =$("#fuel").val();
    $.ajax({
        url:"http://localhost:8080/api/airplane/tank/"+id+"/"+amount,
        type: "put"
        success: function(){
        alert("you have succesfully tanked");
        $.get( "airplane/index.html", function( data ) {
              $( "#page-home" ).html( data );
            });
        }
        failure: function(){
        alert("this was not allowed!");
        }
        }
    })
    $("#fuel").val("");
    $("#airplane-select").val("");
}


$(document).ready(function () {
    setSelectors();
}