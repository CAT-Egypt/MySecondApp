/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
	var Composition = Edge.Composition,
	    Symbol = Edge.Symbol;
	// aliases for commonly used Edge classes

	//Edge symbol: 'stage'
	(function(symbolName) {

		Symbol.bindElementAction(compId, symbolName, "${logo_facebook}", "mouseover", function(sym, e) {
			sym.$("logo_facebook_gray").hide();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_facebook}", "mouseout", function(sym, e) {
			sym.$("logo_facebook_gray").show();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_facebook_gray}", "mouseover", function(sym, e) {
			sym.$("logo_facebook_gray").hide();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_facebook_gray}", "mouseout", function(sym, e) {
			sym.$("logo_facebook_gray").show();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_LinkedIn}", "mouseover", function(sym, e) {
			sym.$("logo_LinkedIn_gray").hide();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_LinkedIn}", "mouseout", function(sym, e) {
			sym.$("logo_LinkedIn_gray").show();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_LinkedIn_gray}", "mouseover", function(sym, e) {
			sym.$("logo_LinkedIn_gray").hide();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_LinkedIn_gray}", "mouseout", function(sym, e) {
			sym.$("logo_LinkedIn_gray").show();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_twitter}", "mouseover", function(sym, e) {
			sym.$("logo_twitter_gray").hide();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_twitter}", "mouseout", function(sym, e) {
			sym.$("logo_twitter_gray").show();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_twitter_gray}", "mouseover", function(sym, e) {
			sym.$("logo_twitter_gray").hide();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_twitter_gray}", "mouseout", function(sym, e) {
			sym.$("logo_twitter_gray").show();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_facebook}", "click", function(sym, e) {
			window.open('https://www.facebook.com', '_blank');

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_LinkedIn}", "click", function(sym, e) {
			window.open('https://www.linkedin.com', '_blank');

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_twitter}", "click", function(sym, e) {
			window.open('https://www.twitter.com', '_blank');

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${logo_in_header}", "mouseover", function(sym, e) {
			// insert code to be run when the mouse hovers over the object
			//setTimeOut();
			sym.$("logo_in_header").addClass("bounce animated infinite");
			setTimeout(function() {
				sym.$("logo_in_header").removeClass("bounce animated");
			}, 5000);

		});
		//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${contact_us}", "mouseover", function(sym, e) {
			sym.$("contact_us").addClass('shake animated');
			setTimeout(function() {
				sym.$("contact_us").removeClass('shake animated');
			}, 1000);

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${our_clients}", "mouseover", function(sym, e) {
			sym.$("our_clients").addClass('hinge animated');
			setTimeout(function() {
				sym.$("our_clients").removeClass('hinge animated');
			}, 1000);

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${what_we_do}", "mouseover", function(sym, e) {
			sym.$("what_we_do").addClass('swing animated');
			setTimeout(function() {
				sym.$("what_we_do").removeClass('swing animated');
			}, 1000);

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${who_we_are}", "mouseover", function(sym, e) {
			sym.$("who_we_are").addClass('wobble animated');
			setTimeout(function() {
				sym.$("who_we_are").removeClass('wobble animated');
			}, 1000);

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${our_work}", "mouseover", function(sym, e) {
			sym.$("our_work").addClass('rotateInDownLeft animated');
			setTimeout(function() {
				sym.$("our_work").removeClass('rotateInDownLeft animated');
			}, 1000);

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

			/*<!--Div1 Start-->*/
			sym.$("who_we_are_contents").html('<br><div class="container" style="background-color:gray;height:400px;">' + '<ul class="nav nav-tabs fontsH">' + '<li class="active"><a data-toggle="tab" href="#wwa">WHO WE ARE</a></li>' + '<li><a data-toggle="tab" href="#op">OUR PEOPLE</a></li>' + '<li><a data-toggle="tab" href="#oc">OUR COMMITMENT</a></li>' + '</ul>' +

			/*<!--Div2 Start-->*/'<div class="tab-content fontsP2">' +

			/*<!--Div3 Start-->*/'<div id="wwa" class="tab-pane fade in active">' + '<br><p>TWENTY THREE SEVEN COMMUNICATIONS IS AN ADVERTISING AGENCY WITH BRANCHES IN DUBAI & KSA, PROVIDING A FULL SPECTRUM OF BELOW THE LINE SERVICES AS WELL AS PUBLICATION SERVICES. TWENTY THREE SEVEN COMMUNICATIONS IS A SISTER COMPANY TO CAT (CREATIVE ADVERTISING THINKING). CAT IS ESTABLISHED IN CAIRO SINCE 1997 HAVING MORE THAN17 YEARS EXPERIENCE IN HEALTHCARE & IT ADVERTISING.</p><br>' +
			/*<!--Div3 End-->*/'</div>' +

			/*<!--Div4 Start-->*/'<div id="op" class="tab-pane fade">' + '<br><p>WE BELIEVE THAT OUR PEOPLE ARE THOSE WHO WILL ALWAYS CREATE THE DIFFERENCE, THE MOST PRECIOUS ASSET FOR ANY ORGANIZATION IS ITS PEOPLE.</p><br>' +
			/*<!--Div6 Start-->*/'<div class="row">' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_01.jpg"></img><p><fontPicH><br>KHALED RADWAN<br><fontPicP>SHARE HOLDER</fontPicH></p></div>' + '<div class="col-md-2"> <img width="133" height="155" src="images/our_people_02.jpg"><p><fontPicH>HOSSAM ABDELWAHAB<br>SHARE HOLDER/<br>MANAGING PARTNER ADVERTISING</p></img></div>' + '<div class="col-md-2"> <img width="133" height="155" src="images/our_people_03.jpg"><h3>SHERIF ELGHARINI</h3><p>SHARE HOLDER</p></img></div>' + '<div class="col-md-2"> <img width="133" height="155" src="images/our_people_05.jpg"><h3>SAMEH MABROUK</h3><p>SHARE HOLDER / MANAGING PARTNER PUBLICATIONS</p></img></div>' + '<div class="col-md-2"> <img width="133" height="155" src="images/our_people_04.jpg"><h3>AYMAN ELGHAMRAWI</h3><p>SHARE HOLDER</p></img></div>' + '</div><br>' + /*<!--Div6 End-->*/

			/*<!--Div12 Start-->*/'<div class="row">' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_06.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_07.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_08.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_09.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_10.jpg"></img></div>' + '</div><br>' + /*<!--Div12 End-->*/

			/*<!--Div18 Start-->*/'<div class="row">' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_11.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_12.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_13.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_14.jpg"></img></div>' + '<div class="col-md-2"><img width="133" height="155" src="images/our_people_15.jpg"></img></div>' +
			/*<!--Div18 End-->*/'</div>' +
			/*<!--Div4 End-->*/'</div>' +

			/*<!--Div24 Start-->*/'<div id="oc" class="tab-pane fade">' + '<br><p>OUR COMMITMENT TOWARDS,<br>' + '<fontsH2>OUR CONDUCT</fontsH2> ETHICS / RESPONSIBILITY / SENSE OF OWNERSHIP<br>' + '<fontsH2>OUR WORK</fontsH2> INNOVATION / EXCELLENCE / ENJOY WHAT WE DO / RECOGNITION & DEVELOPMENT  / WORTHWHILE<br>' + '<fontsH2>OUR CLIENTS</fontsH2>  UNDERSTANDING NEEDS / EXCEEDING EXPECTATIONS IN FULFILLING NEEDS / PARTNERSHIP<br>' + '<fontsH2>OUR PEOPLE</fontsH2>  RESPECT / APPRECIATION / COLLABORATION / TRUST<br>' + '<fontsH2>OUR INDUSTRY SECTOR</fontsH2>  ENHANCING AND UPGRADING QUALITY OF BUSINESS ENVIRONMENT<br>' + '<fontsH2>OUR COMMUNITY</fontsH2>  POSITIVELY IMPACTING SOCIETY IN A WAY THAT BRINGS ABOUT BENEFIT AND WELFARE' + '</p>' +
			/*<!--Div24 End-->*/'</div>' +
			/*<!--Div2 End-->*/'</div>' +
			/*<!--Div1 End-->*/'</div>');

		});
		//Edge binding end

	})("stage");
	//Edge symbol end:'stage'

	//=========================================================

	//Edge symbol: 'Symbol_1'
	(function(symbolName) {

		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 350, function(sym, e) {
			sym.stop();

		});
		//Edge binding end

		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
			sym.stop();

		});
		//Edge binding end

		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1050, function(sym, e) {
			sym.stop();

		});
		//Edge binding end

		Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1400, function(sym, e) {
			sym.stop();

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${show_pic1}", "click", function(sym, e) {
			if (sym.getPosition() >= 350) {
				sym.playReverse(349);
			} else {
				sym.stop(0);
			}

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${show_pic2}", "click", function(sym, e) {
			if (sym.getPosition() < 350) {
				sym.play(0);
			} else if (sym.getPosition() > 350) {
				sym.playReverse(699);
			} else {
				sym.stop();
			}

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${show_pic3}", "click", function(sym, e) {
			if (sym.getPosition() < 700) {
				sym.play(351);
			} else if (sym.getPosition() > 700) {
				sym.playReverse(1559);
			} else {
				sym.stop();
			}

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${show_pic4}", "click", function(sym, e) {
			if (sym.getPosition() < 1050) {
				sym.play(701);
			} else if (sym.getPosition() > 1050) {
				sym.playReverse(1399);
			} else {
				sym.stop();
			}

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${show_pic5}", "click", function(sym, e) {
			if (sym.getPosition() < 1400) {
				sym.play(1051);
			} else if (sym.getPosition() > 1400) {
				sym.playReverse(1749);
			} else {
				sym.stop();
			}

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${leftArrow}", "click", function(sym, e) {
			sym.play();

			sym.$("_08_Creative").fadeOut(100).fadeIn(1000);
			sym.$("_09_info").fadeOut(100).fadeIn(1000);

			sym.$("leftArrow").fadeOut(200).fadeIn(200);

		});
		//Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${rightArrow}", "click", function(sym, e) {
			sym.playReverse();

			sym.$("_02_Res").fadeOut(100).fadeIn(1000);
			sym.$("_03_info").fadeOut(100).fadeIn(1000);

			sym.$("rightArrow").fadeOut(200).fadeIn(200);

		});
		//Edge binding end

	})("Symbol_1");
	//Edge symbol end:'Symbol_1'

	//=========================================================

	//Edge symbol: 'Symbol_2'
	(function(symbolName) {

		Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
			sym.$("titleText1").html('<div class="fontH">WHO WE ARE<div>');
			sym.$("titleText2").html('<div class="fontH">WHAT WE DO<div>');
			sym.$("titleText3").html('<div class="fontH">OUR WORK<div>');
			sym.$("titleText4").html('<div class="fontH">OUR CLIENTS<div>');

			sym.$("infoPic1").html('<div style="margin-left:20px;"><br><br><fontH>WHO WE ARE</fontH><br>' + '<fontP>TWENTY THREE SEVEN<br>COMMUNICATIONS IS<br>AN ADVERTISING AGENCY<br>' + 'WITH BRANCHES IN DUBAI<br>& KSA, PROVIDING A FULL<br>SPECTRUM OF BELOW THE<br>' + 'LINE SERVICES AS WELL<br>AS PUBLICATION SERVICES.<br><br>' + '<script> function fun1(){$("#Stage").animate({scrollTop: "1177px"}, 800);}</script><u style="cursor:pointer;" onclick="fun1()">MORE..</u></fontP></div>');

			sym.$("infoPic2").html('<div style="margin-left:20px;"><br><br><fontH>WHAT WE DO</fontH><br>' + '<fontP>ADVERTISING SERVICES<br>CREATIVE & DESIGN<br>EVENT MANAGEMENT<br>' + 'ILLUSTRATION<br>MULTIMEDIA<br>DIGITAL SERVICES<br>' + 'MEDICAL COPYWRITING<br><br><fontH>PUBLICATION SERVICES</fontH><br><br>' + '<script> function fun2(){$("#Stage").animate({scrollTop: "1677px"}, 800);}</script><u style="cursor:pointer;" onclick="fun2()">MORE..</u></fontP></div>');

			sym.$("infoPic3").html('<div style="margin-left:20px;"><br><br><fontH>OUR WORK</fontH><br>' + '<fontP>OUR COMMITMENT TOWARDS<br>OUR WORK IS,<br>INNOVATION<br>' + 'ENJOY WHAT WE DO<br>EXCELLENCE<br>DEVELOPMENT<br>' + 'RECOGNITION<br>WORTHWHILE<br><br>' + '<u>MORE..</u></fontP></div>');

			sym.$("infoPic4").html('<div style="margin-left:20px;"><br><br><fontH>OUR CLIENTS</fontH><br>' + '<fontP>OUR COMMITMENT TOWARDS <br>OUR CLIENTS IS,<br>UNDERSTANDING NEEDS<br>' + 'EXCEEDING EXPECTATIONS<br>PARTNERSHIP<br><br>' + '<u>MORE..</u></fontP></div>');

			// opacity to 0 for all containers
			sym.$("contPic1").animate({
				opacity : 0
			}, 500);
			sym.$("contPic2").animate({
				opacity : 0
			}, 500);
			sym.$("contPic3").animate({
				opacity : 0
			}, 500);
			sym.$("contPic4").animate({
				opacity : 0
			}, 500);

			// 001 translate Pic1 using mouse enter for pic1_gray element...
			sym.$("pic1_gray").mouseenter(function() {

				// hide the head titles
				sym.$("titleText1").fadeOut(10);
				sym.$("titleText2").fadeOut(10);
				sym.$("titleText3").fadeOut(10);
				sym.$("titleText4").fadeOut(10);

				//translate the gray PICs
				sym.$("pic1_gray").animate({
					left : 0,
					opacity : 0
				}, 500, "linear");
				sym.$("pic2_gray").animate({
					left : 800,
					opacity : 1
				}, 500, "linear");
				sym.$("pic3_gray").animate({
					left : 960,
					opacity : 1
				}, 500, "linear");
				sym.$("pic4_gray").animate({
					left : 1120,
					opacity : 1
				}, 500, "linear");

				//translate the group of lighten PICs
				sym.$("contPic1").animate({
					left : 0,
					opacity : 1
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic2").animate({
					left : 800,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic3").animate({
					left : 960,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic4").animate({
					left : 1120,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});

			});

			// 002 translate Pic1 using mouse enter for pic1_gray element...
			sym.$("pic2_gray").mouseenter(function() {

				// hide the head titles
				sym.$("titleText1").fadeOut(10);
				sym.$("titleText2").fadeOut(10);
				sym.$("titleText3").fadeOut(10);
				sym.$("titleText4").fadeOut(10);

				//translate the gray PICs
				sym.$("pic1_gray").animate({
					left : 0,
					opacity : 1
				}, 500, "linear");
				sym.$("pic2_gray").animate({
					left : 160,
					opacity : 0
				}, 500, "linear");
				sym.$("pic3_gray").animate({
					left : 960,
					opacity : 1
				}, 500, "linear");
				sym.$("pic4_gray").animate({
					left : 1120,
					opacity : 1
				}, 500, "linear");

				//translate the group of lighten PICs
				sym.$("contPic1").animate({
					left : 0,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic2").animate({
					left : 160,
					opacity : 1
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic3").animate({
					left : 960,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic4").animate({
					left : 1120,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});

			});

			// 003 translate Pic1 using mouse enter for pic1_gray element...
			sym.$("pic3_gray").mouseenter(function() {

				// hide the head titles
				sym.$("titleText1").fadeOut(10);
				sym.$("titleText2").fadeOut(10);
				sym.$("titleText3").fadeOut(10);
				sym.$("titleText4").fadeOut(10);

				//translate the gray PICs
				sym.$("pic1_gray").animate({
					left : 0,
					opacity : 1
				}, 500, "linear");
				sym.$("pic2_gray").animate({
					left : 160,
					opacity : 1
				}, 500, "linear");
				sym.$("pic3_gray").animate({
					left : 320,
					opacity : 0
				}, 500, "linear");
				sym.$("pic4_gray").animate({
					left : 1120,
					opacity : 1
				}, 500, "linear");

				//translate the group of lighten PICs
				sym.$("contPic1").animate({
					left : 0,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic2").animate({
					left : 160,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic3").animate({
					left : 320,
					opacity : 1
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic4").animate({
					left : 1120,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});

			});

			// 004 translate Pic1 using mouse enter for pic1_gray element...
			sym.$("pic4_gray").mouseenter(function() {

				// hide the head titles
				sym.$("titleText1").fadeOut(10);
				sym.$("titleText2").fadeOut(10);
				sym.$("titleText3").fadeOut(10);
				sym.$("titleText4").fadeOut(10);

				//translate the gray PICs
				sym.$("pic1_gray").animate({
					left : 0,
					opacity : 1
				}, 500, "linear");
				sym.$("pic2_gray").animate({
					left : 160,
					opacity : 1
				}, 500, "linear");
				sym.$("pic3_gray").animate({
					left : 320,
					opacity : 1
				}, 500, "linear");
				sym.$("pic4_gray").animate({
					left : 480,
					opacity : 0
				}, 500, "linear");

				//translate the group of lighten PICs
				sym.$("contPic1").animate({
					left : 0,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic2").animate({
					left : 160,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic3").animate({
					left : 320,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic4").animate({
					left : 480,
					opacity : 1
				}, {
					duration : 500,
					easing : "linear"
				});

			});

			// **** when mouse leave the symbole return all elements to actual view...
			sym.getParentSymbol().$("Symbol_2").mouseleave(function() {

				//translate the group of lighten PICs
				sym.$("contPic1").animate({
					left : 0,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic2").animate({
					left : 320,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic3").animate({
					left : 640,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});
				sym.$("contPic4").animate({
					left : 960,
					opacity : 0
				}, {
					duration : 500,
					easing : "linear"
				});

				// hide the gray pics
				sym.$("pic1_gray").animate({
					left : 0,
					opacity : 1
				}, 400, "linear");
				sym.$("pic2_gray").animate({
					left : 320,
					opacity : 1
				}, 400, "linear");
				sym.$("pic3_gray").animate({
					left : 640,
					opacity : 1
				}, 400, "linear");
				sym.$("pic4_gray").animate({
					left : 960,
					opacity : 1
				}, 400, "linear");

				// show the titles
				sym.$("titleText1").fadeIn(500, "linear");
				sym.$("titleText2").fadeIn(500, "linear");
				sym.$("titleText3").fadeIn(500, "linear");
				sym.$("titleText4").fadeIn(500, "linear");

			});

		});
		//Edge binding end

	})("Symbol_2");
	//Edge symbol end:'Symbol_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1076720"); 