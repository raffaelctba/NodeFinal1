$(function ready() {
    $("#submitForm").submit(function (event) {
        event.preventDefault();

        var listingInfo = JSON.stringify({
            name: $('#name').val(),
            address: $('#address').val(),
            description: $('#description').val()
        });

        $.ajax({
            url: '/api/listing',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: listingInfo,
            success: function (json, status, request) {
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-success');
                $('#statusMsg').html('Added the list');
            },
            error: function (request, status) {
                $('#statusMsg').removeClass();
                $('#statusMsg').addClass('alert alert-danger');
                $('#statusMsg').html('Error adding the list');
                console.log('Request failed : ', status);
            }
        });

    });
});