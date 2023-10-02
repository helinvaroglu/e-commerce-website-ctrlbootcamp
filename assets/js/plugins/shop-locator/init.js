!function (e) {
    "use strict";
    e(document).ready(function () {
        e(".seventhStyle").ShopLocator({
            pluginStyle: "metro",
            paginationStyle: 1,
            json: "markers2.json",
            infoBubble: {
                visible: !0,
                backgroundColor: "transparent",
                arrowSize: 0,
                arrowPosition: 50,
                minHeight: 100,
                maxHeight: 135,
                minWidth: 170,
                maxWidth: 250,
                hideCloseButton: !1
            },
            map: {
                mapStyle: [{
                    featureType: "landscape",
                    stylers: [{saturation: -100}, {lightness: 65}, {visibility: "on"}]
                }, {
                    featureType: "poi",
                    stylers: [{saturation: -100}, {lightness: 51}, {visibility: "simplified"}]
                }, {
                    featureType: "road.highway",
                    stylers: [{saturation: -100}, {visibility: "simplified"}]
                }, {
                    featureType: "road.arterial",
                    stylers: [{saturation: -100}, {lightness: 30}, {visibility: "on"}]
                }, {
                    featureType: "road.local",
                    stylers: [{saturation: -100}, {lightness: 40}, {visibility: "on"}]
                }, {
                    featureType: "transit",
                    stylers: [{saturation: -100}, {visibility: "simplified"}]
                }, {featureType: "administrative.province", stylers: [{visibility: "off"}]}, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{visibility: "on"}, {lightness: -25}, {saturation: -100}]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{hue: "#ffff00"}, {lightness: -25}, {saturation: -97}]
                }]
            },
            markersIcon: "assets/js/plugins/shop-locator/src/style/metro/images/marker.png",
            cluster: {
                enable: !0,
                gridSize: 60,
                style: {
                    textColor: "#79aacf",
                    textSize: 18,
                    heightSM: 54,
                    widthSM: 54,
                    heightMD: 64,
                    widthMD: 64,
                    heightBIG: 74,
                    widthBIG: 74,
                    iconSmall: "assets/js/plugins/shop-locator/src/style/metro/images/clusterSmall.png",
                    iconMedium: "assets/js/plugins/shop-locator/src/style/metro/images/clusterMedium.png",
                    iconBig: "assets/js/plugins/shop-locator/src/style/metro/images/clusterBig.png"
                }
            },
            sidebar: {
                visible: !0,
                selectSection: {visible: !0},
                searchBox: {visible: !0, search: !0},
                results: {pageSize: 8, paginationItems: 5}
            }
        })
    })
}(jQuery);