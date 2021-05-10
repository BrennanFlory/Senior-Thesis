const viewerConfig = {
    embedMode: "LIGHT_BOX",
    defaultViewMode: "FIT_PAGE",
    dockPageControls: true
};

document.addEventListener("adobe_dc_view_sdk.ready", function() {
    document.getElementById("view-pdf-btn").disabled = false;
});

function preview111() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/111/EMR2020_111.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_111"
        }
    }, viewerConfig);
};

function preview112() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/112/EMR2020_112.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_112"
        }
    }, viewerConfig);
};

function preview113() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/113/EMR2020_113.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_113"
        }
    }, viewerConfig);
};

function preview114() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/114/EMR2020_114.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_114"
        }
    }, viewerConfig);
};

function preview115() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/115/EMR2020_115.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_115"
        }
    }, viewerConfig);
};

function preview116() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/116/EMR2020_116.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_116"
        }
    }, viewerConfig);
};

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

function preview154() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/154/EMR2020_154.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_154"
        }
    }, viewerConfig);
};

function preview158() {
    var adobeDCView = new AdobeDC.View({
        clientId: "33f2379e58524e4fbbd8093b6c2b6ceb"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "../../EMR/html/157/EMR2020_158.pdf",
            },
        },
        metaData: {
            fileName: "EMR2020_158"
        }
    }, viewerConfig);
};