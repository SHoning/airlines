function setSelectors(){ // MAKE IT POSSIBLE TO HAVE A SEARCH FUNCTION IN THE SELECTORS IF NECESSARY
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

function postNewAirplane(){
    var plane = {
        airplaneId :$("#name").val(),
        fuelInTons :$("#fuel").val(),
        airportId: $("#airport-select").val(),
    }
    $.post("http://localhost:8080/api/airplane/new", plane, function(result) {
            getData();
    });
}

function getData() {
      // Get the data from endpoint.
      $.ajax({
        url:"http://localhost:8080/api/airplane/all",
        type:"get",
        success: function(data) {
            // On successful get, reload the datatable with new data.
            $('#table_planes').DataTable().clear();
            $('#table_planes').DataTable().rows.add(data);
            $('#table_planes').DataTable().columns.adjust().draw();
        }
    });
}

$(document).ready(function () {
    // Modal Setup
//    setSelectors(); MAKE A SETSELECTORS FOR THE AIRPORTS

      // Modal submit.
        $("#newAirplaneForm").on('submit', function(e) {
                postNewAirplane();

                // Reset modal to hide and no values.
                $('#newAirplaneModal').modal('hide');

                $("#name").val("");
                $("#fuel").val("");
                //$("#airport-selector").val("");
        });

    // Load DataTable with data format.
    $('#table_planes').DataTable({
        columns: [
            { "data": "airplaneId" },
            { "data": "fuelInTons" },
//            { "data": "airport.name" },
        ]
    });

    // Load first data.
    getData();
});