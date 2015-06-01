(function(util) {

	/**
	 * @method get the Id of current web page
	 *
	 */

	util.getCurrentSection = function() {
		var id = [];
		$('section').each(function(i, val) {
			id[i] = $(val).attr('id');
		});
		return id[0];
	},

	/*
	 * @method display a fix container with top and bottom
	 * @param selector: get a container that will be use a sticky function
	 * @param top: max top container as reference the body
	 * @param bottom: min top container as reference the body
	 *
	 */

	util.setStickyMenu = function(selector, top, bottom) {
		selector.sticky({
			topSpacing: top,
			bottomSpacing: bottom
		});
	},

	/**
	 * @method close and open with animation the select container
	 * @param pointer: button of action to close or open
	 * @param menu: container to close or open
	 *
	 */

	util.toggleMenu = function(pointer, menu) {
		pointer.on('click', function(e) {
			e.preventDefault();
			menu.toggle('fast');
			pointer.toggleClass("opened closed");
			return false;
		});
	},

	/**
	 * @method close and open bottom dropdown in mobile devices
	 *
	 */

	util.showDropdownMenu = function(e) {
		var currentTarget = $(e.currentTarget),
			currentDropdown = currentTarget.parent().find('ul');

		e.stopPropagation();

		if (currentDropdown.length !== 0) {
			e.preventDefault();
			currentTarget.parent().toggleClass('active');
			currentDropdown.toggleClass('active');
		}
	},

	/**
	 * @method get a user agent of the device, show a concole.log with the name of it
	 * @return if is mobile (isMobile) or tablet (isTablet) or unknow device (isUnkown)
	 *
	 */

	util.getUserAgent = function() {
		var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
		if(mobile) {
			$("html").addClass("mobile");
			var userAgent = navigator.userAgent.toLowerCase();

			if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1)) {
				//console.log("ANDROID MOBILE");
				return 'isMobile';
			} else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1)) {
				//console.log("ANDROID TABLET");
				return 'isTablet';
			} else if ((userAgent.search("blackberry") > -1)) {
				//console.log("BLACKBERRY DEVICE");
				return 'isMobile';
			} else if ((userAgent.search("iphone") > -1)) {
				//console.log("<b> IPHONE DEVICE <br>");
				return 'isMobile';
			} else if ((userAgent.search("ipod") > -1)) {
				//console.log("<b> IPOD DEVICE <br>");
				return 'isMobile';
			} else if ((userAgent.search("ipad") > -1)) {
				//console.log("<b> IPAD DEVICE <br>");
				return 'isTablet';
			} else {
				//console.log("<b> UNKNOW DEVICE <br>");
				return 'isUnknow';
			}
		} else {
			$("html").addClass("no-mobile");
			//console.log("NO MOBILE DEVICE DETECTED");
			return 'isUnknow';
		}
	}

	util.socialShare = function(target, type, params){

		var u = params.url || "http://www.webershandwick.com",
			t = params.title || "Title",
			subtitle = " ",
			author = params.author || "Author",
			comment = params.comment || "Comment",
			c = "Content Here",
			image = params.image ? params.image.link : $(location).attr('host') + "/images/touch-icon-ipad3.png";

		switch(target){
			case "weber":
				c = 'share weber';
			break;
		}
		switch(type){
			case "fb":
				window.open('http://www.facebook.com/sharer.php?u='+ document.domain+u);
				break;
			case "tw":
				var url = 'http://www.webershandwick.com'+encodeURIComponent(u);
				window.open('https://twitter.com/share?text=' + t + '&url=' +url + '', 'sharer', 'scrollbars=0,toolbar=0,status=0,width=550,height=260');
				//window.open('https://twitter.com/share?url='+ url +'&text=' + t + '', 'sharer', 'scrollbars=0,toolbar=0,status=0,width=550,height=260');
				//window.open('https://twitter.com/share?url=' + encodeURIComponent(u) + '&text=' + t + ', 'scrollbars=0,toolbar=0,status=0,width=550,height=260');
				
				break;
			case "li":
				window.open('http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2F' + document.domain + encodeURIComponent(u) + '&title=' + encodeURIComponent(t) + '&source=' + encodeURIComponent('Weber Shandwick'), 'sharer', 'scrollbars=0,toolbar=0,status=0,width=580,height=500');
				break;
		}
	}


})(WB.utils = {});