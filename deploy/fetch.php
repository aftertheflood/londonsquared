<?php

if (php_sapi_name() != "cli") {
	echo("nope\n");
	return;
} else {
	echo("running IG cache\n");
}

// will fetch IG data here...

$already_used_urls = array();

$ldnmap_pointer = 0;
$output = array();
	
	// Lat Lng from Wikipedia http://en.wikipedia.org/wiki/List_of_London_boroughs
	
	$ldnmap = array();
	
	$ldnmap[] = array( key=> "Enf", lat=> 51.6538, lng=> 0.0799 ); // Enfield W
	
	$ldnmap[] = array( key=> "Hrw", lat=> 51.5898, lng=> -0.3346 ); // Harrow W
	$ldnmap[] = array( key=> "Brn", lat=> 51.5588, lng=> -0.2817 ); // Brent W
	$ldnmap[] = array( key=> "Hgy", lat=> 51.6000, lng=> -0.1119 ); // Haringay W
	$ldnmap[] = array( key=> "Wth", lat=> 51.5588, lng=> -0.2817 ); // Waltham Forest W
	
	$ldnmap[] = array( key=> "Hdn", lat=> 51.5441, lng=> -0.4760 ); // Hillingdon W
	$ldnmap[] = array( key=> "Elg", lat=> 51.5130, lng=> -0.3089 ); // Ealing W
	$ldnmap[] = array( key=> "Brt", lat=> 51.5588, lng=> -0.2817 ); // Brent W
	$ldnmap[] = array( key=> "Cmd", lat=> 51.5290, lng=> -0.1255 ); // Camden W
	$ldnmap[] = array( key=> "Isl", lat=> 51.5416, lng=> -0.1022 ); // Islington W
	$ldnmap[] = array( key=> "Hck", lat=> 51.5450, lng=> -0.0553 ); // Hackney W
	$ldnmap[] = array( key=> "Rdb", lat=> 51.5590, lng=> 0.0741 ); // Redbridge °E
	$ldnmap[] = array( key=> "Hvg", lat=> 51.5812, lng=> 0.1837 ); // Havering °E
	
	$ldnmap[] = array( key=> "Hns", lat=> 51.4746, lng=> -0.3680 ); // Hounslow °N °W
	$ldnmap[] = array( key=> "Hms", lat=> 51.4927, lng=> -0.2339 ); // Hammersmith & Fulham °N °W
	$ldnmap[] = array( key=> "Kns", lat=> 51.5020, lng=> -0.1947 ); // Kensington & Chelsea °N °W
	$ldnmap[] = array( key=> "Wst", lat=> 51.4973, lng=> -0.1372 ); // Westminster °N °W
	$ldnmap[] = array( key=> "Cty", lat=> 51.5155, lng=> -0.0922 ); // City °N °W
	$ldnmap[] = array( key=> "Tow", lat=> 51.5099, lng=> -0.0059 ); // Tower Hamlets °N °W
	$ldnmap[] = array( key=> "Nwm", lat=> 51.5077, lng=> 0.0469 ); // Newham °N °E
	$ldnmap[] = array( key=> "Bar", lat=> 51.6252, lng=> -0.1517 ); // Barnet °N °W
	
	$ldnmap[] = array( key=> "Rch", lat=> 51.4479, lng=> -0.3260 ); // Richmond °N °W
	$ldnmap[] = array( key=> "Wns", lat=> 51.4567, lng=> -0.1910 ); // Wandsworth °N °W
	$ldnmap[] = array( key=> "Lam", lat=> 51.4607, lng=> -0.1163 ); // Lambeth °N °W
	$ldnmap[] = array( key=> "Swr", lat=> 51.5035, lng=> -0.0804 ); // Southwark °N °W
	$ldnmap[] = array( key=> "Lsh", lat=> 51.4452, lng=> -0.0209 ); // Lewisham °N °W
	$ldnmap[] = array( key=> "Grn", lat=> 51.4892, lng=> 0.0648 ); // Greenwich °N °E
	$ldnmap[] = array( key=> "Bxl", lat=> 51.4549, lng=> 0.1505 ); // Bexley °N °E
	
	$ldnmap[] = array( key=> "Kng", lat=> 51.4085, lng=> -0.3064 ); // Kingston upon Thames °N °W
	$ldnmap[] = array( key=> "Mrt", lat=> 51.4014, lng=> -0.1958 ); // Merton °N °W
	$ldnmap[] = array( key=> "Crd", lat=> 51.3714, lng=> -0.0977 ); // Croydon °N °W
	$ldnmap[] = array( key=> "Brm", lat=> 51.4039, lng=> 0.0198 ); // Bromley °N °E
	
	$ldnmap[] = array( key=> "Stn", lat=> 51.3618, lng=> -0.1945 ); // Sutton °N °W
	
	
$t_start = time();
	
for( $i=0; $i<count($ldnmap); $i++ ){
	grabFeedFromInstagram( $i );
}


// turn the array into JSON	
$json_str = json_encode( array( data => $output ) );
//echo( $json_str . "\n");

// save to a local file
$path = __DIR__;
$jsonfile = $path ."/londonsquared.json";

// save data to a file
file_put_contents( $jsonfile , $json_str );


$t_end = time();
echo("completed in ". ($t_end-$t_start) . " seconds\n");

	
function grabFeedFromInstagram( $i ){
	global $ldnmap, $output, $already_used_urls;
	
	$max = 5;
	
	$map = $ldnmap[ $i ];	
	//var_dump( $map );
	$url = "https://api.instagram.com/v1/media/search?lat={$map['lat']}&lng={$map['lng']}&distance=100&client_id=365a40f43cd5419eb56a06eeb6677ce5";
	
	// echo $url;
	
	$str = file_get_contents( $url );
	$ob = json_decode( $str );
	//var_dump( $ob );
	$arr = $ob->data;
	$ret = array();
	
	$added = 0;
	
	for( $i=0; $i<count($arr); $i++ ){
		if ($added < $max){
			$item = $arr[$i];
			$image_url = $item->images->low_resolution->url;
			if (!in_array( $image_url, $already_used_urls )){ // stop allowing repeats!
				$ret[] = $image_url;
				$already_used_urls[] = $image_url;
				$added++;
			}
		}
	}
	//var_dump( $ret );
	
	echo( $map["key"] . " (" . count($ret) . ")\n" );
	
	$output[] = array( key=> $map["key"], bg=> $ret );
}

	/*
	
	https://api.instagram.com/v1/media/search?lat=51.4675&lng=0.3617&distance=5000&client_id=365a40f43cd5419eb56a06eeb6677ce5
	
	{
    "meta": {
        "code": 200
    },
    "data": [
        {
            "attribution": null,
            "tags": [],
            "location": {
                "latitude": 51.477715464,
                "longitude": 0.334103147
            },
            "comments": {
                "count": 0,
                "data": []
            },
            "filter": "Normal",
            "created_time": "1426287238",
            "link": "https://instagram.com/p/0L3QNfBXGp/",
            "likes": {
                "count": 0,
                "data": []
            },
            "images": {
                "low_resolution": {
                    "url": "http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/11005053_1410592672581445_1344427413_n.jpg",
                    "width": 306,
                    "height": 306
                },
                "thumbnail": {
                    "url": "http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11005053_1410592672581445_1344427413_n.jpg",
                    "width": 150,
                    "height": 150
                },
                "standard_resolution": {
                    "url": "http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11005053_1410592672581445_1344427413_n.jpg",
                    "width": 640,
                    "height": 640
                }
            },
            "users_in_photo": [],
            "caption": {
                "created_time": "1426287238",
                "text": "Follow @lawrinanita 💃",
                "from": {
                    "username": "rosa_de_fiore",
                    "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/1962922_835009926542801_1843049726_a.jpg",
                    "id": "1524185347",
                    "full_name": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀3ND"
                },
                "id": "940087954171588927"
            },
            "type": "image",
            "id": "940087953785713065_1524185347",
            "user": {
                "username": "rosa_de_fiore",
                "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/1962922_835009926542801_1843049726_a.jpg",
                "id": "1524185347",
                "full_name": "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀3ND"
            }
        },
        
        */
	
	
	
	