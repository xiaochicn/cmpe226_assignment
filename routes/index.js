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
     "description":"With LED technology, the energy-efficient, Samsung Series 4 TV produces a brilliant, clear picture. The Dolby Digital Plus/Dolby Pulse is an advanced surround sound feature that optimizes the TV‚Äôs audio from connected devices. The Wide Color Enhancer Plus features lets you see picture with vibrant, natural-looking images.\
     Clear Motion Rate 60 Clear Motion Rate (CMR) was developed to accurately measure how well a LCD or LED TV can depict fast-moving images. LED TVs with a CMR of 60-120 can display action-packed movement with sharp detail and vivid contrast while eliminating image distortion.Wide Color Enhancer Plus\
     Wide Color Enhancer Plus allows you to witness the entire RGB spectrum brought to life on your screen to bring you exceptionally vibrant, yet natural-looking images faithful to the director‚Äôs original intent."
  });
  collection.insert({
  	 "category":"TV",
     "name": "Samsung UN32EH5300 32-Inch 1080p 60 Hz Smart LED HDTV",
     "price":"499.99",
     "brand":"samsung",
     "size":"32",
     "color":"black",
     "rating":"4",
     "description":"With this Smart HDTV, Smart Content provides new ways to explore and locate your favorite shows, movies, games, and more. A full web browser with WiFi built-in and innovative apps made for TV, along with Signature Services, enhances your enjoyment. AllShare Play allows you to stream content from other devices and enjoy it on the big screen. The Wide Color Enhancer Plus provides vibrant natural-looking images and it‚Äôs all in a sleek ultra slim design.\
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
     "description":"With this Smart HDTV, Smart Content provides new ways to explore and locate your favorite shows, movies, games, and more. A full web browser with WiFi built-in and innovative apps made for TV, along with Signature Services, enhances your enjoyment. AllShare Play allows you to stream content from other devices and enjoy it on the big screen. The Wide Color Enhancer Plus provides vibrant natural-looking images and it‚Äôs all in a sleek ultra slim design.\
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
     "description":"Introducing the all-new 2014 E-Series 24‚Äù (23.60‚Äù diag.) Razor LED Smart TV , vibrant LED-lit picture, and a faster, easier-to-use Smart TV experience. With built-in Wi-Fi included, the E-Series connects you to the latest hit movies, TV shows, and music from premium apps like Netflix, Amazon Instant Video, iHeartRadio , VUDU, HuluPlus, YouTube, Pandora and more. And not only is it smart, this TV is packed with the latest technology- like Razor LED for a brilliant picture in an ultra-thin design and Full HD 1080p for crystal-clear high definition resolution. VIZIO E-Series: Picture-Perfect, Simply Smart."
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
     "description":"With an upgraded Smart Hub, finding what you‚Äôre looking for is easier and more intuitive than ever. You can even ask for suggestions using S-Recommendation and share content to and from your smartphone or tablet.\
Experience vivid color and dramatic contrast with Samsung LED TVs. Your favorite movies, sports, and shows will be more vibrant, dynamic, and detailed with Micro Dimming technology, which makes your whites whiter and your blacks deeper. With the Samsung H6400, you‚Äôll discover more of what you love and enjoy it all in stunning picture quality."
  });
  collection.insert({
  	 "category":"TV",
     "name": "Toshiba 50L2400U 50-Inch 1080p 120Hz LED HDTV",
     "price":"689.99",
     "brand":"toshiba",
     "size":"50",
     "rating":"4.5",
     "description":"The L2400U Series LED HD TV series blends a modern design, elegant gun metal finish and a sleek stand, with incredible quality and value. The slim L2400U TV features an energy-efficient LED backlight. Equipped with 1080p Full HD resolution in all sizes, the L2400U series delivers a rich and vibrant picture with vivid brightness and sharp contrast. Clear Scan 120Hz technology doubles the refresh rate for clearer fast-motion video-perfect for delivering great action scenes for sports lovers and movie fans. The L2400U series is available in a variety of popular sizes including 32‚Äù, 40‚Äù and 50‚Äù-with technologies geared for gaming and entertainment, plus DTS Tru Surround for immersive surround sound."
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
collection.insert({
  	 "category":"Refrigerator",
     "name": "Danby DAR195BL 1.8 cu.ft. All Refrigerator - Black",
     "price":"119.99",
     "brand":"Danby",
     "size":"19.6 x 17.5 x 19.7 inches",
     "rating":"4.5",
     "description":"The Danby DAR195BL 1.8 Cu. Ft. Designer Compact All Refrigerator, in black, is energy efficient refrigeration in a convenient, compact space. This model makes a great addition to the student dorm room. It includes our second generation CanStor beverage dispenser, tall bottle storage and a scratch resistant work top to store accessories."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "Danby Designer DAR044A1BDD Compact All Refrigerator, 4.4 Cubic Feet",
     "price":"210.00",
     "brand":"Danby",
     "size":"20.9 x 20.6 x 32.7 inches",
     "rating":"4.5",
     "description":"Forget running to the kitchen, enjoy the convenience of chilled beverages where they're needed most with our Energy StarÆ rated Danby DesignerÆ compact all fridge. Boasting a generous capacity of 4.4 cu. ft. this counter high model is an efficient way to supplement your refrigerator. It includes our CanstorÆ beverage dispenser, reversible door hinge and interior light."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "SPT 2.5 cu.ft Compact Refrigerator Stainless Door with Black Sides",
     "price":"153.00",
     "brand":"SPT",
     "size":"17.7 x 18.6 x 24.9 inches",
     "rating":"4.5",
     "description":"Flush back, compact design is ideal for college dorm room or office, perfect for counter-top placement. Reversible doors offer versatility. Features tall bottle door rack, separate ice maker chamber and adjustable thermostat."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "Avanti RA7306WT 2-Door Apartment Size Refrigerator, White",
     "price":"333.00",
     "brand":"Avanti",
     "size":"23 x 21.5 x 56 inches",
     "rating":"3",
     "description":"7.4 CF Two Door Apartment Size Refrigerator - White."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "Haier HCR17W 1.7 Cubic Feet Refrigerator/Freezer, White",
     "price":"103.20",
     "brand":"Haier",
     "size":"18.9 x 19.4 x 17.9 inches",
     "rating":"4",
     "description":"Ideal for dorm rooms, bar units and other locations that require compact refrigerator storage is the Haier 1.7-cubic feet. Compact refrigerator in white has a full-width shelf that slides out smoothly to offer easy access to your refrigerated goods. The refrigerator's full-width and half-width door shelves offer extra storage space, and its 2-liter door bottle storage is great for juice containers, soda bottles and other 2-liter items."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "Haier HNSE04BB 4.0 Cubic Feet Refrigerator/Freezer, Black",
     "price":"169.00",
     "brand":"Haier",
     "size":"18.9 x 33.4 x 20.9 inches",
     "rating":"3.5",
     "description":"Haier HNSE04BB 4.0-cubic feet compact refrigerator with half freezer - black: This Haier Refrigerator has a roomy 4.0-cubic feet capacity with a half-freezer and 3 full-width glass shelves. The HNSE04BB features 1 full-width and 2 half-width door shelves for a variety of storage options, 6 can door storage to keep your favorite drinks chilled, and holds 2 liter and tall bottles on the door. With this mid-size refrigerator, you never need to worry about sacrificing quality for size. Enjoy a sleek black finish and space-saving technology with this great idea from Haier. Dimensions (in inches): 18 7/8 width by 20 7/8 diameter by 33 3/8 height."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "Danby DAR259BL 2.5-Cu. Ft. Designer Compact All Refrigerator, Black",
     "price":"139.99",
     "brand":"Danby",
     "size":"20 x 17.6 x 27 inches",
     "rating":"4",
     "description":"The Danby DAR259BL Energy Star 2.5 Cu. Ft. Designer Compact All Refrigerator, in black, has a capacity of 2.5 cu. ft. providing ample space for one person. At just over 2 feet tall this model can be place on a counter-top or floor and makes a great addition to the dorm room. It includes our second generation CanStor beverage dispenser, tall bottle storage and our scratch resistant worktop to store accessories."
  });
collection.insert({
  	 "category":"Refrigerator",
     "name": "Avanti RA7316PST 2-Door Apartment Size Refrigerator, Black with Platinum Finish",
     "price":"444.23",
     "brand":"Avanti",
     "size":"23 x 21.5 x 56 inches",
     "rating":"3",
     "description":"7.4 CF Two Door Apartment Size Refrigerator - White."
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
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "Kleancolor Nail Polish - Awesome Metallic Full Size Lacquer Lot of 12-pc Set",
     "price":"12.83",
     "brand":"Kleancolor",
     "shipping weight":"0.5 ounces",
     "rating":"4",
     "description":"It's all about COLORS ! Smooth and long lasting nail polish Features Very Long Wearing Chip-resistance . The set features bright metallic colors for playfulness to complete the look of sweet girl who enjoys her creativity! Don't just colorize Your Look !KleanColorize Your Divine Beauty !."
  });

collection.insert({
  	 "category":"Nail_Polish",
     "name": "Kleancolor Nail Lacquers 6 Color - *NEW* Pastel Spring Collection",
     "price":"8.06",
     "brand":"Kleancolor",
     "shipping weight":"1.5 pound",
     "rating":"4",
     "description":"KLEANCOLOR *2011* Spring Collection."
  });
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "OPI Natural Nail Base Coat & Top Coat COMBO FULL SIZE .5",
     "price":"12.99",
     "brand":"OPI",
     "shipping weight":"5.6 Ounces",
     "rating":"4.5",
     "description":"NEW OPI Natural Nail Base Coat & Top Coat COMBO FULL SIZE .5."
  });
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "Emori (TM) 32 Piece Vibrant Color Nail Lacquer (Glitter, Metallic, Neon, Nail Polish) Combo Set + 3 Sets of Scented Nail Polish Remover - Xtreme",
     "price":"22.95",
     "brand":"Emori",
     "shipping weight":"8 pounds",
     "rating":"4",
     "description":"The perfect nail set for all your unique Look. This Nail Art polish set contains 32 colors each presents long wearing and chip-resistant nail lacquers. Colors include 1, Brown 2, Lavendar 3, Pacific 4, Neon Purple 5, Neon Blue 6, Blue 7, Neon Yellow 8, Green 9, red 10, Pink Lady 11, Yellow 12, Orange 13, Baby blue 14, EverGreen 15, Metallic Gold, 16, Metallic Blue 17, Silver 18, Gold Glitz 19, Silver Glitter 20, Thunder 21, Blue Glitter 22, Purple Cosmos 23, Red Glitter 24, White 25, Black 26, Ruby 27, Dream Girl 28, Blue 29, Midnight Queen 30, Soft Bright 31, Pink 32, Wild Rose. Each bottle is 8ml/0.28 oz. Also comes with 3 Scented nail polish remover pads."
  });
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "Expressions Girl / 6-piece Ice Cream Scented Nail Polish Set 1.44oz.(42ml)",
     "price":"10.16",
     "brand":"Expressions Girl",
     "shipping weight":"1 pound",
     "rating":"3",
     "description":"Bright, fun and Scented - here's a set of nail polishes that every girl will enjoy! Child-sized nail polish comes in six bright shades that each smell like a different yummy ice cream sundae! The set comes boxed and ready for giving but is also perfect for breaking open and giving individually as party favors! For girls 5 years and older."
  });
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "SHANY Cosmetics 3D Nail Art Decoration Mini Bottles with Nail Art Tweezer, 48 Count",
     "price":"13.95",
     "brand":"SHANY",
     "shipping weight":"4 ounces",
     "rating":"4.5",
     "description":"Have more options for nail art than you know what to do with! With this set, you get 48 individual bottles of assorted nail art and decorations. The individual bottles keep the different decorations easily separate, with caps that fit tightly so your accessories stay where you want them to. Each bottle contains a different kind, shape, and color of nail art, ranging from glitter to sequins to rhinestones and more. The colors also run the gamut, with pearlescent, glittery, and neon colors. Using these decorations is super easy, no matter your level of experience. Just use top coat or nail glue to apply them to your nails at any stage in the manicure or pedicure process and voila - fabulous nails!."
  });
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "Opi Shatter Collection Nail lacquer, Gold Shatter, 0.5 Fluid Ounce",
     "price":"5.00",
     "brand":"OPI",
     "shipping weight":"2.4 ounces",
     "rating":"4.5",
     "description":"The Opi shatter shades creates a two-texture finish when used over nail lacquer."
  });
  
collection.insert({
  	 "category":"Nail_Polish",
     "name": "OPI: Lacquer NLS86 Bubble Bath, 0.5 oz",
     "price":"6.49",
     "brand":"OPI",
     "shipping weight":"6.1 ounces",
     "rating":"4.5",
     "description":"Nothing completes a look more beautifully than nails wearing the seasonÕs most significant colors. Changing a Nail Lacquer shade can change a womanÕs entire look _ and her outlook. With over 200 shades, you are sure to find what you're looking for."
  });
  

 /*=================Book======================*/
  collection.insert({
  	 "category":"Book",
     "name": "Capital in the Twenty-First Century",
     "price":"25.20",
     "author":"Thomas Piketty",
     "publisher":"Belknap Press; First Edition edition (March 10, 2014)",
     "language":"English",
     "shipping weight":"2.4 pounds"
  });
collection.insert({
  	 "category":"Book",
     "name": "The Fault in Our Stars",
     "price":"7.89",
     "author":"John Green",
     "publisher":"Speak; Reprint edition (April 8, 2014)",
     "language":"English",
     "shipping weight":"11.4 ounces"
  });
collection.insert({
  	 "category":"Book",
     "name": "Oh, The Places You'll Go!",
     "price":"11.02",
     "author":"Dr. Seuss",
     "publisher":"Random House (January 22, 1990)",
     "language":"English",
     "shipping weight":"8.6 ounces"
  });
collection.insert({
  	 "category":"Book",
     "name": "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
     "price":"16.95",
     "author":"Donna Tartt",
     "publisher":"Little, Brown and Company; First Edition edition (October 22, 2013)",
     "language":"English",
     "shipping weight":"2.3 pounds"
  });
collection.insert({
  	 "category":"Book",
     "name": "Flash Boys: A Wall Street Revolt",
     "price":"16.77",
     "author":"Michael Lewis",
     "publisher":"W. W. Norton & Company; 1 edition (March 31, 2014)",
     "language":"English",
     "shipping weight":"1.2 pounds"
  });
collection.insert({
  	 "category":"Book",
     "name": "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5 [Paperback]",
     "price":"110.00",
     "author":"American Psychiatric Association",
     "publisher":"American Psychiatric Publishing; 5 edition (May 27, 2013)",
     "language":"English",
     "shipping weight":"3.2 pounds"
  });
collection.insert({
  	 "category":"Book",
     "name": "Divergent Series Complete Box Set",
     "price":"31.00",
     "author":"Veronica Roth",
     "publisher":"Katherine Tegen Books; Box Pck Ha edition (October 22, 2013)",
     "language":"English",
     "shipping weight":"4.2 pounds"
  });
collection.insert({
  	 "category":"Book",
     "name": "Finding Me: A Decade of Darkness, a Life Reclaimed: A Memoir of the Cleveland Kidnappings by Michelle Knight and Michelle Burford",
     "price":"15.61",
     "author":"Michelle Knight",
     "publisher":"Weinstein Books; domestic edition (May 6, 2014)",
     "language":"English",
     "shipping weight":"1.1 pounds"
  });
collection.insert({
  	 "category":"Book",
     "name": "Heaven is for Real: A Little Boy's Astounding Story of His Trip to Heaven and Back",
     "price":"9.78",
     "author":"Todd Burpo",
     "publisher":"Thomas Nelson; Original edition (November 2, 2010)",
     "language":"English",
     "shipping weight":"5.6 ounces"
  });
collection.insert({
  	 "category":"Book",
     "name": "A Fighting Chance",
     "price":"16.99",
     "author":"Elizathbeth Warren",
     "publisher":"Metropolitan Books; First Edition edition (April 22, 2014)",
     "language":"English",
     "shipping weight":"1.4 pounds"
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
