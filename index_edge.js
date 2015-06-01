/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'anonymous-pro, sans-serif': '<script src=\"http://use.edgefonts.net/anonymous-pro:n4,i4,n7,i7:all.js\"></script>',
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"bootstrap.js",
            js+"bootstrap.min.js",
            js+"npm.js",
            js+"global.js",
            js+"main.js",
            js+"modernizr.js",
            js+"nr-632.min.js",
            js+"pages.js",
            js+"plugins.js",
            js+"utils.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['0%', '11.1%', '1280', '610', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'logo_header',
                            type: 'image',
                            rect: ['-360px', '0px', '156.3%', '12.4%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_header.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '1083px', '1280px', '450px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['0px', '1103px', 'undefined', 'undefined', 'auto', 'auto'],
                            overflow: 'hidden',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'who_we_are',
                            type: 'image',
                            rect: ['624px', '105px', '101px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"who_we_are.png",'0px','0px']
                        },
                        {
                            id: 'what_we_do',
                            type: 'image',
                            rect: ['745px', '105px', '100px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"what_we_do.png",'0px','0px']
                        },
                        {
                            id: 'our_work',
                            type: 'image',
                            rect: ['864px', '105px', '84px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"our_work.png",'0px','0px']
                        },
                        {
                            id: 'our_clients',
                            type: 'image',
                            rect: ['968px', '105px', '102px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"our_clients.png",'0px','0px']
                        },
                        {
                            id: 'contact_us',
                            type: 'image',
                            rect: ['1089px', '105px', '95px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"contact_us.png",'0px','0px']
                        },
                        {
                            id: 'logo_in_header',
                            type: 'image',
                            rect: ['59px', '8px', '431px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_in_header.png",'0px','0px']
                        },
                        {
                            id: 'logo_facebook',
                            type: 'image',
                            tag: 'img',
                            rect: ['1186px', '14px', '23px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logo_facebook.png",'0px','0px'],
                            userClass: "",
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'logo_facebook_gray',
                            type: 'image',
                            tag: 'img',
                            rect: ['1186px', '14px', '23px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logo_facebook.png",'0px','0px'],
                            userClass: "",
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'logo_LinkedIn',
                            type: 'image',
                            tag: 'img',
                            rect: ['1240px', '14px', '23px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logo_LinkedIn.png",'0px','0px']
                        },
                        {
                            id: 'logo_LinkedIn_gray',
                            type: 'image',
                            tag: 'img',
                            rect: ['1240px', '14px', '23px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logo_LinkedIn.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'logo_twitter',
                            type: 'image',
                            tag: 'img',
                            rect: ['1213px', '14px', '23px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logo_tweeter.png",'0px','0px']
                        },
                        {
                            id: 'logo_twitter_gray',
                            type: 'image',
                            tag: 'img',
                            rect: ['1213px', '14px', '23px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logo_tweeter.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'who_we_are_contents',
                            type: 'rect',
                            rect: ['0px', '1533px', '1280px', '545px', 'auto', 'auto'],
                            fill: ["rgba(127,128,129,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '1170px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '1280px', '609px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['-1px', '-23px', '1280px', '636px', 'auto', 'auto'],
                            id: 'intro_01',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_01.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1280px', '-158px', '1280px', '745px', 'auto', 'auto'],
                            id: 'intro_02',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_02.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1280px', '-62px', '1280px', '713px', 'auto', 'auto'],
                            id: 'intro_03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_03.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-92px', '1280px', '774px', 'auto', 'auto'],
                            type: 'image',
                            id: 'intro_04',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/intro_04.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1280px', '-19px', '1280px', '628px', 'auto', 'auto'],
                            id: 'intro_05',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_05.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1280px', '-23px', '1280px', '636px', 'auto', 'auto'],
                            id: 'intro_01Copy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_01.jpg', '0px', '0px']
                        },
                        {
                            rect: ['140px', '198px', '982px', '119px', 'auto', 'auto'],
                            id: 'Pic_01_Title',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pic_01_Title.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '198px', '611px', '117px', 'auto', 'auto'],
                            id: 'Pic_02_Title',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pic_02_Title.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '198px', '507px', '117px', 'auto', 'auto'],
                            id: 'Pic_03_Title',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pic_03_Title.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '198px', '823px', '60px', 'auto', 'auto'],
                            id: 'Pic_04_Title',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pic_04_Title.png', '0px', '0px']
                        },
                        {
                            rect: ['140px', '198px', '464px', '119px', 'auto', 'auto'],
                            id: 'Pic_05_Title',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pic_05_Title.png', '0px', '0px']
                        },
                        {
                            id: 'WE_Believe_In',
                            type: 'image',
                            rect: ['70px', '128px', '319px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WE_Believe_In.png', '0px', '0px']
                        },
                        {
                            rect: ['575px', '36px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'show_pic1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(61,134,191,1.00)']
                        },
                        {
                            rect: ['595px', '36px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'show_pic2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['615px', '36px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'show_pic3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['635px', '36px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'show_pic4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['655px', '36px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'show_pic5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1211px', '258px', '68px', '68px', 'auto', 'auto'],
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'leftArrow',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/leftArrow.png', '0px', '0px']
                        },
                        {
                            rect: ['68px', '324px', '68px', '68px', 'auto', 'auto'],
                            transform: [[], ['180']],
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'rightArrow',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/leftArrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '610px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid220",
                            "opacity",
                            1400,
                            350,
                            "linear",
                            "${intro_05}",
                            '1',
                            '0'
                        ],
                        [
                            "eid214",
                            "left",
                            700,
                            350,
                            "linear",
                            "${intro_04}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid210",
                            "opacity",
                            0,
                            350,
                            "linear",
                            "${intro_01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid209",
                            "left",
                            0,
                            350,
                            "linear",
                            "${intro_02}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid217",
                            "opacity",
                            0,
                            350,
                            "linear",
                            "${intro_01Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid218",
                            "opacity",
                            1400,
                            350,
                            "linear",
                            "${intro_01Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid230",
                            "opacity",
                            1312,
                            88,
                            "linear",
                            "${Pic_05_Title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "opacity",
                            1662,
                            88,
                            "linear",
                            "${Pic_05_Title}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "opacity",
                            963,
                            87,
                            "linear",
                            "${Pic_04_Title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "opacity",
                            1050,
                            88,
                            "linear",
                            "${Pic_04_Title}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "left",
                            350,
                            350,
                            "linear",
                            "${intro_03}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid236",
                            "opacity",
                            350,
                            350,
                            "linear",
                            "${intro_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            700,
                            350,
                            "linear",
                            "${intro_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid215",
                            "opacity",
                            1050,
                            350,
                            "linear",
                            "${intro_04}",
                            '1',
                            '0'
                        ],
                        [
                            "eid219",
                            "left",
                            1400,
                            350,
                            "linear",
                            "${intro_01Copy}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid222",
                            "background-color",
                            1138,
                            87,
                            "linear",
                            "${show_pic5}",
                            'rgba(255,255,255,1)',
                            'rgba(61,134,191,1.00)'
                        ],
                        [
                            "eid244",
                            "background-color",
                            1662,
                            88,
                            "linear",
                            "${show_pic5}",
                            'rgba(61,134,191,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid237",
                            "display",
                            0,
                            0,
                            "linear",
                            "${intro_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            700,
                            0,
                            "linear",
                            "${intro_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "opacity",
                            350,
                            350,
                            "linear",
                            "${intro_02}",
                            '1',
                            '0'
                        ],
                        [
                            "eid223",
                            "opacity",
                            0,
                            88,
                            "linear",
                            "${Pic_01_Title}",
                            '1',
                            '0'
                        ],
                        [
                            "eid232",
                            "opacity",
                            1662,
                            88,
                            "linear",
                            "${Pic_01_Title}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid191",
                            "background-color",
                            88,
                            88,
                            "linear",
                            "${show_pic1}",
                            'rgba(61,134,191,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid245",
                            "background-color",
                            1662,
                            88,
                            "linear",
                            "${show_pic1}",
                            'rgba(255,255,255,1)',
                            'rgba(61,134,191,1.00)'
                        ],
                        [
                            "eid194",
                            "background-color",
                            438,
                            87,
                            "linear",
                            "${show_pic3}",
                            'rgba(255,255,255,1)',
                            'rgba(61,134,191,1.00)'
                        ],
                        [
                            "eid195",
                            "background-color",
                            788,
                            87,
                            "linear",
                            "${show_pic3}",
                            'rgba(61,134,191,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid196",
                            "background-color",
                            788,
                            87,
                            "linear",
                            "${show_pic4}",
                            'rgba(255,255,255,1)',
                            'rgba(61,134,191,1.00)'
                        ],
                        [
                            "eid221",
                            "background-color",
                            1138,
                            87,
                            "linear",
                            "${show_pic4}",
                            'rgba(61,134,191,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid216",
                            "left",
                            1050,
                            350,
                            "linear",
                            "${intro_05}",
                            '1280px',
                            '0px'
                        ],
                        [
                            "eid192",
                            "background-color",
                            88,
                            88,
                            "linear",
                            "${show_pic2}",
                            'rgba(255,255,255,1)',
                            'rgba(61,134,191,1.00)'
                        ],
                        [
                            "eid193",
                            "background-color",
                            438,
                            87,
                            "linear",
                            "${show_pic2}",
                            'rgba(61,134,191,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid226",
                            "opacity",
                            612,
                            88,
                            "linear",
                            "${Pic_03_Title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            700,
                            88,
                            "linear",
                            "${Pic_03_Title}",
                            '1',
                            '0'
                        ],
                        [
                            "eid224",
                            "opacity",
                            262,
                            88,
                            "linear",
                            "${Pic_02_Title}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            350,
                            87,
                            "linear",
                            "${Pic_02_Title}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '800px', '409px', 'auto', 'auto'],
                            id: 'contPic1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '585px', '409px', 'auto', 'auto'],
                                id: 'sym2_pic1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/sym2_pic1.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'infoPic1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['585px', '0px', '320px', '409px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '320px', '409px', 'auto', 'auto'],
                            id: 'pic1_gray',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/sym2_pic1_gray.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['320px', '0px', '800px', '409px', 'auto', 'auto'],
                            id: 'contPic2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '586px', '409px', 'auto', 'auto'],
                                id: 'sym2_pic2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/sym2_pic2.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'infoPic2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['586px', '0px', '320px', '409px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'pic2_gray',
                            rect: ['320px', '0px', '320px', '409px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/sym2_pic2_gray.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['640px', '0px', '800px', '409px', 'auto', 'auto'],
                            id: 'contPic3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '586px', '409px', 'auto', 'auto'],
                                id: 'sym2_pic3',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/sym2_pic3.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'infoPic3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['586px', '0px', '320px', '409px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'pic3_gray',
                            rect: ['640px', '0px', '320px', '409px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/sym2_pic3_gray.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['960px', '0px', '800px', '409px', 'auto', 'auto'],
                            id: 'contPic4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '586px', '409px', 'auto', 'auto'],
                                id: 'sym2_pic4',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/sym2_pic4.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'infoPic4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['585px', '0px', '320px', '409px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'pic4_gray',
                            rect: ['960px', '0px', '320px', '409px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/sym2_pic4_gray.jpg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '59px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'WHO WE ARE',
                            rect: ['44px', '175px', '216px', '59px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'titleText1'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '59px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'WHAT WE DO',
                            rect: ['366px', '175px', '216px', '59px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'titleText2'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '59px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'OUR WORK',
                            rect: ['691px', '175px', '216px', '59px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'titleText3'
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '59px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'OUR CLIENTS',
                            rect: ['1020px', '175px', '216px', '59px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'titleText4'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '409px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1076720");
