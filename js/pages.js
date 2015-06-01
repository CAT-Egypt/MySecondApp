/**
 * Who We Are page
 */

(function(page) {
	page.init = function() {
		var sideNavigation = $('.navigation'),
			pointer = $('#menuAction'),
			sideMenu = $('.navigation ul');

		var stickyBottom;
		if ( $('html').hasClass('lt-ie9') ) stickyBottom = 610;
		else stickyBottom = 550;

		WB.utils.setStickyMenu(sideNavigation, 0, stickyBottom);
		WB.utils.toggleMenu( pointer, sideMenu );

		if ($('#whoWeAre').hasClass('leadership')) leadership.init();
		else if ($('#whoWeAre').hasClass('diversity')) diversity.init();
		else if ($('#whoWeAre').hasClass('awards')) awards.init();
		else if ( $('#whoWeAre').hasClass('globalNetwork') ) globalNetwork.init();
	};

	/**
	 * Leadership accordion, show / hide the children items in each li item
	 */
	var leadership = {
		init: function() {

			$('ul.teamGrid').on('click', 'li', $.proxy(this.toggleAccordion, this));
		},

		/**
		 *  Hide - Show the hidden accordion lists
		 */
		toggleAccordion: function(e) {
			var currentTarget = $(e.currentTarget),
				currentDropdown = currentTarget.find('ul');

			e.stopPropagation();

			if (currentDropdown.length !== 0) {
				e.preventDefault();
				currentTarget.parent().toggleClass('active');
				currentDropdown.toggleClass('active');
			}
		}
	};

	/**
	 *  Awards - carousel & show info with touch event
	 */
	var awards = {

		init: function() {
			this.carousel();
			if (WB.modal.device === "isMobile" || WB.modal.device === "isTablet") this.toggleInfoTouch();
		},

		carousel: function(e) {$("#carouWrapper").carouFredSel(WB.config.carouFred);},

		toggleInfoTouch: function(e) {
			var items = $(".topGrid .item");

			items.on("touchstart", function(e) {
				var currentTarget = $(e.currentTarget),
					target = e.target;

				if (target.nodeName == "A") window.location = target.href;
				else currentTarget.find('.content').slideToggle();
			});
		}

	};

	/**
	 *  Global Network
	 */

	var globalNetwork = {
		init: function () {
			this.contentResult = $('#contentResult');

			$('.netMenu > li > span').on('click', $.proxy(this.showOfficesList, this));
			$('.netMenu > li:first-child > span').trigger('click');
			$('.textContainer').on('click', '.offices a', $.proxy(this.getInfo, this));

			this.hideInfoBox();
			this.equalColumns();
		},

		showOfficesList: function(e){
			var item = $(e.currentTarget).parent(),
				children = item.find('> ul').clone(),
				ouputList = $('#officesList');

			if ( ! item.hasClass('active') ) {
				item.siblings().removeClass('active');
				item.addClass('active');
				ouputList.empty().append(children);
			}
			else if ( item.hasClass('active') && WB.modal.device === "isMobile" ) {item.removeClass('active');}
		},

		getInfo: function(e){
			var item = e.currentTarget,
				itemUrl = item.href,
				contentResult = this.contentResult,
				infoContent = $('.infoContent', contentResult),
				self = this;

			e.preventDefault();

			$.ajax({
                url: itemUrl,
                type:'POST',
                success: function(text){
                    infoContent.html( text );
                    contentResult.slideDown('slow');
                    self.scrollToInfoBox();
                },
                error: function(){contentResult.slideUp();}
            });
		},

		hideInfoBox: function(){
			var contentResult = this.contentResult;
			$('.close', contentResult).on('click', function(){contentResult.slideUp();});
		},

		scrollToInfoBox: function(){
			$('html, body').animate({
		         scrollTop: this.contentResult.offset().top
		     }, 1500);
		},

		equalColumns: function (){
			var bigDiv = $(".featureRight"),
				smallDiv = $(".featureCenter");

			smallDiv.height( bigDiv.height() );
		}

	};

})(WB.pages.whoWeAre = {});

/**
 * WHAT WE DO
 */

(function(page) {

	page.init = function() {tabs.init();}

	var tabs = {
		init: function() {
			this.el = $('.tabbed');
			this.tab = this.el.find('.tab');

			this.el.on('click', '.menuTab li span', $.proxy(this.changeTab, this));
		},
		changeTab: function(e) {
			var currentTarget = $(e.currentTarget),
				dataMenu = currentTarget.attr('data-menu');

			this.removeActiveState(this.el.find('.menuTab li'));
			this.removeActiveState(this.tab);

			currentTarget
				.parent()
				.addClass('active');
			this.el
				.find('.' + dataMenu)
				.addClass('active');
		},
		removeActiveState: function(e) {
			e.each(function() {$(this).removeClass('active');});
		}
	};

})(WB.pages.whatWeDo = {});




/**
 * NEWSROOM - All news
 */

(function (page) {

	page.init = function () {tree.init();}

	var tree = {
		init: function () {
			this.el = $(".tree-holder"),
			this.treeroots = $(".tree-holder > li");

			this.treeroots.on("click", this.toggle);
			this.treeroots.on("click", "li a", function (e) {e.stopPropagation();});
		},
		toggle: function (e) {
			var currentTarget = $(e.currentTarget);
			currentTarget.toggleClass("open").children("ul").toggle("slow");
		}
	}

})(WB.pages.newsListing = {});



/***********************
 Sticky Social Network
***********************/

(function (page){

	page.init = function(){
		var social = $('.socialNetwork:not(.static)');
		WB.utils.setStickyMenu(social, 0, 560);
	}

})(WB.pages.newsroomArticle = {});



/***********************
 Sticky Social Network
***********************/

(function (page){

	page.init = function(){$("body").addClass("dark-bg");}

})(WB.pages.homepage = {});