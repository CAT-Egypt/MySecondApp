(function(global){

	global.init = function() {
		header.init();
		slider.init();
		tout.init();
		news.init();
		video.init();
		footer.init();
		viewport.init();
		articleNews.init();
		allArticles.init();
		lpNewsroom.init();
	};

	var header = {
		init: function() {
			this.el = $('header');

			if (WB.modal.device === 'isTablet'){this.hidePlaceholder();}
			this.toggleMenu();
			
			this.el.on("click", "nav .send", $.proxy(this.sendForm, this));
			this.el.on("click", "nav.mobile a", $.proxy(this.removeStyle, this));
			/*this.el.on("click", "nav.mobile ul li ul li a", $.proxy(this.removeStyle, this));*/
		},
		toggleMenu: function() {
			var pointer = this.el.find('.menuAction'),
				menu = $('nav.mobile');

			WB.utils.toggleMenu( pointer, menu );
		},
		hidePlaceholder: function() {
			this.el.find('nav .bottomNav .search').attr('placeholder', '');
		},
		sendForm: function (e) {
			var clickedItem = $(e.currentTarget),
			    form = $(clickedItem).parent("form");
			e.preventDefault();
			$(form).submit();
		},
		removeStyle: function(e) {
			var currentTarget = $(e.currentTarget);
			
			currentTarget.addClass('active');
		},
		addStyle: function(e) {
			var currentTarget = $(e.currentTarget);
			
			currentTarget.removeClass('active');
		}
	};

	/**
	 * Hero Module carrousel / slider (the main carrousel)
	 *
	 * It is present in those pages
	 * -Homepage
	 * -Newsroom
	 * -
	 */
	var slider = {
		init: function(){
			this.el = $('.feature');
			WB.config.sliderFred.prev.button = $('.feature .arrow.left');
			WB.config.sliderFred.prev.key = $('.feature .left');
			WB.config.sliderFred.next.button = $('.feature .arrow.right');
			WB.config.sliderFred.next.key = $('.feature .right');
			WB.config.sliderFred.pagination = $('.feature .pagination');
			var contentSlider = $(".feature .contentSlider");
			if (contentSlider.length != 0 ){
				contentSlider.show();
				contentSlider.carouFredSel(WB.config.sliderFred);
			}
			if (WB.modal.device === 'isMobile'){
				this.el.on('click', '.contentSlider .slider', $.proxy(this.redirect, this));
				$('#whatWeDo').on('click', '.contentTouts .tout', $.proxy(this.redirect, this));
			}
		},
		redirect: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
				href = currentTarget.find('a').attr('href');

			document.location = href;
		}
	};

	var tout = {
		init: function(){
			this.el = $('.touts');
			if (WB.modal.device != 'isTablet'){
				this.el.on('mouseenter', '.tout', $.proxy(this.showInfoTout, this));
				this.el.on('mouseleave', '.tout', $.proxy(this.hideInfoTout, this));
			}
			this.el.on('click', '.tout', $.proxy(this.redirect, this));
		},
		showInfoTout: function(e){
			var currentTout = $(e.currentTarget);

			this.el.find('.tout').each(function(){
				$(this)
					.removeClass('active')
					.addClass('inactive');
			});

			currentTout
				.removeClass('inactive')
				.addClass('active');

		},
		hideInfoTout: function(){
			this.el.find('.tout').each(function(){
				$(this)
					.removeClass('active')
					.removeClass('inactive');
			});
		},
		redirect: function(e) {
			var currentTarget = $(e.currentTarget),
				href = currentTarget.find('a').attr('href');

			document.location = href;
		}
	};

	var news = {
		init: function() {
			var self = this;
			this.el = $('.news');

			if (!this.el)
				return false;


			this.totalContents = 0;
			this.widthContent = 0;
			this.totalWidth = 0;
			if (WB.modal.device == 'isMobile'){
				$.proxy(this.createPagination(), this);
				$.proxy(this.resizeContainers(), this);
				this.el.find('.pager').on('click', 'span', $.proxy(this.translateSliderNews, this));
			}

			this.resizeColumns();

			/**
			 * On window resize (when changed from portrait to landscape)
			 */
			window.onresize = function(e) {
				if (WB.modal.device == 'isMobile') {
				    setTimeout(function () {
				    	$.proxy(self.resizeContainers("isWindowResize"), this);
				    }, 1000);
				}
			}

			if (WB.modal.device == 'isMobile'){
				$(".news .wrapper ul li")
					.swipeEvents()
						.bind("swipeLeft", $.proxy(function (e) {
							var index = ($(e.currentTarget).index() === 4) ? $(e.currentTarget).index() : $(e.currentTarget).index() + 1;
							this.translateSliderNews(false, index, e.currentTarget, "swipeLeft");
						}, this))
	          			.bind("swipeRight", $.proxy(function (e) {
	          				var index = ($(e.currentTarget).index() === -1) ? $(e.currentTarget).index() : $(e.currentTarget).index() - 1;
	          				this.translateSliderNews(false, index, e.currentTarget, "swipeRight");
	          			}, this));
	         }

		},
		createPagination: function() {
			var self = this,
				pager,
				content;

			this.el.each(function (i, obj) {
				pager = $(obj).find('.pager');

				$(obj).find('ul li').each(function(){
					self.totalContents++;
					pager.append('<span></span>');
				});

				pager.find('span:first-child').addClass('active');
			});
		},
		resizeContainers: function () {
			var isWindowResize = (arguments[0]) ? true : false;

			this.widthContent = $(document).width()-40;

			this.el.find('.newsContent')
					.css('width', this.widthContent)
					.css('max-width', this.widthContent);
			this.el.find('.newsContent ul li')
					.css('width', this.widthContent)
					.css('max-width', this.widthContent);

			this.totalWidth = this.widthContent*this.totalContents;
			this.el.find('ul').css('width', this.totalWidth);

			if (isWindowResize) {this.resetPager(this);}
		},
		resetPager: function () {
			var pager = this.el.find('.pager');

			pager.find('span').removeClass('active');
			pager.find('span:first-child').addClass('active');

			this.el.find("ul").css("transform","translateX(0px)");
		},

		/**
		 * arguments Array --
		 * [0] - (false) -> If it is swipe / none if it is click
		 * [1] - (index) -> The number of LI in which the swipe was performed
		 * [2] - (e.currentTarget) -> jQuery object in which the swiped happened
		 * [3] - ("swipeLeft" / "swipeRight") -> The direction Left / Right
		 */
		translateSliderNews: function(e){
			var currentContent = (e) ? $(e.currentTarget) : false,
				index = (currentContent) ? currentContent.index() : arguments[1],
				swipeCurrentTarget = arguments[2],
				direction = arguments[3],
				sliderWrapper = (currentContent) ? currentContent.parent().parent().find("ul") : $(swipeCurrentTarget).parent(),
				widthContent = $(document).width() - 40,
				spanCurrentPager = "";

			//if direction is right and index is minor than 0
			//of if direction is left and index is higher than 3
			if ((index === -1 && direction === "swipeRight") || (index === 4 && direction === "swipeLeft"))
				return false;

			//It does the transition.
			sliderWrapper.css("transform","translateX(" + index * -widthContent + "px)");

			//if it was clicked one of the pagination items
			//else it was a swipe gesture
		    if (currentContent) {
		    	currentContent.addClass("active");
		    	currentContent.siblings().removeClass("active");
		  	} else {
		  		spanCurrentPager = sliderWrapper.parent().siblings(".pager").children().removeClass("active")[index];
		  		$(spanCurrentPager).addClass("active");
		  	}
		},

		/**
	 	* Resize the 4 news columns in order to mantain the date aligned at bottom
	 	*/
		resizeColumns: function (){
			var listItems = this.el.find(".newsContent ul li"),
				paddingBottom = parseFloat($(listItems[0]).css("padding-bottom")),
				maxHeight = Math.max(
									parseFloat($(listItems[0]).height()),
									parseFloat($(listItems[1]).height()),
									parseFloat($(listItems[2]).height()),
									parseFloat($(listItems[3]).height()));

			$.each(listItems, function (idx,obj) {
				$(obj).css("height", (maxHeight-0) + "px");
			});
		}
	};

	var articleNews = {
		init: function () {
			this.el = $('#newsroomArticle');

			this.el.on('click', '.socialNetwork .facebook', this.facebookShare);
			this.el.on('click', '.socialNetwork .twitter', this.twitterShare);
			this.el.on('click', '.socialNetwork .linkedin', this.linkedinShare);
		},
		facebookShare: function(e) {
			e.preventDefault();
			var urlArticle = window.location.pathname,
				params = { url: urlArticle, title: 'facebook' },
				target = 'weber',
				type = 'fb';

			WB.utils.socialShare(target, type, params);
		},
		twitterShare: function(e) {
			e.preventDefault();
			var urlArticle = window.location.pathname,
			    title = $('.main-column h1').html(),
	          	title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'tw';

			WB.utils.socialShare(target, type, params);
		},
		linkedinShare: function(e) {
			e.preventDefault();
			var urlArticle = window.location.pathname,
				title = $('.main-column h1').html(),
	       		title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'li';

			WB.utils.socialShare(target, type, params);
		}
	};

	var allArticles = {
		init: function() {
			this.el = $('#newsListing .news-holder .item');

			this.el.on('click', '.shareSocial .fb', this.facebookShare);
			this.el.on('click', '.shareSocial .tw', this.twitterShare);
			this.el.on('click', '.shareSocial .lin', this.linkedinShare);
		},
		facebookShare: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
				urlArticle = currentTarget.closest('.item').find('a').attr('href'),
				params = { url: urlArticle, title: 'facebook' },
				target = 'weber',
				type = 'fb';

			WB.utils.socialShare(target, type, params);
		},
		twitterShare: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
				urlArticle = currentTarget.closest('.item').find('a').attr('href'),
			    title = currentTarget.closest('.item').find('h3').html(),
          		title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'tw';

			WB.utils.socialShare(target, type, params);
		},
		linkedinShare: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
				urlArticle = currentTarget.closest('.item').find('a').attr('href'),
				title = currentTarget.closest('.item').find('h3').html(),
          		title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'li';

			WB.utils.socialShare(target, type, params);
		}
	};

	var lpNewsroom = {
		init: function(){
			this.el = $('#newsroom');
			this.el.on('click', '.content .latest-holder ul li .shareSocial .fb', this.facebookShare);
			this.el.on('click', '.content .latest-holder ul li .shareSocial .tw', this.twitterShare);
			this.el.on('click', '.content .latest-holder ul li .shareSocial .lin', this.linkedinShare);
			
			this.el.on('click', '.slider .shareSocial .fb', this.facebookShareSlider);
			this.el.on('click', '.slider .shareSocial .tw', this.twitterShareSlider);
			this.el.on('click', '.slider .shareSocial .lin', this.linkedinShareSlider);
		},
		facebookShare: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
				urlArticle = currentTarget.closest('.reviewArticle').find('a').attr('href'),
				params = { url: urlArticle, title: 'facebook' },
				target = 'weber',
				type = 'fb';

			WB.utils.socialShare(target, type, params);
		},
		twitterShare: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
			    urlArticle = currentTarget.closest('.reviewArticle').find('a').attr('href'),
			    title = currentTarget.closest('.reviewArticle').find('h4').text(),
	         	title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'tw';

			WB.utils.socialShare(target, type, params);
		},
		linkedinShare: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget);
				urlArticle = currentTarget.closest('.reviewArticle').find('a').attr('href'),
				title = currentTarget.closest('.reviewArticle').find('h4').text(),
	         	title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'li';

			WB.utils.socialShare(target, type, params);
		},
		facebookShareSlider: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
				urlArticle = currentTarget.closest('.slider').find('a').attr('href'),
				params = { url: urlArticle, title: 'facebook' },
				target = 'weber',
				type = 'fb';

			WB.utils.socialShare(target, type, params);
		},
		twitterShareSlider: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget),
			    urlArticle = currentTarget.closest('.slider').find('a').attr('href'),
			    title = currentTarget.closest('.slider').find('h2').text(),
	         	title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'tw';

			WB.utils.socialShare(target, type, params);
		},
		linkedinShareSlider: function(e) {
			e.preventDefault();
			var currentTarget = $(e.currentTarget);
				urlArticle = currentTarget.closest('.slider').find('a').attr('href'),
				title = currentTarget.closest('.slider').find('h2').text(),
	         	title = $.trim(title),
				params = { url: urlArticle, title: title },
				target = 'weber',
				type = 'li';

			WB.utils.socialShare(target, type, params);
		}
	};

	var video = {
		init: function(){
			this.el = $('.popUp');
			this.actionBtn = $('.openVideo');

			this.el.find('iframe').hide();

			this.iframeTrans();
			this.showVideo();
			this.hideVideo();
		},

		showVideo: function(){
			var popUp = this.el;

			this.actionBtn.on( 'click', function(e){
				e.preventDefault();
				popUp.show('slow', function(){popUp.find('iframe:eq(0)').show();});
			});
		},

		hideVideo: function(){
			var popUp = this.el,
				close = $('.close', popUp);

			close.on( 'click', function(){popUp.find('iframe:eq(0)').hide().end().hide('slow');});

		},

		iframeTrans: function(){
			var popUp = this.el;

		    $("iframe", popUp).each(function(){
		        var ifr_source = $(this).attr('src');
		        var wmode = "wmode=transparent";
		        if(ifr_source.indexOf('?') != -1) {
		            var getQString = ifr_source.split('?');
		            var oldString = getQString[1];
		            var newString = getQString[0];
		            $(this).attr('src',newString+'?'+wmode+'&'+oldString);
		        }
		        else {$(this).attr('src',ifr_source+'?'+wmode);}
		    });
		}

	};

	var footer = {
		init: function() {
			this.el = $('nav.mobileFooter');
			//this.el.on('click', 'ul > li > a', $.proxy(WB.utils.showDropdownMenu, this));
		}
	};

	
	var viewport = {
		init: function() {
			var self = this,
				size = {};
			$(window).resize(function () {
				setTimeout(function () {
					size = self.getRealSize();
					if (size.width >= 767) {
						$("header nav.mobile").css("display", "none");
						$("header .menuAction").removeClass("closed").addClass("opened");
					}
				}, 400);
			});
		},
		
		getRealSize: function () {
		    var e = window, a = 'inner';
		    if (!('innerWidth' in window )) {
		        a = 'client';
		        e = document.documentElement || document.body;
		    }
		    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
		}
	};


})(WB.global = {})