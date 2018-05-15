function postNewAirport(){
    var airport = {
        name :$("#name").val(),
    }
    $.post("http://localhost:8080/api/airport/new", airport, function(result) {
            getData();
    });
}

function getData() {
      // Get the data from endpoint.
      $.ajax({
        url:"http://localhost:8080/api/airport/all",
        type:"get",
        success: function(data) {
            // On successful get, reload the datatable with new data.
            $('#table_airports').DataTable().clear();
            $('#table_airports').DataTable().rows.add(data);
            $('#table_airports').DataTable().columns.adjust().draw();
        }
    });
}

$(document).ready(function () {
    // Modal Setup
//    setSelectors(); MAKE A SETSELECTORS FOR THE AIRPlanes?

      // Modal submit.
        $("#newAirportForm").on('submit', function(e) {
                postNewAirport();

                // Reset modal to hide and no values.
                $('#newAirportModal').modal('hide');

                $("#name").val("");
        });

    // Load DataTable with data format.
    $('#table_airports').DataTable({
        columns: [
            { "data": "name" },
        ]
    });

    // Load first data.
    getData();
});