$(function(){
    $('[data-toogle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 7000
    });

    // Operaciones en el modal (suscripcion a callbacks)
    $("#suscripcion").on('show.bs.modal', function (e) {
        console.log('el modal de suscripcion se esta mostrando');
        $('#suscripcionBtn').removeClass('btn-outline-success');
        $('#suscripcionBtn').addClass('btn-primary');
        $('#suscripcionBtn').prop('disabled',true);
    });

    $("#suscripcion").on('shown.bs.modal', function (e) {
        console.log('se mostro el modal de suscripcion');
    });

    $("#suscripcion").on('hide.bs.modal', function (e) {
        console.log('el modal de suscripcion se esta oculta');
    });
    $("#suscripcion").on('hidden.bs.modal', function (e) {
        console.log('el modal de suscripcion se oculto');
        $('#suscripcionBtn').removeClass('btn-primary');
        $('#suscripcionBtn').addClass('btn-outline-success');
        $('#suscripcionBtn').prop('disabled',false);
    });

});