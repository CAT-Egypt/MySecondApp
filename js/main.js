//Namespace

var WB = {
	pages : [],
	modal : []
};

WB.config = {
	sliderFred : {
		items : {
			visible			: 1,
			width 			: 800,
			height 			: '43%'
		},
            circular			: true,
	    infinite			: true,
	    auto : {
	    	timeoutDuration	: 100000,
	    	pauseOnHover 	: true
	    },
	    duration 			: 1000,
	    easing				: 'quadratic',
	    scroll : {
	    	fx 				: 'cover-fade'
	    },
	    prev 				: {},
	    next				: {},
	    /*swipe : {
	    	onTouch			: true,
	    	items 			: 1
	    },*/
	    responsive 			: true,
	    onWindowResize		: 'throttle'
	},
	carouFred : {
		width 				: "100%",
			height				: "variable",
		items : {
			width       : 185,
			height		: 185,
			visible     : {
					min       : 1,
					max       : 5
			}
		},
        circular			: false,
	    infinite			: false,
	    auto : {
	    	timeoutDuration	: 10000,
	    	pauseOnHover 	: true
	    },
	    duration 			: 1000,
	    easing				: 'quadratic',
	    scroll : {
	    	fx 				: 'cover-fade'
	    },
	    prev 				: '#awardLeft',
	    next				: '#awardRight',
	    pagination			: '.pagination',
	    swipe : {
	    	onTouch			: true
	    },
	    responsive 			: true,
	    onWindowResize		: 'throttle'
	}
};

document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');
document.createElement('hgroup');

$(document).ready(function(){
	var currentSection = WB.utils.getCurrentSection();

	WB.modal.device = WB.utils.getUserAgent();
	
	WB.global.init();

	if (WB.pages[currentSection]){WB.pages[currentSection].init();}

});