/* ISOTOPE */
jQuery(window).on('load',function() {
	initIsotopeGrid();
});	
var rtime;
var timeout = false;
var delta = 200;
$(window).on('resize',function() {
	rtime = new Date();
	if (timeout === false) {
		timeout = true;
		setTimeout(resizeend, delta);
	}
});	
function resizeend() {
	if (new Date() - rtime < delta) {
		setTimeout(resizeend, delta);
	} else {
		timeout = false;
		initIsotopeGrid();
	} 
}
function initIsotopeGrid() {
var isoGrid = $('.isotope-grid')
  isoGrid.each(function(){  
	   var $port_container = $(this);  
		$containerProxy = $port_container;
		var filter_selector = $port_container.parent().find('.isotope-filters a.active').data('filter');  
		var gutterSize = $port_container.data('gutter');  
		var columns = $port_container.data('columns');
		 
		if ($(window).width() >= 1024) {
			$port_container.imagesLoaded(function(){
				if( columns == 2 ) {
					var masonryGutter = gutterSize / columns;					
				} else if( columns == 3 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 3 );					
				} else if( columns == 4 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 2 );					
				}
				else if( columns == 5 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 2 );					
				}
				else if( columns == 6 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 2 );					
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $containerProxy.width() / columns );
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$port_container.find('.item').css('width', masonryWidth);
				$port_container.find('.item').css('margin-bottom', gutterSize);
		
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: gutterSize
					},
				});
				
				jQuery( window ).on( 'load resize', function() {
					var colWidth = Math.floor( $containerProxy.width() / columns );
					var masonryWidth = Math.floor( colWidth - masonryGutter );
					$port_container.find('.item').css('width', masonryWidth);
					
					$port_container.isotope({
						masonry: {
							columnWidth: masonryWidth,
							gutter: gutterSize
						},
					});
				});
			});					
		}
		if ($(window).width() >= 992 && $(window).width() < 1024) {
			$port_container.imagesLoaded(function(){
				if( columns == 4 ) {
					columns = 3;
				}
				
				if( columns == 2 ) {
					var masonryGutter = gutterSize / columns;					
				} else if( columns == 3 || columns == 4 ) {
					var colValue = gutterSize / 2;
					var masonryGutter = colValue + ( colValue / 3 );					
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $containerProxy.width() / columns );
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$port_container.find('.item').css('width', masonryWidth);
				$port_container.find('.item').css('margin-bottom', gutterSize);
		
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: gutterSize
					},
				});
				
				jQuery( window ).on( 'load resize', function() {
					var colWidth = Math.floor( $containerProxy.width() / columns );
					var masonryWidth = Math.floor( colWidth - masonryGutter );
					$port_container.find('.item').css('width', masonryWidth);
					
					$port_container.isotope({
						masonry: {
							columnWidth: masonryWidth,
							gutter: gutterSize
						},
					});
				});
			});	
		}
		if ($(window).width() >= 600 && $(window).width() < 991) {
			$port_container.imagesLoaded(function(){
				if( columns == 3 || columns == 4 ) {
					columns = 2;
				}
				
				if( columns == 2 ) {
					var masonryGutter = gutterSize / columns;					
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $containerProxy.width() / columns );
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$port_container.find('.item').css('width', masonryWidth);
				$port_container.find('.item').css('margin-bottom', gutterSize);
		
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: gutterSize
					},
				});
				
				jQuery( window ).on( 'load resize', function() {
					var colWidth = Math.floor( $containerProxy.width() / columns );
					var masonryWidth = Math.floor( colWidth - masonryGutter );
					$port_container.find('.item').css('width', masonryWidth);
					
					$port_container.isotope({
						masonry: {
							columnWidth: masonryWidth,
							gutter: gutterSize
						},
					});
				});
			});
		}
		if ($(window).width() < 600) {
			$port_container.imagesLoaded(function(){
				var gutterSize = Math.floor( $port_container.closest('.isotope-grid').attr('data-gutter') );
				$port_container.find('.item').css('width', '100%');
				$port_container.find('.item').css('margin-bottom', gutterSize);
				
				var selector = $port_container.parent().find('.isotope-filters a.active').data('filter');
				
				$port_container.isotope({
					resizable: false,
					filter: filter_selector,
					animationEngine: "css",
					masonry: {
						columnWidth: '.item',
						gutter: 0
					},
				});
				
				jQuery( window ).on( 'load resize', function() {
					$port_container.isotope( "layout" );
				});
			});
		}
  
		// ISOTOPE FILTER
		var isoFilter = $('.isotope-filters a');
		isoFilter.on('click', function(){
		
			$(this).parent().parent().find('a.active').removeClass('active');    
			$(this).addClass('active');
			var selector = $(this).parent().parent().find('a.active').attr('data-filter');  
			$(this).parents().find('.isotope-grid').isotope({ filter: selector, animationEngine : "css" });
		
			return false; 
		});
		
	}); 
}


