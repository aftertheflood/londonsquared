function doResize()
{			
	var canvas = game_canvas;
	canvas=document.getElementById( "GameCanvas" );
	var screenHeight = window.innerHeight;
	var screenWidth = window.innerWidth;
	if (screenWidth*3/4 < screenHeight)
	{
		screenHeight = Math.floor(screenWidth*3/4);
	}
	else
	{
		screenWidth = Math.floor(screenHeight*4/3);
	}
	canvas.style.height = screenHeight;
	canvas.style.width = screenWidth;
	canvas.style.marginLeft = (window.innerWidth-screenWidth)/2;
	canvas.style.marginTop = Math.floor((window.innerHeight-screenHeight)/2);
}

window.onload=function( e ){

	game_canvas=document.getElementById( "GameCanvas" );
	game_console=document.getElementById( "GameConsole" );
	
	if( RESIZEABLE_CANVAS ){
		window.onresize=function() { doResize(); };
	}
		
	doResize();
		
	try{
		bbInit();
		bbMain();
	}catch( ex ){
		if( ex ) alert( ex );
		return;
	}
	
	if( game_runner!=null ){
		game_runner();
	}
}