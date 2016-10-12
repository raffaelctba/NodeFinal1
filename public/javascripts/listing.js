$(function ready() {

    $.getJSON("/api/listing", function (data) {
        data.forEach(function (item) {
            $('#listing').append('<tr><td>' + item.name + '</td><td>' + item.address + '</td></tr>');
        });
    });

});