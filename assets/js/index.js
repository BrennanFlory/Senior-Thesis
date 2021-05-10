const viewerConfig = {
    embedMode: "LIGHT_BOX"
};

document.addEventListener("adobe_dc_view_sdk.ready", function() {
    document.getElementById("view-pdf-btn").disabled = false;
});

function preview117() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/117/EMR2020_117.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_117"
        }
    }, viewerConfig);
};