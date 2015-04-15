(function() {
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

	var max_width = 1000; // no bigger than 1000px wide
	
	// work out ratio based on original design.
	var o_w = 872;
	var o_h = 761;
	var ratio = o_h / o_w;		

    function resizeCanvas() {
    	var canvas = document.getElementById('londonsquared_canvas');
		if (canvas){
			var wid = Math.min( window.innerWidth, max_width );
			
			canvas.width = wid;
			canvas.height = wid * ratio;
		}
    }
    resizeCanvas();
})();