var express = require('express');
var router = express.Router();
var url = require('url');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  		host: 'localhost:9200',
  		log: 'trace'
});


/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('itemcollection');
    var categories=[];
    var tvs;
    collection.distinct("category",function(e,docs){
         categories = docs;
         collection.find({},{},function(e,docs){
             res.render('index', {
               "categories" : categories,
               "data": docs
             });
         });
         	
    });
    
});

router.get('/insert', function(req, res) {
  var db = req.db;
  var collection = db.get("itemcollection");
  collection.remove();
  /*=================TV======================*/
  collection.insert({
  	 "category":"TV",
     "name": "Samsung UN32EH4003 32-inch 720p 60Hz LED HDTV",
     "price":"379.99",
     "brand":"samsung",
     "size":"32",
     "color":"black",
     "rating":"4.5",
     "description":"With LED technology, the energy-efficient, Samsung Series 4 TV produces a brilliant, clear picture. The Dolby Digital Plus/Dolby Pulse is an advanced surround sound feature that optimizes the TV’s audio from connected devices. The Wide Color Enhancer Plus features lets you see picture with vibrant, natural-looking images.\
     Clear Motion Rate 60 Clear Motion Rate (CMR) was developed to accurately measure how well a LCD or LED TV can depict fast-moving images. LED TVs with a CMR of 60-120 can display action-packed movement with sharp detail and vivid contrast while eliminating image distortion.Wide Color Enhancer Plus\
     Wide Color Enhancer Plus allows you to witness the entire RGB spectrum brought to life on your screen to bring you exceptionally vibrant, yet natural-looking images faithful to the director’s original intent."
  });
  collection.insert({
  	 "category":"TV",
     "name": "Samsung UN32EH5300 32-Inch 1080p 60 Hz Smart LED HDTV",
     "price":"499.99",
     "brand":"samsung",
     "size":"32",
     "color":"black",
     "rating":"4",
     "description":"With this Smart HDTV, Smart Content provides new ways to explore and locate your favorite shows, movies, games, and more. A full web browser with WiFi built-in and innovative apps made for TV, along with Signature Services, enhances your enjoyment. AllShare Play allows you to stream content from other devices and enjoy it on the big screen. The Wide Color Enhancer Plus provides vibrant natural-looking images and it’s all in a sleek ultra slim design.\
      Never miss a moment with Samsung Smart TV. Watch your favorite movies while you browse the web or explore the Smart Hub. Find more content you love by searching for shows, movies, and videos across vudu, Hulu Plus, YouTube, and other digital content providers. Movies are handpicked for you through recommendations based on your viewing history and ratings. Access all your apps and download new ones such as Netflix, Facebook, YouTube, Hulu Plus, and Twitter! Browse the web while you watch movies and TV shows, and enjoy TV while you chat with friends and family online, all on one screen."
  });
  collection.insert({
  	 "category":"TV",
     "name": "Samsung UN40EH5300 40-Inch 1080p 60Hz LED HDTV, Black",
     "price":"799.99",
     "brand":"samsung",
     "size":"40",
     "color":"black",
     "rating":"4",
     "description":"With this Smart HDTV, Smart Content provides new ways to explore and locate your favorite shows, movies, games, and more. A full web browser with WiFi built-in and innovative apps made for TV, along with Signature Services, enhances your enjoyment. AllShare Play allows you to stream content from other devices and enjoy it on the big screen. The Wide Color Enhancer Plus provides vibrant natural-looking images and it’s all in a sleek ultra slim design.\
Never miss a moment with Samsung Smart TV. Watch your favorite movies while you browse the web or explore the Smart Hub. Find more content you love by searching for shows, movies, and videos across vudu, Hulu Plus, YouTube, and other digital content providers. Movies are handpicked for you through recommendations based on your viewing history and ratings. Access all your apps and download new ones such as Netflix, Facebook, YouTube, Hulu Plus, and Twitter! Browse the web while you watch movies and TV shows, and enjoy TV while you chat with friends and family online, all on one screen."
  });
  collection.insert({
  	 "category":"TV",
     "name": "LG Electronics 39LN5300 39-Inch 1080p 60Hz LED TV",
     "price":"479.99",
     "brand":"LG",
     "size":"39",
     "color":"black",
     "backlight": "LED",
     "rating":"4.5",
     "description":"LG's LN5300 delivers stunning picture quality. With LED backlighting you get amazing brightness, clarity and color detail. And, Full HD 1080p has almost double th pixel resolution of standard HD so you see detail like never before."
  });
  collection.insert({
  	 "category":"TV",
     "name": "VIZIO E420i-B0 42-Inch 1080p 120Hz Smart LED HDTV",
     "price":"428.99",
     "brand":"VIZIO",
     "size":"42",
     "color":"black",
     "rating":"4",
     "description":"Introducing the all-new 2014 E-Series 42\" (42.02\" diag.) Full-Array LED Smart TV with an ultra-narrow 10mm frame, crystal-clear LED-lit picture, and a faster, easier-to-use Smart TV experience. With built-in Wi-Fi included, the E-Series connects you to the latest hit movies, TV shows, and music from premium apps like Netflix, VUDU, Hulu Plus, YouTube, Pandora and more. And not only is it smart, this TV is packed with the latest technology - like Full-Array LED for superior light uniformity, and Active LED Zones x6 for deeper black levels with a superior 2 million to 1 contrast. Full HD 1080p and 120Hz effective refresh rate makes them perfect for sports and fast action scenes. VIZIO E-Series: Picture-Perfect, Simply Smart."
  });
  collection.insert({
  	 "category":"TV",
     "name": "VIZIO E241i-B1 24-Inch 1080p 60Hz Smart LED HDTV",
     "price":"189.99",
     "brand":"VIZIO",
     "size":"24",
     "color":"black",
     "rating":"4",
     "description":"Introducing the all-new 2014 E-Series 24” (23.60” diag.) Razor LED Smart TV , vibrant LED-lit picture, and a faster, easier-to-use Smart TV experience. With built-in Wi-Fi included, the E-Series connects you to the latest hit movies, TV shows, and music from premium apps like Netflix, Amazon Instant Video, iHeartRadio , VUDU, HuluPlus, YouTube, Pandora and more. And not only is it smart, this TV is packed with the latest technology- like Razor LED for a brilliant picture in an ultra-thin design and Full HD 1080p for crystal-clear high definition resolution. VIZIO E-Series: Picture-Perfect, Simply Smart."
  });
  collection.insert({
  	 "category":"TV",
     "name": "Samsung UN28H4000 28-Inch 720p 60Hz LED TV",
     "price":"289.99",
     "brand":"samsung",
     "size":"28",
     "color":"black",
     "rating":"4",
     "description":"HDMI Inputs: 2 Refresh Rate: 60Hz (Native); Clear Motion Rate 120 (Effective) TV without stand (Width x Height x Depth): 25.3'' x 15.6'' x 2.5'', TV with stand (Width x Height x Depth): 25.3'' x 17.1'' x 6.4''"
  });
  collection.insert({
  	 "category":"TV",
     "name": "Samsung UN75H6350 75-Inch 1080p 120Hz Smart LED TV",
     "price":"4289.99",
     "brand":"samsung",
     "size":"75",
     "rating":"4",
     "description":"With an upgraded Smart Hub, finding what you’re looking for is easier and more intuitive than ever. You can even ask for suggestions using S-Recommendation and share content to and from your smartphone or tablet.\
Experience vivid color and dramatic contrast with Samsung LED TVs. Your favorite movies, sports, and shows will be more vibrant, dynamic, and detailed with Micro Dimming technology, which makes your whites whiter and your blacks deeper. With the Samsung H6400, you’ll discover more of what you love and enjoy it all in stunning picture quality."
  });
  collection.insert({
  	 "category":"TV",
     "name": "Toshiba 50L2400U 50-Inch 1080p 120Hz LED HDTV",
     "price":"689.99",
     "brand":"toshiba",
     "size":"50",
     "rating":"4.5",
     "description":"The L2400U Series LED HD TV series blends a modern design, elegant gun metal finish and a sleek stand, with incredible quality and value. The slim L2400U TV features an energy-efficient LED backlight. Equipped with 1080p Full HD resolution in all sizes, the L2400U series delivers a rich and vibrant picture with vivid brightness and sharp contrast. Clear Scan 120Hz technology doubles the refresh rate for clearer fast-motion video-perfect for delivering great action scenes for sports lovers and movie fans. The L2400U series is available in a variety of popular sizes including 32”, 40” and 50”-with technologies geared for gaming and entertainment, plus DTS Tru Surround for immersive surround sound."
  });
  collection.insert({
  	 "category":"TV",
     "name": "TCL LE50FHDF3010TA 50-Inch 1080p 120Hz LED TV",
     "price":"551.99",
     "brand":"TCL",
     "size":"50",
     "rating":"3.5",
     "description":"Enjoy The Creative Life with the TCL 50\" 1080p 120Hz CMI edge-lit LED HDTV. It delivers a complete home theater experience with its large display, premium picture quality and sophisticated slim frame design. Whether wall mounted like a piece of art or sitting on its elegant glass base, this flat screen LED HDTV features Full High Definition 1080p resolution, fast 120Hz CMI refresh rate, a dynamic contrast ratio of 5,000,000:1, three HDMI inputs, TCL True Color for a broadened color spectrum for more natural color, and TCL Smart Volume for level sound when surfing channels and during commercials . This MHL (Mobile High-Definition Link) enabled HDTV allows you to effortlessly connect your smartphone or tablet to the TV to display content and simultaneously charge the device. Exceeding ENERGY STAR 6.0 Guidelines, this TV's low energy usage ensures that the planet and your wallet will be better off. Color Your World with superior performance and design backed by a 1 year limited manufacturer\'s warranty."
  });
  /*=================Refrigerator======================*/
  collection.insert({
  	 "category":"Refrigerator",
     "name": "SPT Energy Star 3.2 cu.ft. Double Door Refrigerator in Stainless Steel",
     "price":"253.00",
     "brand":"SPT",
     "size":"18.8L x 19.5W x 33.6H in",
     "rating":"4",
     "description":"Flush back, compact design is ideal for college dorm room or office. Reversible doors offer versatility. Features separate freezer and fridge compartment, adjustable thermostat and fresh food section."
  });
  collection.insert({
  	 "category":"Refrigerator",
     "name": "SPT Energy Star 3.2 cu.ft. Double Door Refrigerator in Stainless Steel",
     "price":"253.00",
     "brand":"SPT",
     "size":"18.8L x 19.5W x 33.6H in",
     "rating":"4",
     "description":"From the Manufacturer With the season\'s big sporting events just around the corner, you'll need to be ready for those friends and family who stop by to visit your flat screen T.V. Whether it is the Olympics, football or hockey finals that keep those guests ever-present, Danby's DBC120BLS beverage center will be the perfect teammate. With a 120 can storage capacity you will be sure to never be short on ice cold beverages. The tempered glass door and stainless steel trim add an elegant touch to any decor.\
      Product Description The Danby DBC120BLS 3.3 Cu. Ft. Beverage Center is the perfect teammate with those big sporting events. You need to be ready for the friends and family who stop by to visit your flat screen TV. Whether it's the Olympics, football or hockey finals that keep those guests ever-present, this beverage center will be a great asset. With a 120 can storage capacity you will be sure to never be short on ice cold beverages. The tempered glass door and stainless steel trim add an elegant touch to any decor.Package Content:3.3 cu. ft. beverage centermanualwarrantyTempered glass door with stainless steel trimRecessed side mount door handleIntegrated lock with keyInterior light illuminates compartment when door is openedColor Black with Stainless SteelHeight 33.70Width 17.87Depth 19.75Weight 68.90Color Black/StainlessOperating SystemBatteries IncludedBatteries RequiredNumber of BatteriesBattery TypeLanguage English, Spanish, FrenchAssembly Required"
  });
  /*=================Nail Polish======================*/
  collection.insert({
  	 "category":"Nail_Polish",
     "name": "SHANY Cosmetics The Cosmopolitan Nail Polish Set (24 Colors Premium Quality and Quick Dry), 40 Fluid Ounce",
     "price":"29.95",
     "brand":"SHANY Cosmetics",
     "shipping weight":"3.5 pounds",
     "rating":"4",
     "description":"This 24 piece nail polish set has a wide variety of colors to choose from. Use separately or in layers to create different colors. Works great with the Shany 12 piece cracked nail polish set and or the 24 piece nail art set. The possibilities are endless with so many hues you cannot go wrong with this set that contains lime green (pearl), neon green, yellow (matte), neon pink, fuchsia (pearl), neon purple, red (matte), neon yellow, white (matte), black (matte), silver (glitter), gold (glitter), pink (glitter), blue (glitter), green (glitter), dark grey (matte), pink (matte), sky blue (matte), lavender (matte), brick (matte), navy (pearl), forest green (matte), orange (matte), purple (pearl)."
  });
  collection.insert({
  	 "category":"Nail_Polish",
     "name": "China Glaze Nail Polish, Concrete Catwalk, 0.5 Fluid Ounce",
     "price":"5.55",
     "brand":"China Glaze",
     "shipping weight":"0.3 ounces",
     "rating":"4.5",
     "description":"A dark steel grey and blue creme. A very slate colored polish with lots of shine. Long-wearing nail lacquer. Flexible and will not chip. Non-thickening formula no thinner required."
  });
  res.render('insert', { title: 'Hello, World' });
});




/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('itemcollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/search', function(req, res) {
	

    var url_parts = url.parse(req.url, true);
	var searchText =url_parts.query['searchText'];
	
    
    client.search({
    	index:"mongoindex",
    	body:{
    		query:{
    			"query_string":{
    				"query": searchText
    			
    			}
    		}
    	}
    	},function(error,response){
    		res.render("search_result",{
				"data": response.hits.hits,
				"total_items": response.hits.total
			});
    	 
    });
    
});
module.exports = router;
