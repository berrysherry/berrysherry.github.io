jQuery(document).ready(function($) {
    'use strict';
 
     function eggbfc(winw, resultoption) {
        var lasttop = winw,
            lastbottom = 0,
            smallest = 9999,
            largest = 0,
            samount = 0,
            lamoung = 0,
            lastamount = 0,
            resultid = 0,
            resultidb = 0,
            responsiveEntries = [{
                width: 1400,
                amount: 3
            }, {
                width: 1170,
                amount: 3
            }, {
                width: 1024,
                amount: 3
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 640,
                amount: 3
            }, {
                width: 480,
                amount: 1
            }];
        if (responsiveEntries != undefined && responsiveEntries.length > 0)
            jQuery.each(responsiveEntries, function(index, obj) {
                var curw = obj.width != undefined ? obj.width : 0,
                    cura = obj.amount != undefined ? obj.amount : 0;
                if (smallest > curw) {
                    smallest = curw;
                    samount = cura;
                    resultidb = index;
                }
                if (largest < curw) {
                    largest = curw;
                    lamount = cura;
                }
                if (curw > lastbottom && curw <= lasttop) {
                    lastbottom = curw;
                    lastamount = cura;
                    resultid = index;
                }
            })
        if (smallest > winw) {
            lastamount = samount;
            resultid = resultidb;
        }
        var obj = new Object;
        obj.index = resultid;
        obj.column = lastamount;
        if (resultoption == "id")
            return obj;
        else
            return lastamount;
    }
    if ("masonry" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-9-1");
        var cwidth = container.width(),
            ar = "4:3",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 4;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }
    var essapi_9;
    essapi_9 = jQuery("#esg-grid-9-1").tpessential({
        gridID: 9,
        layout: "masonry",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 4,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-9",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        responsiveEntries: [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 3
        }, {
            width: 480,
            amount: 1
        }]
    });

    function eggbfc(winw, resultoption) {
        var lasttop = winw,
            lastbottom = 0,
            smallest = 9999,
            largest = 0,
            samount = 0,
            lamoung = 0,
            lastamount = 0,
            resultid = 0,
            resultidb = 0,
            responsiveEntries = [{
                width: 1400,
                amount: 3
            }, {
                width: 1170,
                amount: 3
            }, {
                width: 1024,
                amount: 3
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 640,
                amount: 3
            }, {
                width: 480,
                amount: 1
            }];
        if (responsiveEntries != undefined && responsiveEntries.length > 0)
            jQuery.each(responsiveEntries, function(index, obj) {
                var curw = obj.width != undefined ? obj.width : 0,
                    cura = obj.amount != undefined ? obj.amount : 0;
                if (smallest > curw) {
                    smallest = curw;
                    samount = cura;
                    resultidb = index;
                }
                if (largest < curw) {
                    largest = curw;
                    lamount = cura;
                }
                if (curw > lastbottom && curw <= lasttop) {
                    lastbottom = curw;
                    lastamount = cura;
                    resultid = index;
                }
            })
        if (smallest > winw) {
            lastamount = samount;
            resultid = resultidb;
        }
        var obj = new Object;
        obj.index = resultid;
        obj.column = lastamount;
        if (resultoption == "id")
            return obj;
        else
            return lastamount;
    }
    if ("masonry" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-2-1");
        var cwidth = container.width(),
            ar = "4:3",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 4;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }
    var essapi_2;

    essapi_2 = jQuery("#esg-grid-2-1").tpessential({
        gridID: 2,
        layout: "masonry",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 4,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-2",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        responsiveEntries: [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 3
        }, {
            width: 480,
            amount: 1
        }]
    });

    function eggbfc(winw, resultoption) {
        var lasttop = winw,
            lastbottom = 0,
            smallest = 9999,
            largest = 0,
            samount = 0,
            lamoung = 0,
            lastamount = 0,
            resultid = 0,
            resultidb = 0,
            responsiveEntries = [{
                width: 1400,
                amount: 2
            }, {
                width: 1170,
                amount: 2
            }, {
                width: 1024,
                amount: 2
            }, {
                width: 960,
                amount: 2
            }, {
                width: 778,
                amount: 2
            }, {
                width: 640,
                amount: 2
            }, {
                width: 480,
                amount: 1
            }];
        if (responsiveEntries != undefined && responsiveEntries.length > 0)
            jQuery.each(responsiveEntries, function(index, obj) {
                var curw = obj.width != undefined ? obj.width : 0,
                    cura = obj.amount != undefined ? obj.amount : 0;
                if (smallest > curw) {
                    smallest = curw;
                    samount = cura;
                    resultidb = index;
                }
                if (largest < curw) {
                    largest = curw;
                    lamount = cura;
                }
                if (curw > lastbottom && curw <= lasttop) {
                    lastbottom = curw;
                    lastamount = cura;
                    resultid = index;
                }
            })
        if (smallest > winw) {
            lastamount = samount;
            resultid = resultidb;
        }
        var obj = new Object;
        obj.index = resultid;
        obj.column = lastamount;
        if (resultoption == "id")
            return obj;
        else
            return lastamount;
    }
    if ("masonry" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-3-1");
        var cwidth = container.width(),
            ar = "4:3",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 6;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }
    var essapi_3;
    essapi_3 = jQuery("#esg-grid-3-1").tpessential({
        gridID: 3,
        layout: "masonry",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 6,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-3",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        responsiveEntries: [{
            width: 1400,
            amount: 2
        }, {
            width: 1170,
            amount: 2
        }, {
            width: 1024,
            amount: 2
        }, {
            width: 960,
            amount: 2
        }, {
            width: 778,
            amount: 2
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });                                          
    function eggbfc(winw, resultoption) {
        var lasttop = winw,
            lastbottom = 0,
            smallest = 9999,
            largest = 0,
            samount = 0,
            lamoung = 0,
            lastamount = 0,
            resultid = 0,
            resultidb = 0,
            responsiveEntries = [{
                width: 1400,
                amount: 3
            }, {
                width: 1170,
                amount: 3
            }, {
                width: 1024,
                amount: 3
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 640,
                amount: 2
            }, {
                width: 480,
                amount: 1
            }];
        if (responsiveEntries != undefined && responsiveEntries.length > 0)
            jQuery.each(responsiveEntries, function(index, obj) {
                var curw = obj.width != undefined ? obj.width : 0,
                    cura = obj.amount != undefined ? obj.amount : 0;
                if (smallest > curw) {
                    smallest = curw;
                    samount = cura;
                    resultidb = index;
                }
                if (largest < curw) {
                    largest = curw;
                    lamount = cura;
                }
                if (curw > lastbottom && curw <= lasttop) {
                    lastbottom = curw;
                    lastamount = cura;
                    resultid = index;
                }
            })
        if (smallest > winw) {
            lastamount = samount;
            resultid = resultidb;
        }
        var obj = new Object;
        obj.index = resultid;
        obj.column = lastamount;
        if (resultoption == "id")
            return obj;
        else
            return lastamount;
    }
    if ("even" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-5-1");
        var cwidth = container.width(),
            ar = "4:4",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 6;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }
    var essapi_5;
    essapi_5 = jQuery("#esg-grid-5-1").tpessential({
        gridID: 5,
        layout: "even",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 6,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        evenGridMasonrySkinPusher: "off",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-5",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        aspectratio: "4:4",
        responsiveEntries: [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });

    function eggbfc(winw, resultoption) {
        var lasttop = winw,
            lastbottom = 0,
            smallest = 9999,
            largest = 0,
            samount = 0,
            lamoung = 0,
            lastamount = 0,
            resultid = 0,
            resultidb = 0,
            responsiveEntries = [{
                width: 1400,
                amount: 3
            }, {
                width: 1170,
                amount: 3
            }, {
                width: 1024,
                amount: 3
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 640,
                amount: 2
            }, {
                width: 480,
                amount: 1
            }];
        if (responsiveEntries != undefined && responsiveEntries.length > 0)
            jQuery.each(responsiveEntries, function(index, obj) {
                var curw = obj.width != undefined ? obj.width : 0,
                    cura = obj.amount != undefined ? obj.amount : 0;
                if (smallest > curw) {
                    smallest = curw;
                    samount = cura;
                    resultidb = index;
                }
                if (largest < curw) {
                    largest = curw;
                    lamount = cura;
                }
                if (curw > lastbottom && curw <= lasttop) {
                    lastbottom = curw;
                    lastamount = cura;
                    resultid = index;
                }
            })
        if (smallest > winw) {
            lastamount = samount;
            resultid = resultidb;
        }
        var obj = new Object;
        obj.index = resultid;
        obj.column = lastamount;
        if (resultoption == "id")
            return obj;
        else
            return lastamount;
    }
    if ("even" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-10-1");
        var cwidth = container.width(),
            ar = "4:4",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 6;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }
    var essapi_10;
    essapi_10 = jQuery("#esg-grid-10-1").tpessential({
        gridID: 10,
        layout: "even",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 6,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 10,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        evenGridMasonrySkinPusher: "off",
        lightBoxMode: "all",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-10",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        aspectratio: "4:4",
        responsiveEntries: [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });

    try {
        jQuery("#esg-grid-10-1 .esgbox").esgbox({
            padding: [0, 0, 0, 0],
            afterLoad: function() {
                if (this.element.hasClass("esgboxhtml5")) {
                    var mp = this.element.data("mp4"),
                        ogv = this.element.data("ogv"),
                        webm = this.element.data("webm");
                    this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                    var riint = setInterval(function() {
                        jQuery(window).trigger("resize");
                    }, 100);
                    setTimeout(function() {
                        clearInterval(riint);
                    }, 2500);
                };
            },
            beforeShow: function() {
                this.title = jQuery(this.element).attr('lgtitle');
                if (this.title) {
                    this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                }
            },
            afterShow: function() {},
            openEffect: 'elastic',
            closeEffect: 'elastic',
            nextEffect: 'elastic',
            prevEffect: 'elastic',
            openSpeed: 'normal',
            closeSpeed: 'normal',
            nextSpeed: 'normal',
            prevSpeed: 'normal',
            helpers: {
                media: {},
                title: {
                    type: "outside",
                    position: "bottom",
                }
            }
        });

    } catch (e) {}

    function eggbfc(winw, resultoption) {
        var lasttop = winw,
            lastbottom = 0,
            smallest = 9999,
            largest = 0,
            samount = 0,
            lamoung = 0,
            lastamount = 0,
            resultid = 0,
            resultidb = 0,
            responsiveEntries = [{
                width: 1400,
                amount: 2
            }, {
                width: 1170,
                amount: 2
            }, {
                width: 1024,
                amount: 2
            }, {
                width: 960,
                amount: 2
            }, {
                width: 778,
                amount: 2
            }, {
                width: 640,
                amount: 2
            }, {
                width: 480,
                amount: 1
            }];
        if (responsiveEntries != undefined && responsiveEntries.length > 0)
            jQuery.each(responsiveEntries, function(index, obj) {
                var curw = obj.width != undefined ? obj.width : 0,
                    cura = obj.amount != undefined ? obj.amount : 0;
                if (smallest > curw) {
                    smallest = curw;
                    samount = cura;
                    resultidb = index;
                }
                if (largest < curw) {
                    largest = curw;
                    lamount = cura;
                }
                if (curw > lastbottom && curw <= lasttop) {
                    lastbottom = curw;
                    lastamount = cura;
                    resultid = index;
                }
            })
        if (smallest > winw) {
            lastamount = samount;
            resultid = resultidb;
        }
        var obj = new Object;
        obj.index = resultid;
        obj.column = lastamount;
        if (resultoption == "id")
            return obj;
        else
            return lastamount;
    }
    if ("even" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-4-1");
        var cwidth = container.width(),
            ar = "4:4",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 6;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }
    var essapi_4;
    
    essapi_4 = jQuery("#esg-grid-4-1").tpessential({
        gridID: 4,
        layout: "even",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 6,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        evenGridMasonrySkinPusher: "off",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-4",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        aspectratio: "4:4",
        responsiveEntries: [{
            width: 1400,
            amount: 2
        }, {
            width: 1170,
            amount: 2
        }, {
            width: 1024,
            amount: 2
        }, {
            width: 960,
            amount: 2
        }, {
            width: 778,
            amount: 2
        }, {
            width: 640,
            amount: 2
        }, {
            width: 480,
            amount: 1
        }]
    });

    function eggbfc(winw, resultoption) {
    var lasttop = winw,
        lastbottom = 0,
        smallest = 9999,
        largest = 0,
        samount = 0,
        lamoung = 0,
        lastamount = 0,
        resultid = 0,
        resultidb = 0,
        responsiveEntries = [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 3
        }, {
            width: 480,
            amount: 1
        }];
    if (responsiveEntries != undefined && responsiveEntries.length > 0)
        jQuery.each(responsiveEntries, function(index, obj) {
            var curw = obj.width != undefined ? obj.width : 0,
                cura = obj.amount != undefined ? obj.amount : 0;
            if (smallest > curw) {
                smallest = curw;
                samount = cura;
                resultidb = index;
            }
            if (largest < curw) {
                largest = curw;
                lamount = cura;
            }
            if (curw > lastbottom && curw <= lasttop) {
                lastbottom = curw;
                lastamount = cura;
                resultid = index;
            }
        })
    if (smallest > winw) {
        lastamount = samount;
        resultid = resultidb;
    }
    var obj = new Object;
    obj.index = resultid;
    obj.column = lastamount;
    if (resultoption == "id")
        return obj;
    else
        return lastamount;
}
if ("masonry" == "even") {
    var coh = 0,
        container = jQuery("#esg-grid-8-1");
    var cwidth = container.width(),
        ar = "4:3",
        gbfc = eggbfc(jQuery(window).width(), "id"),
        row = 4;
    ar = ar.split(":");
    aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
    coh = cwidth / aratio;
    coh = coh / gbfc.column * row;
    var ul = container.find("ul").first();
    ul.css({
        display: "block",
        height: coh + "px"
    });
}
var essapi_8;
essapi_8 = jQuery("#esg-grid-8-1").tpessential({
    gridID: 8,
    layout: "masonry",
    forceFullWidth: "off",
    lazyLoad: "off",
    row: 4,
    loadMoreAjaxToken: "77d3ea9962",
    loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
    loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
    ajaxContentTarget: "ess-grid-ajax-container-",
    ajaxScrollToOffset: "0",
    ajaxCloseButton: "off",
    ajaxContentSliding: "on",
    ajaxScrollToOnLoad: "on",
    ajaxNavButton: "off",
    ajaxCloseType: "type1",
    ajaxCloseInner: "false",
    ajaxCloseStyle: "light",
    ajaxClosePosition: "tr",
    space: 30,
    pageAnimation: "fade",
    paginationScrollToTop: "off",
    spinner: "spinner0",
    lightBoxMode: "all",
    animSpeed: 1000,
    delayBasic: 1,
    mainhoverdelay: 1,
    filterType: "single",
    showDropFilter: "hover",
    filterGroupClass: "esg-fgc-8",
    googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
    responsiveEntries: [{
        width: 1400,
        amount: 3
    }, {
        width: 1170,
        amount: 3
    }, {
        width: 1024,
        amount: 3
    }, {
        width: 960,
        amount: 3
    }, {
        width: 778,
        amount: 3
    }, {
        width: 640,
        amount: 3
    }, {
        width: 480,
        amount: 1
    }]
});

try {
    jQuery("#esg-grid-8-1 .esgbox").esgbox({
        padding: [0, 0, 0, 0],
        afterLoad: function() {
            if (this.element.hasClass("esgboxhtml5")) {
                var mp = this.element.data("mp4"),
                    ogv = this.element.data("ogv"),
                    webm = this.element.data("webm");
                this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                var riint = setInterval(function() {
                    jQuery(window).trigger("resize");
                }, 100);
                setTimeout(function() {
                    clearInterval(riint);
                }, 2500);
            };
        },
        beforeShow: function() {
            this.title = jQuery(this.element).attr('lgtitle');
            if (this.title) {
                this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
            }
        },
        afterShow: function() {},
        openEffect: 'elastic',
        closeEffect: 'elastic',
        nextEffect: 'elastic',
        prevEffect: 'elastic',
        openSpeed: 'normal',
        closeSpeed: 'normal',
        nextSpeed: 'normal',
        prevSpeed: 'normal',
        helpers: {
            media: {},
            title: {
                type: "outside",
                position: "bottom",
            }
        }
    });

} catch (e) {}

});

    function eggbfc(winw, resultoption) {
    var lasttop = winw,
        lastbottom = 0,
        smallest = 9999,
        largest = 0,
        samount = 0,
        lamoung = 0,
        lastamount = 0,
        resultid = 0,
        resultidb = 0,
        responsiveEntries = [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 3
        }, {
            width: 480,
            amount: 1
        }];
    if (responsiveEntries != undefined && responsiveEntries.length > 0)
        jQuery.each(responsiveEntries, function(index, obj) {
            var curw = obj.width != undefined ? obj.width : 0,
                cura = obj.amount != undefined ? obj.amount : 0;
            if (smallest > curw) {
                smallest = curw;
                samount = cura;
                resultidb = index;
            }
            if (largest < curw) {
                largest = curw;
                lamount = cura;
            }
            if (curw > lastbottom && curw <= lasttop) {
                lastbottom = curw;
                lastamount = cura;
                resultid = index;
            }
        })
    if (smallest > winw) {
        lastamount = samount;
        resultid = resultidb;
    }
    var obj = new Object;
    obj.index = resultid;
    obj.column = lastamount;
    if (resultoption == "id")
        return obj;
    else
        return lastamount;
    }
    if ("even" == "even") {
    var coh = 0,
        container = jQuery("#esg-grid-7-1");
    var cwidth = container.width(),
        ar = "300:480",
        gbfc = eggbfc(jQuery(window).width(), "id"),
        row = 4;
    ar = ar.split(":");
    aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
    coh = cwidth / aratio;
    coh = coh / gbfc.column * row;
    var ul = container.find("ul").first();
    ul.css({
        display: "block",
        height: coh + "px"
    });
    }
    var essapi_7;
    jQuery(document).ready(function() {
    essapi_7 = jQuery("#esg-grid-7-1").tpessential({
        gridID: 7,
        layout: "even",
        forceFullWidth: "off",
        lazyLoad: "off",
        row: 4,
        loadMoreAjaxToken: "77d3ea9962",
        loadMoreAjaxUrl: "http://zebre.thememove.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
        ajaxContentTarget: "ess-grid-ajax-container-",
        ajaxScrollToOffset: "0",
        ajaxCloseButton: "off",
        ajaxContentSliding: "on",
        ajaxScrollToOnLoad: "on",
        ajaxNavButton: "off",
        ajaxCloseType: "type1",
        ajaxCloseInner: "false",
        ajaxCloseStyle: "light",
        ajaxClosePosition: "tr",
        space: 30,
        pageAnimation: "fade",
        paginationScrollToTop: "off",
        spinner: "spinner0",
        evenGridMasonrySkinPusher: "off",
        lightBoxMode: "single",
        animSpeed: 1000,
        delayBasic: 1,
        mainhoverdelay: 1,
        filterType: "single",
        showDropFilter: "hover",
        filterGroupClass: "esg-fgc-7",
        googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
        aspectratio: "300:480",
        responsiveEntries: [{
            width: 1400,
            amount: 3
        }, {
            width: 1170,
            amount: 3
        }, {
            width: 1024,
            amount: 3
        }, {
            width: 960,
            amount: 3
        }, {
            width: 778,
            amount: 3
        }, {
            width: 640,
            amount: 3
        }, {
            width: 480,
            amount: 1
        }]
    });

    });