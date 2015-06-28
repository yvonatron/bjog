jQuery(document).ready(function($) {

	var s,

		Navigation = {

			settings: {
				menu: $("nav ul a"),
				submenu: $("#subnav")
			},

			init: function() {
				s = this.settings;
				this.addEvents();

			},

			addEvents: function() {
				// Click event optional
				var parent = s.submenu[0].parentElement;

				s.menu.on('click', function(target) {
					var href = $(target).attr.href;
					if ($(target).parent().find('ul')){
						// For touch devices
							
						if ($(s.submenu).is(':visible')){
    						window.open(s.menu.attr("href"));
    						return false;
						}
						else
						{
							$(s.submenu).toggleMenu();
							
						}
						
					}
				});

				// Added optional toggleMenu function in case more generic functionality needed
				
				if (parent) {
					this.toggleMenu(parent, s.submenu);

				}

			},
			toggleMenu: function(target, child) {
				var parent = target;
				var submenu = child;

					this.bindEvent(parent, "mouseover", function(){
						$(parent).hover(function(){
			    				$(submenu).slideDown(200);
			    				$(submenu).addClass("expanded").removeClass("collapsed");},
			  							function(){
			  								
			    				$(submenu).slideUp(200);
			    				$(submenu).addClass("collapsed").removeClass("expanded");
						 	});
						});
			},

			bindEvent: function(el, eventName, eventHandler) {
				if (el.addEventListener) {
					el.addEventListener(eventName, eventHandler, false);
					
					
				} else if (el.attachEvent) {
					el.attachEvent('on' + eventName, eventHandler);
					
				}
			}

		}

	Navigation.init();
});