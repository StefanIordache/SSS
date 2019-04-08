$(function(){
    $('#payments-datatable').dataTable();

    $('.add-payments-btn').on('click', function () {
        $('#infoPaymentModal .modal-footer').css('display', 'flex');
    });

    $('#confirmDeletePayment').on('click', function () {
        var paymentId = $(this).attr('payment-id');
        $.ajax({
            //headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            type: "GET",//"DELETE",
            url: "/payments/index",//"Aici scrii tu Stefan",//"/books/" + bookId,
            success: function ($response) {
                console.log($response);
                window.location.replace("/payments/index");
            },
            error: function () {
                console.log('Eroare la stergere!');
            }
        });
    });
});
