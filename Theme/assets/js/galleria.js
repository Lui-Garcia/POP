
function galleria() {
	Galleria.loadTheme('assets/galleria/themes/classic/galleria.classic.min.js');
	Galleria.run('#galleria', {
	    flickr: 'set:72157672286428433',
	    flickrOptions: {
	        sort: 'date-posted-asc',
	        max: 149
	    }
	});
}

window.onload = galleria;
