
var ldnmap

function londonsquared_init()
{
	// generate the layout data for the map
	ldnmap = []
	for(i=0;i<8;i++){ ldnmap.push([]) }
	//
	ldnmap[0][4] = { name:"Enf" }
	//
	ldnmap[1][2] = { name:"Hrw" }
	ldnmap[1][3] = { name:"Brn" }
	ldnmap[1][4] = { name:"Hgy" }
	ldnmap[1][5] = { name:"Wth" }
	//
	ldnmap[2][0] = { name:"Hdn" }
	ldnmap[2][1] = { name:"Elg" }
	ldnmap[2][2] = { name:"Brt" }
	ldnmap[2][3] = { name:"Cmd" }
	ldnmap[2][4] = { name:"Isl" }
	ldnmap[2][5] = { name:"Hck" }
	ldnmap[2][6] = { name:"Rdb" }
	ldnmap[2][7] = { name:"Hvg" }
	//
	ldnmap[3][0] = { name:"Hns" }
	ldnmap[3][1] = { name:"Hms" }
	ldnmap[3][2] = { name:"Kns" }
	ldnmap[3][3] = { name:"Wst", shape:"M18.7,124.4c5.4,2.4,10.5,4.6,18.3,4.6c10.4,0,18.3-4.4,26.5-9c8.8-4.9,17.9-10,30.5-10c2.9,0,5.5,0.2,8,0.5V17H0v102.1C8,119.6,13.4,122,18.7,124.4z" }
	ldnmap[3][4] = { name:"Cty", shape:"M115,112l0.2,0l84.3,12c4.5,0.5,8.6,0.8,12.5,0.9V17H110v94.5C111.6,111.7,113.2,111.9,115,112z" }
	ldnmap[3][5] = { name:"Tow", shape:"M235.5,121.3c4.5-1.8,8-5.2,11.3-8.6c4.9-4.9,10.5-10.5,19.6-9.7c12.8,1.2,14,17.7,14.6,25.7c0.3,4,1.7,7.2,4.1,9.2c2.1,1.8,5,2.5,8.5,2.1c5.9-0.6,9.2-2.9,8.4-12.7l0-0.6c-0.5-6-1.5-18.5,10.6-19.7c3.5-0.3,6.5,0.2,9.4,1.4V17H220v107.7C225.5,124.3,230.5,123.3,235.5,121.3z" }
	ldnmap[3][6] = { name:"Nwm", shape:"M332.4,114.4c8.2,5.6,18.5,12.6,38.6,12.6c12.6,0,21.8-3.6,30.7-7.1c7.7-3,14.9-5.9,23.3-5.9c2.5,0,4.8,0.1,7,0.3V17H330v95.8C330.8,113.3,331.6,113.9,332.4,114.4z" }
	ldnmap[3][7] = { name:"Bar", shape:"M440,17v98.3c2.4,0.4,4.6,0.9,6.9,1.3c5.7,1.2,11.1,2.3,18.1,2.3h77V17H440z" }
	//
	ldnmap[4][1] = { name:"Rch" }
	ldnmap[4][2] = { name:"Wns" }
	ldnmap[4][3] = { name:"Lam", shape:"M664,8c-10.5,0-18.3,4.4-26.6,9c-8.8,4.9-17.9,10-30.4,10c-9.5,0-15.6-2.7-21.5-5.3c-4.7-2.1-9.2-4.1-15.5-4.6V119h102V8.5C669.5,8.2,666.9,8,664,8z" }
	ldnmap[4][4] = { name:"Swr", shape:"M768.6,22l-0.2,0l-84.3-12c-1.5-0.1-2.8-0.3-4.2-0.4V119h102V22.9C777.7,22.8,773.3,22.5,768.6,22z" }
	ldnmap[4][5] = { name:"Lsh", shape:"M883.4,5c-3.2,0.3-4.2,2-3.5,11.1l0.1,0.6c1,12.9-4.2,20.1-15.6,21.3c-0.9,0.1-1.7,0.1-2.6,0.1c-4.6,0-8.7-1.4-11.9-4.1c-4-3.4-6.5-8.6-6.9-14.7c-0.6-8.8-2-17.8-7.4-18.3c-5.1-0.5-8.2,2.4-13.2,7.4c-3.7,3.7-7.9,7.9-14,10.4c-6,2.4-12,3.6-18.5,4V119h102V7.2C889.1,5.6,886.4,4.7,883.4,5z" }
	ldnmap[4][6] = { name:"Grn", shape:"M995,12c-6.9,0-13.1,2.5-20.3,5.3c-9.1,3.6-19.5,7.7-33.7,7.7c-20.8,0-32.5-6.9-41-12.6V119h102V12.3C999.8,12.1,997.5,12,995,12z" }
	ldnmap[4][7] = { name:"Bxl", shape:"M1015.2,14.5c-1.7-0.4-3.4-0.7-5.2-1V119h102V17h-77C1027.2,17,1021.1,15.7,1015.2,14.5z" }
	//
	ldnmap[5][2] = { name:"Kng" }
	ldnmap[5][3] = { name:"Mrt" }
	ldnmap[5][4] = { name:"Crd" }
	ldnmap[5][5] = { name:"Brm" }
	//
	ldnmap[6][3] = { name:"Stn" }
	
	
	// work out sizes
	var scrn_wid = paper.view.size.width
	var pieces = 8
	var margin_amnt = .5
	var wid = scrn_wid / (pieces+(margin_amnt))
	var wid_nomargin = scrn_wid / pieces
	var margin = (wid_nomargin - wid)
	var hei = wid
	
	var geometry = {
		tile_width: wid,
		tile_height: hei,
		tile_margin: margin
	};
	
	// squares in original design are 102 x 102
	// so work out the size multiplier for the river shapes
	// var shape_mult = wid / 102
	
	// store the square size as it's always the same
	var size = new paper.Size( wid, hei )
	
	var tween_inc = 0;
	
	// loop through and generate the tiles
	for(var y=0;y<ldnmap.length;y++){
		var maprow = ldnmap[y];
		for(var x=0;x<maprow.length;x++){
			if (maprow[x]){
			
				var data = maprow[x]
				
				var ts = new TileSquare( x, y, geometry, data )
				ts.appear( 1000, 150 * ( x + y ) )
				
				data.tilesquare = ts
				
			}
		}
	}
	
	//console.log( ldnmap )
	
	paper.view.update();
	
	animate();
	setInterval( animateNextImage, 3000 );
	//setTimeout( animateNextImage, 5000 )
	
	loadRemoteData( "data/londonsquared.json" );
}

function animateNextImage(){
	
	for(var y=0;y<ldnmap.length;y++){
		var maprow = ldnmap[y];
		for(var x=0;x<maprow.length;x++){
			if (maprow[x]){
			
				var data = maprow[x]
				var ts = data.tilesquare
				//console.log( x, y, ">", ts.geometry.tile_x, ts.geometry.tile_y )
				ts.showNextImage( 1000, 150 * ( x + y ) )
			}
		}
	}
	//console.log("animateNextImage",x,y)
}

function animate( time ) {

	requestAnimationFrame( animate );

	TWEEN.update( time );
	paper.view.update();
}

function update(){
	
}

function loadRemoteData(url){
	var req = new XMLHttpRequest(); // a new request
	req.onreadystatechange=function()
	{
		if (req.readyState==4)
		{
			if (req.status==200 || req.status == 0)
			{
				var data = JSON.parse( req.responseText );
				//console.log( data.data );
				console.log( ldnmap );
				console.log( "----" );
				for( var i=0; i<data.data.length; i++ ){
					var key = data.data[i].key;
					var found = false
					for(var y=0; y<ldnmap.length; y++ ){
						var maprow = ldnmap[y];
						for(var x=0; x<maprow.length; x++ ){
							var ob = maprow[x]
							// check it's valid & is the same key
							if (ob && ob.name == key ){
								// console.log( "loading ",data.data[i].bg );
								maprow[x].tilesquare.loadImagesAtURL( data.data[i].bg, function(){} )
								found = true
							}
						}
						
					}
					if (!found) console.log( "didn't find entry for ",key );
				}
				
			} else {
				console.log("got an error loading data", req.status );
			}
		}
	}
	console.log("loading data from",url, ldnmap);
	req.open("GET",url,true);
	req.send(null);
}


function TileSquare( x, y, geom, data ){
	this.init()
	this.geometry.width = geom.tile_width
	this.geometry.height = geom.tile_height
	this.geometry.margin = geom.tile_margin
	this.geometry.tile_x = x
	this.geometry.tile_y = y
	if (data.shape != undefined){
		this._shapeData = data.shape
	}
	this._container = new paper.Group()
	this.render()
}
TileSquare.prototype = {
	constructor: TileSquare,
	init: function(){
		this._shapeData = null
		this._container = null
		this._bg = null
		this._imagesToLoad = 0
		this._images = []
		this._imagePointer = 0
		this.geometry = { tile_x: 0,
				tile_y: 0,
				x: 0,
				y: 0,
				width: 10,
				height: 10,
				margin: 1,
				yoff: 0,
				shape_mult: 0 }
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
		
		re.fillColor = '#000'
		this._container.addChild( re )
		
		// turn on masking
		this._container.clipped = true
		
		
		this._bg = new paper.Path.Rectangle(new paper.Point(this.geometry.x, this.geometry.y), new paper.Size(this.geometry.width,this.geometry.height*2))
		this._bg.fillColor = "#000"
		this._container.addChild( this._bg )
		
		
	},
	appear: function( duration, delay ){
		this._createFadeInTween( this._container, duration, delay )
	
	},
	loadImagesAtURL: function( arr, imagesloaded_cb ){
		var self = this
		self._imagesToLoad = arr.length
		
		for( var i=0; i<arr.length; i++ ){
		
			// preload the images via HTML image object first... just to filter out the ones that won't load
			var preloadImage = new Image()
			preloadImage.onload = function(){
				var remoteImage = new paper.Raster( this.src )
				remoteImage.position.x = self.geometry.x + (self.geometry.width / 2)
				remoteImage.position.y = self.geometry.y + (self.geometry.height / 2)
				remoteImage.scale( self.geometry.width / (306 * .6) )  // original size is 640, 620 is good to allow no margin
				
				remoteImage.opacity = 0
				
				self._container.addChild( remoteImage )
				self._images.push( remoteImage )
				self._imageLoaded( imagesloaded_cb )
			}
			preloadImage.onerror = function(){
				console.log( "errored...")
				self._imageLoaded( imagesloaded_cb )
			}
			preloadImage.src = arr[i];
			
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
		// animate the image fading in
		this._createFadeInTween( img, duration, delay, function(){
			self._bg.opacity = 0
			for(var i=0;i<self._images.length;i++){
				if (i != self._imagePointer){
					self._images[i].opacity = 0
				}
			}
		})
	},
	_imageLoaded: function(cb){
		// when an image loads this is called, once the number is 0 all images are loaded
		this._imagesToLoad--
		if (this._imagesToLoad <= 0){
			cb()
		}
	},
	_createFadeInTween: function( item, duration, delay, cb ){
		// generic function to handle fading in
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


