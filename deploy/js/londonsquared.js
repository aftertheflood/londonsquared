// @license http://opensource.org/licenses/MIT
// copyright Paul Irish 2015
 
 
// Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
//   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values
 
// if you want values similar to what you'd get with real perf.now, place this towards the head of the page
// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed
 
 
(function(){
 
  if ("performance" in window == false) {
      window.performance = {};
  }
  
  Date.now = (Date.now || function () {  // thanks IE8
	  return new Date().getTime();
  });
 
  if ("now" in window.performance == false){
    
    var nowOffset = Date.now();
    
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }
 
    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }
 
})();



// London Squared Starts here:

function LondonSquaredMap( opts )
{
	if (!opts.canvas){
		console.log("LondonSquaredMap requires opts.canvas to be defined, so nothing to render the map to!")
	}
	
	var colour = "#000"
	if (opts.colour) colour = opts.colour
	
	var animateTime = -1
	if (opts.tileAnimateTime) animateTime = opts.tileAnimateTime
	
	var delayBetweenTiles = 0
	if (opts.delayBetweenTiles) delayBetweenTiles = opts.delayBetweenTiles
	
	this._showCredit = false
	if (opts.showCredit) this._showCredit = opts.showCredit
	
	this._palette = "green"
	if (opts.palette) this._palette = opts.palette
	
	this._showTitle = false
	if (opts.showTitle) this._showTitle = true
	
	this.init( opts.canvas, colour, animateTime, delayBetweenTiles )
	
	// favour a URL of data over a raw chunk of data (shouldn't have both)
	if (opts.dataURL != undefined){
		this._loadRemoteData( opts.dataURL )
	} else if (opts.data != undefined){
		this._loadJsonData( opts.data )
	}
}
LondonSquaredMap.prototype = {
	init: function( canvas_id, colour, animateTime, delayBetweenTiles ){
		// Get a reference to the canvas object
		this.htmlCanvasElement = document.getElementById( canvas_id );
		// Create an empty project and a view for the canvas:
		paper.setup(this.htmlCanvasElement);
	
		var self = this
		
		paper.view.on('resize', function(event){
			self._resizeMap()
		})
		
		this._animateTime = animateTime
		this._delayBetweenTiles = delayBetweenTiles
	
		// generate the layout data for the map
		this._mapGrid = []
		for(i=0;i<8;i++){ this._mapGrid.push([]) }
		//
		this._mapGrid[0][4] = { name:"Enf" }
		//
		this._mapGrid[1][2] = { name:"Hrw" }
		this._mapGrid[1][3] = { name:"Brn" }
		this._mapGrid[1][4] = { name:"Hgy" }
		this._mapGrid[1][5] = { name:"Wth" }
		//
		this._mapGrid[2][0] = { name:"Hdn" }
		this._mapGrid[2][1] = { name:"Elg" }
		this._mapGrid[2][2] = { name:"Brt" }
		this._mapGrid[2][3] = { name:"Cmd" }
		this._mapGrid[2][4] = { name:"Isl" }
		this._mapGrid[2][5] = { name:"Hck" }
		this._mapGrid[2][6] = { name:"Rdb" }
		this._mapGrid[2][7] = { name:"Hvg" }
		//
		this._mapGrid[3][0] = { name:"Hns" }
		this._mapGrid[3][1] = { name:"Hms" }
		this._mapGrid[3][2] = { name:"Kns" }
		this._mapGrid[3][3] = { name:"Wst", shape:"M18.7,124.4c5.4,2.4,10.5,4.6,18.3,4.6c10.4,0,18.3-4.4,26.5-9c8.8-4.9,17.9-10,30.5-10c2.9,0,5.5,0.2,8,0.5V17H0v102.1C8,119.6,13.4,122,18.7,124.4z" }
		this._mapGrid[3][4] = { name:"Cty", shape:"M115,112l0.2,0l84.3,12c4.5,0.5,8.6,0.8,12.5,0.9V17H110v94.5C111.6,111.7,113.2,111.9,115,112z" }
		this._mapGrid[3][5] = { name:"Tow", shape:"M235.5,121.3c4.5-1.8,8-5.2,11.3-8.6c4.9-4.9,10.5-10.5,19.6-9.7c12.8,1.2,14,17.7,14.6,25.7c0.3,4,1.7,7.2,4.1,9.2c2.1,1.8,5,2.5,8.5,2.1c5.9-0.6,9.2-2.9,8.4-12.7l0-0.6c-0.5-6-1.5-18.5,10.6-19.7c3.5-0.3,6.5,0.2,9.4,1.4V17H220v107.7C225.5,124.3,230.5,123.3,235.5,121.3z" }
		this._mapGrid[3][6] = { name:"Nwm", shape:"M332.4,114.4c8.2,5.6,18.5,12.6,38.6,12.6c12.6,0,21.8-3.6,30.7-7.1c7.7-3,14.9-5.9,23.3-5.9c2.5,0,4.8,0.1,7,0.3V17H330v95.8C330.8,113.3,331.6,113.9,332.4,114.4z" }
		this._mapGrid[3][7] = { name:"Bar", shape:"M440,17v98.3c2.4,0.4,4.6,0.9,6.9,1.3c5.7,1.2,11.1,2.3,18.1,2.3h77V17H440z" }
		//
		this._mapGrid[4][1] = { name:"Rch" }
		this._mapGrid[4][2] = { name:"Wns" }
		this._mapGrid[4][3] = { name:"Lam", shape:"M664,8c-10.5,0-18.3,4.4-26.6,9c-8.8,4.9-17.9,10-30.4,10c-9.5,0-15.6-2.7-21.5-5.3c-4.7-2.1-9.2-4.1-15.5-4.6V119h102V8.5C669.5,8.2,666.9,8,664,8z" }
		this._mapGrid[4][4] = { name:"Swr", shape:"M768.6,22l-0.2,0l-84.3-12c-1.5-0.1-2.8-0.3-4.2-0.4V119h102V22.9C777.7,22.8,773.3,22.5,768.6,22z" }
		this._mapGrid[4][5] = { name:"Lsh", shape:"M883.4,5c-3.2,0.3-4.2,2-3.5,11.1l0.1,0.6c1,12.9-4.2,20.1-15.6,21.3c-0.9,0.1-1.7,0.1-2.6,0.1c-4.6,0-8.7-1.4-11.9-4.1c-4-3.4-6.5-8.6-6.9-14.7c-0.6-8.8-2-17.8-7.4-18.3c-5.1-0.5-8.2,2.4-13.2,7.4c-3.7,3.7-7.9,7.9-14,10.4c-6,2.4-12,3.6-18.5,4V119h102V7.2C889.1,5.6,886.4,4.7,883.4,5z" }
		this._mapGrid[4][6] = { name:"Grn", shape:"M995,12c-6.9,0-13.1,2.5-20.3,5.3c-9.1,3.6-19.5,7.7-33.7,7.7c-20.8,0-32.5-6.9-41-12.6V119h102V12.3C999.8,12.1,997.5,12,995,12z" }
		this._mapGrid[4][7] = { name:"Bxl", shape:"M1015.2,14.5c-1.7-0.4-3.4-0.7-5.2-1V119h102V17h-77C1027.2,17,1021.1,15.7,1015.2,14.5z" }
		//
		this._mapGrid[5][2] = { name:"Kng" }
		this._mapGrid[5][3] = { name:"Mrt" }
		this._mapGrid[5][4] = { name:"Crd" }
		this._mapGrid[5][5] = { name:"Brm" }
		//
		this._mapGrid[6][3] = { name:"Stn" }
	
		this._generateGeometry()
		
		this._mapLinear = []
		
		// loop through and generate the tiles
		for( var y=0; y<this._mapGrid.length; y++ ){
			var maprow = this._mapGrid[y];
			for(var x=0;x<maprow.length;x++){
				if (maprow[x]){
				
					var data = maprow[x]
					
					var ts = new TileSquare( x, y, this.geometry, colour, data )
					//ts.appear( 1000, 150 * ( x + y ) )
					
					data.tilesquare = ts
					this._mapLinear.push( data )
				}
			}
		}
		
		this._generateRandomOrder()
		
		if (this._showCredit == true){
		
			console.log("adding credit")
			var pt = new paper.Point( paper.view.bounds.width - 410, paper.view.bounds.height - 5 )
			this._creditText = new paper.PointText( pt )
			this._creditText.fontSize = 18
			this._creditText.fillColor = 'black'
			//this._creditText.fontWeight = 'bold'
			this._creditText.content = "London Squared Map ©2015 www.aftertheflood.co"
			console.log("added credit:", this._creditText )
		}
		
		paper.view.update();
		
		this._animate();
		
		
	},
	exportMapAsPNG: function(){
		console.log("londonsquared - exportMapAsPNG")
		var image = this.htmlCanvasElement.toDataURL("image/png")
		//Convert image to 'octet-stream' to force a download (otherwise it loads in the browser window)
		image = image.replace("image/png", "image/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=map.png")
		window.location.href = image
	},
	_generateGeometry: function(){
		
		// work out sizes
		var scrn_wid = paper.view.size.width
		var pieces = 8
		var margin_amnt = .5
		var wid = scrn_wid / (pieces+(margin_amnt))
		var wid_nomargin = scrn_wid / pieces
		var margin = (wid_nomargin - wid)
		var hei = wid
		
		this.geometry = {
			tile_width: wid,
			tile_height: hei,
			tile_margin: margin
		};
		
	},
	_resizeMap: function(){
		
		this._generateGeometry()
		for( var t=0; t<this._mapLinear.length; t++ ){
			var ts = this._mapLinear[t].tilesquare
			ts.resizeTile( this.geometry )
			
		}
	},
	_animate: function( time ) {
		
		var self = this;

		requestAnimationFrame( function(_time){ self._animate(_time) } );
	
		TWEEN.update( time );
		paper.view.update();
	},
	animateNextImage: function(){
		
		var p = this._mapPointers.shift()
		var map = this._mapLinear[ p ]
		var ts = map.tilesquare
		
		ts.showNextImage( this._animateTime, 0 )
		
		if (this._mapPointers.length == 0){
			
			this._generateRandomOrder()
			
			this._fullUpdateCounter++
			if (this._fullUpdateCounter >= 5){
				// get the data again!
				if (this._dataURL != undefined){
					this._loadRemoteData( this._dataURL )
				}
			}
		}
		
	},
	_loadRemoteData: function(url){
		this._dataURL = url
		var req = new XMLHttpRequest() // a new request
		var self = this
		req.onreadystatechange=function()
		{
			if (req.readyState==4)
			{
				if (req.status==200 || req.status == 0) // 200 for a server, 0 for locally
				{
					var data = JSON.parse( req.responseText ) // get the response and turn it into JSON
					self._parseData( data )
					
				} else {
					console.log("got an error loading remote data", req.status )
				}
			}
		}
		req.open("GET",url,true);
		req.send(null);
	},
	_loadJsonData: function( json_str ){
		var data = JSON.parse( json_str ) // turn the JSON string into data (validation could/should go here)
		this._parseData( data )
	},
	_parseData: function( data ){
		var self = this
		this._queuedTileLoad = []
		// loop through the data
		for( var i=0; i < data.data.length; i++ ){
			var thisdata = data.data[i]
			var key = thisdata.key
			var found = false
			// now loop through the grid to find a match
			for(var y=0; y < self._mapGrid.length; y++ ){
				var maprow = self._mapGrid[y];
				for(var x=0; x<maprow.length; x++ ){
					var ob = maprow[x]
					// check it's valid & is the same key
					if (ob && ob.name == key ){
						// we have a match!!
						// update title (if we want it)
						if (self._showTitle){ 
							maprow[x].tilesquare.setTitle( key )
						}
						// update palette
						maprow[x].tilesquare.setPalette( self._palette )
						// if there is a background then update it
						if (thisdata.bg != undefined){
							maprow[x].tilesquare.queueImagesAtURL( thisdata.bg )
						}
						// if there is data then update it
						if (thisdata.data != undefined){
							maprow[x].tilesquare.setData( thisdata.data )
						}
						
						self._queuedTileLoad.push( maprow[x].tilesquare )
						found = true
					}
				}
				
			}
			if (!found) console.log( "didn't find entry for ", key );
		}
		
		self._loadNextTile()	
	},
	_loadNextTile: function(){
		var self = this
		if (this._queuedTileLoad.length > 0){
			var ts = this._queuedTileLoad.shift()
			ts.loadTile( function(){
				self._loadNextTile()
			})
		} else {
			// start animating (if we're set to animate)
			if (this._animateTime > 0){
				setInterval( function(){ self.animateNextImage() }, this._animateTime + this._delayBetweenTiles );
			}
		}
	},
	_generateRandomOrder: function(){
		
		this._mapPointers = []
		for( var i=0; i< this._mapLinear.length ; i++){
			this._mapPointers.push( i )
		}
		this._mapPointers = this._fisherYatesShuffle( this._mapPointers )
	},
	_fisherYatesShuffle: function(array){
		// algorithm from https://github.com/coolaj86/knuth-shuffle
		
		var currentIndex = array.length, temporaryValue, randomIndex ;
		
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
}

function TileSquare( x, y, geom, bgcolour, data )
{
	this.init()
	this.geometry.width = geom.tile_width
	this.geometry.height = geom.tile_height
	this.geometry.margin = geom.tile_margin
	this.geometry.tile_x = x
	this.geometry.tile_y = y
	this._id = data.name
	if (data.shape != undefined){
		this._shapeData = data.shape
	}
	this._container = new paper.Group()
	this._bgcolour = bgcolour
	this.render()
	this.availablePalettes = {
		green: ["#d9efe7", "#b2dfcf", "#7ac7ac", "#40af88", "#009460"],
		blue: ["#dde9f9", "#bad2f3", "#bdb4e8", "#558fe1", "#1c6ad7"],
		purple: ["#eee1f4","#ddc3ea","#c79cdb","#ab6bca","#8f39b8"],
		red: ["#f8ddde","#f0bbbc","#e68e8f","#da5658","#cd1d20"],
		orange: ["#fbe8d9","#f7d0b2","#f1b07f","#ea8940","#e36200"],
	}
	this.palette = this.availablePalettes.green;
}
TileSquare.prototype = {
	constructor: TileSquare,
	init: function(){
		this._id = ""
		this._shapeData = null
		this._container = null
		this._bg = null
		this._imagesToLoad = 0
		this._images = []
		this._loadedImageUrls = []
		this._imagePointer = 0
		this.geometry = { tile_x: 0,
				tile_y: 0,
				x: 0,
				y: 0,
				width: 10,
				height: 10,
				margin: 1,
				yoff: 0,
				shape_mult: 0,
				originalWidth: 10 }
		this._hasLoadedFirstImage = false
		this._pendingImageUrls = []
	},
	render: function(){
		this._container.removeChildren()
	
		var xp = (this.geometry.margin/2) + (this.geometry.tile_x * (this.geometry.width  + this.geometry.margin))
		var yp = (this.geometry.margin/2) + (this.geometry.tile_y * (this.geometry.height + this.geometry.margin))
		
		this.geometry.x = xp
		this.geometry.y = yp
		
		// generate the mask
		if (this._shapeData == undefined){
			// if there is no shape data, then draw a rectangle
			var re = new paper.Path.Rectangle(new paper.Point(xp, yp), new paper.Size(this.geometry.width,this.geometry.height))
		} else {
			// we have shape data
			var re = new paper.CompoundPath( this._shapeData )	
			// squares in original design are 102 x 102
			// so work out the size multiplier for the river shapes
			this.geometry.shape_mult = this.geometry.width / 102
			// resize the shape data to fit the current size
			re.scale( this.geometry.shape_mult )
			// work out the position offset (based on original position this shape appears)
			this.geometry.yoff = re.position.y - 67.95
			// position the shape (anchor is middle, so need to add 1/2 width & 1/2 height
			re.position.x = xp + (this.geometry.width/2) 
			re.position.y = yp + (this.geometry.height/2) + (this.geometry.yoff * this.geometry.shape_mult)
			// update bg_y for positioning images later
			this.geometry.y = yp - Math.abs(this.geometry.yoff * this.geometry.shape_mult)
			
		}
		this.geometry.originalWidth = this.geometry.width;
		this._maskShape = re
		
		re.fillColor = '#000'
		this._container.addChild( re )
		
		// turn on masking
		this._container.clipped = true
		
		
		this._bg = new paper.Path.Rectangle(new paper.Point(this.geometry.x, this.geometry.y - (this.geometry.height /4)), new paper.Size(this.geometry.width,this.geometry.height*2))
		this._bg.fillColor = this._bgcolour; //"#000"
		this._container.addChild( this._bg )
		
		this._creditText = new paper.PointText( new paper.Point( this.geometry.x+(this.geometry.margin*1.5), this.geometry.y+(this.geometry.margin*4) ) )
		this._creditText.fontSize = 18
		this._creditText.fillColor = 'black'
		this._creditText.fontWeight = 'bold'
		this._creditText.contents = ""
		
		this._valueText = new paper.PointText( new paper.Point( this.geometry.x+(this.geometry.margin*1.5), this._creditText.position.y + (this.geometry.margin*3) ) )
		this._valueText.fontSize = 18
		this._valueText.fillColor = 'black'
		this._valueText.contents = ""
		
		this._bg.opacity = 1
		
	},
	appear: function( duration, delay ){
		this._createFadeInTween( this._container, duration, delay )
	
	},
	resizeTile: function( geom ){
		
		var self = this
		
		this.geometry.originalWidth = this.geometry.width
		
		this.geometry.width = geom.tile_width
		this.geometry.height = geom.tile_height
		this.geometry.margin = geom.tile_margin
		
		var xp = (this.geometry.margin/4) + ((this.geometry.tile_x+.5) * (this.geometry.width  + this.geometry.margin))
		var yp = (this.geometry.margin/4) + ((this.geometry.tile_y+.5) * (this.geometry.height + this.geometry.margin))
		
		this.geometry.x = xp
		this.geometry.y = yp
		
		this._bg.position.x = this.geometry.x
		this._bg.position.y = this.geometry.y - (this.geometry.height/4)
		this._bg.scale( this.geometry.width / this.geometry.originalWidth )
	
		if (this._shapeData == undefined){
			
			this._maskShape.position.x = this.geometry.x
			this._maskShape.position.y = this.geometry.y
			this._maskShape.scale( this.geometry.width / this.geometry.originalWidth )
			
		} else {
			var orig = this.geometry.originalWidth / 102
			this.geometry.shape_mult = this.geometry.width / 102
			// resize the shape data to fit the current size
			this._maskShape.scale( this.geometry.shape_mult / orig )
			this._maskShape.position.x = xp
			this._maskShape.position.y = yp + (this.geometry.yoff * this.geometry.shape_mult)
			
		}
		
		// resize the images
		for(var i=0; i<this._images.length; i++){
			var img = this._images[i]
			img.position.x = self.geometry.x //+ (self.geometry.width / 2)
			img.position.y = self.geometry.y //+ (self.geometry.height / 2)
			
			// scale the image to fit the square,
			var perc = 1
			//  if the shape is funky then zoom in a bit more
			if (self._shapeData) perc = 0.6
			img.scale( (self.geometry.width / (306 * perc)) / (self.geometry.originalWidth / (306 * perc)) )
		}
		
	},
	setPalette: function( name ){
		if (this.availablePalettes[name] != undefined){
			this.palette = this.availablePalettes[name]
		}
	},
	setTitle: function( title ){
		this._creditText.content = title
	},
	setData: function( d ){
		// do something with the data here...
		var n = Math.floor( d.norm * (this.palette.length-1) )
		var col = this.palette[n]
		this._bg.fillColor = col
		this._valueText.content = d.disp
	},
	queueImagesAtURL: function( arr ){
		var self = this
	
		// filter out duplicate images from self._images here...
		for( var i=arr.length-1; i >= 0; i--){
			var url = arr[i]
			for( var j=0; j < self._loadedImageUrls.length; j++){
				if (url == self._loadedImageUrls[j]){
					arr.splice( i, 1 )
				}
			}
		}
		
		self._pendingImageUrls = arr
		self._imagesToLoad = arr.length
		
	},
	loadTile: function( imagesloaded_cb ){
		var self = this
		
		if (self._pendingImageUrls.length > 0){ 
			
			for( var i=0; i<self._pendingImageUrls.length; i++ ){
			
				// preload the images via HTML image object first... just to filter out the ones that won't load
				var preloadImage = new Image()
				preloadImage.onload = function(){
					var remoteImage = new paper.Raster( this.src )
					remoteImage.position.x = self.geometry.x + (self.geometry.width / 2)
					remoteImage.position.y = self.geometry.y + (self.geometry.height / 2)
					remoteImage.opacity = 0
					// scale the image to fit the square,
					var perc = 1
					//  if the shape is funky then zoom in a bit more
					if (self._shapeData) perc = 0.6
					remoteImage.scale( self.geometry.width / (306 * perc) )
					
					self._container.addChild( remoteImage )
					self._images.unshift( remoteImage )  // add to the beginning
					self._loadedImageUrls.unshift( this.src )
					self._imageLoaded( imagesloaded_cb, remoteImage, true )
				}
				preloadImage.onerror = function(){
					// the image couldn't load
					self._imageLoaded( imagesloaded_cb, null, false )
				}
				preloadImage.src = self._pendingImageUrls[i];
				
			}
		} else {
			self._imageLoaded( imagesloaded_cb )
		}
	},
	showNextImage: function( duration, delay ){
	
		//console.log("showNextImage",this._imagePointer,this._images);
		// bail if we don't have images yet!
		if (this._images.length == 0) return;
		// get pointer for this time
		this._imagePointer++
		if (this._imagePointer >= this._images.length) this._imagePointer = 0
		// get the next image to animate
		var img = this._images[ this._imagePointer ]
		// put the image in front of everything else
		img.bringToFront()
		//img.opacity = 1
		var self = this
		
		duration = duration / 2
		this._bg.bringToFront()
		this._createFadeInTween( this._bg, duration, delay, function(){
			
			img.bringToFront()
			
			self._createFadeInTween( img, duration, delay, function(){
				self._bg.opacity = 0
				for(var i=0;i<self._images.length;i++){
					if (i != self._imagePointer){
						self._images[i].opacity = 0
					}
				}
			})
		})
	},
	_imageLoaded: function(cb, img, success){
		// when an image loads this is called, once the number is 0 all images are loaded
		if (success == true && this._hasLoadedFirstImage == false){
			img.opacity = 1
			this._hasLoadedFirstImage = true
		}
		this._imagesToLoad--
		if (this._imagesToLoad <= 0){
			cb()
		}
	},
	_createFadeInTween: function( item, duration, delay, cb ){
		// generic function to handle fading in
		//item.opacity = 1
		//cb()
		
		item.opacity = 0
		var tween = new TWEEN.Tween({ opacity:0, element:item })
			.to({ opacity: 1 }, duration)
			.delay( delay )
			.easing( TWEEN.Easing.Quadratic.InOut )
			.onUpdate(function(){
				this.element.opacity = this.opacity
			})
		if (cb){
			tween.onComplete( function(){
				cb()
			})
		}
		tween.start()
		
	}
}


