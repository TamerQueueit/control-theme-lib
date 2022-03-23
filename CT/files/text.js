queueViewModel.pageReady(function (data) {

    var pageid = $("body").attr("data-pageid");
    var culture = $("body").attr("data-culture");
    
    if( culture === "ca-ES"){
        $("#hlThisIsQueueIt").text('Ajuda Atenció Ciutadana');
    }
    if( culture === "es-ES"){
        $("#hlThisIsQueueIt").text('Ayuda Atención Ciudadana');
    }
    
});
