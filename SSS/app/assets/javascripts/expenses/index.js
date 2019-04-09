$(function () {
    $('#expenses-datatable').dataTable();

    $('.add-expenses-btn').on('click', function () {
        $('#infoExpenseModal .modal-footer button[data-dismiss="modal"]').show();   // Cancel
        $('#infoExpenseModal .modal-footer button[data-toggle="modal"]').hide();    // Delete
        $('#infoExpenseModal .modal-footer button.btn-info').hide();                // Edit
        $('#infoExpenseModal .modal-footer button.btn-success').show();             // Save
        $('#infoExpenseModal .modal-body .modal-body-full').show();                 // Informatia 9 // File Input
        $('.form-input-info').removeAttr('disabled');
    });

    $('.modal-opener').on('click', function () {
        $('#infoExpenseModal .modal-footer button[data-dismiss="modal"]').hide();
        $('#infoExpenseModal .modal-footer button[data-toggle="modal"]').show();
        $('#infoExpenseModal .modal-footer button.btn-info').show();
        $('#infoExpenseModal .modal-footer button.btn-success').hide();
        $('#infoExpenseModal .modal-body .modal-body-full').hide();
        $('.form-input-info').attr('disabled','true');
    });

    $('#infoExpenseModal .modal-footer button.btn-info').on('click', function () {
        $('#infoExpenseModal .modal-footer button.btn-success').show();
        $('#infoExpenseModal .modal-body .modal-body-full').show();
        $('.form-input-info').removeAttr('disabled');
    });

    $('#infoExpenseModal .modal-footer button.btn-success').on('click', function () {
        $('#infoExpenseModal form').submit();
    });

    $('#confirmDeleteExpense').on('click', function () {
        var expenseId = $(this).attr('expense-id');
        $.ajax({
            //headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            // headers: de ex tokenul pt csrf
            type: "GET",//"DELETE",
            url: "/expenses/index",
            success: function ($response) {
                console.log('Succes');
                //window.location.replace("/expenses/index");
            },
            error: function () {
                console.log('Eroare la stergere!');
            }
        });
    });
});
