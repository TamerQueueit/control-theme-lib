queueViewModel.pageReady(function (data) {

    var pageid = $("body").attr("data-pageid");
    var culture = $("body").attr("data-culture");
    // iFrameResize({log:false},'#bottompanel_iframe');
    
    if (pageid == "before") {
        

    }

    if (pageid == "queue") {
        // $("#MainPart_lbQueueNumberText").text('Your queue number:');
    }

    if (pageid == "after") {

    }

    if (pageid == "exit") {

    }

    if (pageid == "error") {

        var errorid = $("body").attr("data-errorid");

        // old queue number
        if (errorid == "4") {
        }

        // Max No Of Redirects Per QId
        if (errorid == "5") {
        }
    }
});

//queueViewModel.modelUpdated(function (data) {
//});

