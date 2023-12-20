$(document).ready(function() {
    $('.btn_category').click(function() {
        var component = $(this).data('component');
        $.ajax({
            url: "get_products/" + component + "/",
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var productHTML = '';
                $.each(data, function(index, product) {
                    productHTML += '<div class="col-sm-4 product">';
                    productHTML += '<img src="/  static/' + encodeURL(product.img_url) + '" alt="img_product" class="img_product">';
                    productHTML += '<h4>' + product.product_name + '</h4>';
                    productHTML += '<div class="cost">' + product.price + '</div>';
                    productHTML += '<button class="btn btn-outline-dark">Add to cart</button>';
                    productHTML += '</div>';
                });

                $('.product_container').html(productHTML);
            }
        });
    });
});

function encodeURL(inputString) {
    return inputString.replace(/ /g, '%20');
}