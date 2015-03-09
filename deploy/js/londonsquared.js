

function londonsquared_init()
{
	// generate the layout data for the map
	
	var ldnmap = [];
	for(i=0;i<8;i++){ ldnmap.push([]) }
	
	ldnmap[0][4] = {name:"Enf"}
	//
	ldnmap[1][2] = {name:"Hrw"}
	ldnmap[1][3] = {name:"Brn"}
	ldnmap[1][4] = {name:"Hgy"}
	ldnmap[1][5] = {name:"Wth"}
	//
	ldnmap[2][0] = {name:"Hdn"}
	ldnmap[2][1] = {name:"Elg"}
	ldnmap[2][2] = {name:"Brt"}
	ldnmap[2][3] = {name:"Cmd"}
	ldnmap[2][4] = {name:"Isl"}
	ldnmap[2][5] = {name:"Hck"}
	ldnmap[2][6] = {name:"Rdb"}
	ldnmap[2][7] = {name:"Hvg"}
	//
	ldnmap[3][0] = {name:"Hns"}
	ldnmap[3][1] = {name:"Hms"}
	ldnmap[3][2] = {name:"Kns"}
	ldnmap[3][3] = {name:"Wst"}
	ldnmap[3][4] = {name:"Cty"}
	ldnmap[3][5] = {name:"Tow"}
	ldnmap[3][6] = {name:"Nwm"}
	ldnmap[3][7] = {name:"Bar"}
	//
	ldnmap[4][1] = {name:"Rch"}
	ldnmap[4][2] = {name:"Wns"}
	ldnmap[4][3] = {name:"Lam"}
	ldnmap[4][4] = {name:"Swr"}
	ldnmap[4][5] = {name:"Lsh"}
	ldnmap[4][6] = {name:"Grn"}
	ldnmap[4][7] = {name:"Bxl"}
	//
	ldnmap[5][2] = {name:"Kng"}
	ldnmap[5][3] = {name:"Mrt"}
	ldnmap[5][4] = {name:"Crd"}
	ldnmap[5][5] = {name:"Brm"}
	//
	ldnmap[6][3] = {name:"Stn"}
	
	// work out sizes
	var scrn_wid = paper.view.size.width
	
	var pieces = 8
	var margin_amnt = .5
	
	var wid = scrn_wid / (pieces+(margin_amnt))
	var wid_nomargin = scrn_wid / pieces
	var margin = (wid_nomargin - wid)
	var hei = wid
	
	// store the square size as it's always the same
	var size = new paper.Size( wid, hei )
	
	// loop through and generate the tiles
	for(var y=0;y<ldnmap.length;y++){
		var maprow = ldnmap[y];
		for(var x=0;x<maprow.length;x++){
			if (maprow[x]){
				var xp = (margin/2) + (x * (wid + margin))
				var yp = (margin/2) + (y * (hei + margin))
				var re = new paper.Path.Rectangle(new paper.Point(xp, yp), size)
				re.fillColor = '#ffffff'
				//re.strokeColor = '#ededed'
				//re.strokeWidth = 1
				
				//var
			}
		}
	}
	
	paper.view.update();
	
}