
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
	
	
	var imgs = [
		"0a940b6299b111e3bedb1231ba1c5001_8.jpg",
		"0b9f21ec871e11e1989612313815112c_7.jpg",
		"0b818b40a91a11e2b1d222000a1fb859_7.jpg",
		"0bc221f06fbc11e3b4c6124d293a9c07_8.jpg",
		"0c3b67a0393f11e1abb01231381b65e3_7.jpg",
		"0c8a6422eb9a11e2bfdf22000aa80117_7.jpg",
		"0d61cf80714b11e2b93522000a1f96b2_7.jpg",
		"0d332d2e04b811e2b70422000a1e8867_7.jpg",
		"1e425b38cc2a11e181bd12313817987b_7.jpg",
		"3d5b29febf6a11e180c9123138016265_7.jpg",
		"5d3aaa52bf5d11e381b00e0f86072ad0_8.jpg",
		"06d6357a1dbe11e1abb01231381b65e3_7.jpg",
		"7b384bec9b6d11e181bd12313817987b_7.jpg",
		"8a7b01ce908e11e18cf91231380fd29b_7.jpg",
		"9dd5bf5a61f611e19896123138142014_7.jpg",
		"29f8fddeaa7d11e1af7612313813f8e8_7.jpg",
		"57e6c3528be711e1b9f1123138140926_7.jpg",
		"140c0b56d1d611e380ce0002c9e0f5d8_8.jpg",
		"337dd03a6ac411e1abb01231381b65e3_7.jpg",
		"0624a06459a811e180c9123138016265_7.jpg",
		"2113ac0277ef11e181bd12313817987b_7.jpg",
		"928593_1485382161723861_1459414985_n.jpg",
		"10349729_688991801137810_772831475_n.jpg",
		"10513997_247533482037401_1351512266_n.jpg",
		"10522242_344679629014567_846714450_n.jpg",
		"10724043_378243909000223_2026375210_n.jpg",
		"10802867_723970681021744_132432946_n.jpg",
		"10843847_1541123259467654_1440544410_n.jpg",
		"10932048_1390630847905709_2082568152_n.jpg",
		"ad8cd216d3e911e1be9812313804ece1_7.jpg",
		"b1008ec0643a11e180d51231380fcd7e_7.jpg",
		"ba6f1f20bb7011e192e91231381b3d7a_7.jpg",
		"bb3ae43c19c811e2864822000a9f09cf_7.jpg",
		"c3f828289b9711e1ab011231381052c0_7.jpg",
		"c57df87666ea11e1989612313815112c_7.jpg",
		"dbb75e1052a011e180c9123138016265_7.jpg",
		"dd9084181e8011e1abb01231381b65e3_7.jpg",
		"ec8276ca624111e180c9123138016265_7.jpg",
		"f30cdaa63e9411e1abb01231381b65e3_7.jpg",
		"fc83ae362d7b11e1abb01231381b65e3_7.jpg"
	]
	
	var indexes = []
	for(var i=0;i<imgs.length;i++){
		indexes.push(i);
	}
	
	
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
				
				var i_i = Math.round( Math.random() * (indexes.length-1) )
				var index_1 = indexes[ i_i ]
				var index_2 = (index_1 + 1) % imgs.length
				var index_3 = (index_2 + 1) % imgs.length
				var index_4 = (index_3 + 1) % imgs.length
				indexes.splice( i_i, 1 )
				var img1 = "img/" + imgs[ index_1 ]
				var img2 = "img/" + imgs[ index_2 ]
				var img3 = "img/" + imgs[ index_3 ]
				var img4 = "img/" + imgs[ index_4 ]
				
				ts.loadImagesAtURL( [ img1, img2, img3, img4 ], function(){
					//console.log( "loaded an image" )
					//ts.showNextImage( 1000, 1000 )
				} )
				
				//console.log("created", ts.geometry.tile_x, ts.geometry.tile_y )
				
				data.tilesquare = ts
				
			}
		}
	}
	
	//console.log( ldnmap )
	
	paper.view.update();
	
	animate();
	setInterval( animateNextImage, 3000 );
	//setTimeout( animateNextImage, 5000 )
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


function loadBitmap( url )
{
	var remoteImage = new paper.Raster( url );
	remoteImage.position.x = 470;
	remoteImage.position.y = 470;
	remoteImage.scale(0.65);
	
	remoteImage.onLoad = function(){
		paper.view.draw();
		console.log( thisCallToAction );
		callback(thisCallToAction.type);
	}

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
	
		for( var i=0; i<arr.length; i++ ){
			var remoteImage = new paper.Raster( arr[i] )
			remoteImage.position.x = this.geometry.x + (this.geometry.width / 2)
			remoteImage.position.y = this.geometry.y + (this.geometry.height / 2)
			remoteImage.scale( this.geometry.width / (640 * .6) )  // original size is 640, 620 is good to allow no margin
			
			remoteImage.opacity = 0
			
			this._imagesToLoad++
			this._container.addChild( remoteImage )
			this._images.push( remoteImage )
			var self = this;
			
			remoteImage.onLoad = function(){
				
				//paper.view.draw()
				//console.log( "loaded image!" )
				
				self._imageLoaded( imagesloaded_cb )
			}
		}
	},
	showNextImage: function( duration, delay ){
		// get the next image to animate
		var img = this._images[ this._imagePointer ]
		// put the image in front of everything else
		img.bringToFront()
		//img.opacity = 1
		var _bg = this._bg
		// animate the image fading in
		this._createFadeInTween( img, duration, delay, function(){
			_bg.opacity = 0
		})
		//
		// get pointer for next time
		this._imagePointer++
		if (this._imagePointer >= this._images.length) this._imagePointer = 0
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


