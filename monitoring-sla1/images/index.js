// Add products to <table>
function productsAdd() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
    
    // Append product to the table
    $("#productTable tbody").append("<tr>" +
        "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
        "<td>6/11/2015</td>" +
        "<td>http://bit.ly/1SNzc0i</td>" +
        "</tr>");
        
    $("#productTable tbody").append("<tr>" +
        "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
        "<td>1/29/2015</td>" +
        "<td>http://bit.ly/1I8ZqZg</td>" +
        "</tr>");
}
$(document).ready(function () {
    productsAdd();
}); 

function productUpdate() {
    if ($("#productname").val() != null && $("#productname").val() != '') {
        // Add product to Table
        productAddToTable();

        // Clear form fields
        formClear();

        // Focus to product name field
        $("#productname").focus();
    }
}
function productAddToTable() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#productTable tbody").append("<tr>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +
        "</tr>");
}
function formClear() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}
