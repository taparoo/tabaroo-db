
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("inventory").del()
    .then(function () {
      // Inserts seed entries
      return knex("inventory").insert([
        {
          "name": "Tower E.S.B.",
          "type": "Extra Special Bitter",
          "brewery": "Bull & Bush",
          "abv": 6.8,
          "bar": "Very Good",
          "user_id": null,
          "description": "Ruby marmalade color. It is distinctive enough to like your first go at it, but also nicely balanced and drinkable enough to ensure its staying power. Its most notable flavor notes are caramel malt, finishing with a dry, somewhat tongue-coating hoppy finish.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/Tower_ESB_2015.jpg?7412647295741330827"
        }, {
          "name": "AllGood Amber",
          "type": "Amber Ale",
          "brewery": "Bull & Bush",
          "abv": 6,
          "bar": "Good",
          "user_id": null,
          "description": "Antique amber color. Allgood Amber Ale® becomes more appreciated the more you get acquainted with it. It doesn’t slap you in the face with hops or alcohol on the first sip or two. Rather, its satisfying balance of flavors, along with its ability to be both flavorful and very drinkable, makes this beer universally appealing regardless of mood or situation.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/Allgood_2015.jpg?3008890982502804742"
        }, {
          "name": "4.0 GPA",
          "type": "Grapefruit",
          "brewery": "Bull & Bush",
          "abv": 4,
          "bar": "Very Good",
          "user_id": null,
          "description": "At the confluence of grapefruit and hops, there exists the perfect summertime ale. Whole grapefruit are each lovingly caressed, peeled and juiced by the hands of our meticulous brewers while they whistle and dream of warm summer nights yet to come. Enjoy the fruits of their labor.  Finally, you too can have a 4.0 GPA.  Your Mom will be proud.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/GPA_2015.jpg?11807025853315381311"
        }, {
          "name": "Happy Hop Pilsner",
          "type": "Bohemian Pilsner",
          "brewery": "Bull & Bush",
          "abv": 5.2,
          "bar": "Very Good",
          "user_id": null,
          "description": "Brilliant gold color. Soft, dry, malty aroma with a delicate hop presence. Light in body. Soft, clean, delicately malty flavors becoming gently dry on the finish. A lager should be thirst quenching and it should have character too. This beer accomplishes both– and with style!",
          "image_url": ""
        }, {
          "name": "Big Ben Brown",
          "type": "Brown Ale",
          "brewery": "Bull & Bush",
          "abv": 6.5,
          "bar": "Very Good",
          "user_id": null,
          "description": "Deep dark mahogany color. Big Ben Brown Ale® has rich, seductive flavors of molasses, chewy toffee, and dark pit fruit, all leading to a roasted malty finish.  A great beer with a burger or a steak.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/BigBen_2015.jpg?4545272721637645871"
        }, {
          "name": "Wit Beer",
          "type": "Belgian-Style Ale",
          "brewery": "Epic",
          "abv": 5.1,
          "bar": "Very Good",
          "user_id": null,
          "description": "Slightly higher in alcohol content than traditional Wits, ours is brewed using wheat, oats, authentic Belgian yeast, malts and just a sprinkle of hops. Spices include coriander, sweet and bitter orange peel and grains of paradise.",
          "image_url": "http://www.epicbrewing.com/media/k2/items/cache/97d1d3d17841d6d3353ed857f6573ac4_S.jpg"
        }, {
          "name": "Blue Ski",
          "type": "Lager",
          "brewery": "Epic",
          "abv": 5.3,
          "bar": "Good",
          "user_id": null,
          "description": "A refreshing Colorado Rockies lager with a German Pilsner Malt backbone. The subtle malt flavor is balanced with spicy and herbal noble hops and the finish is crisp and clean",
          "image_url": "http://www.epicbrewing.com/media/k2/items/cache/f3051eb70b962b646ad926757115bce0_S.jpg"
        }, {
          "name": "Brainless Raspberries",
          "type": "Raspberry Strong Pale Ale",
          "brewery": "Epic",
          "abv": 9.7,
          "bar": "Good",
          "user_id": null,
          "description": "Hints of raspberry bubble gum flavors from the Belgian yeast and fresh raspberries tease the pallet in this Brainless® offering.",
          "image_url": "http://www.epicbrewing.com/media/k2/items/cache/24fae0cf4e190078d5b9896e00870cd9_S.jpg"
        },
        {
          "name": "Princess Yum Yum",
          "type": "Raspberry Kolsh",
          "brewery": "Denver Beer Co",
          "abv": 4.8,
          "bar": null,
          "user_id": null,
          "description": "Princess Yum Yum is a sparkly beauty. Brewed as a German style Kölsch and fermented with real raspberries, she has the color and clarity of a ruby. At 4.8% ABV she is enticing and inviting, yet the tart, dry finish makes her just as complex as any royal. There are plenty of reasons you’ll want your own Princess Yum Yum.",
          "image_url": "https://wine-searcher1.freetls.fastly.net/images/labels/89/90/denver-beer-co-princess-yum-yum-raspberry-kolsch-beer-colorado-usa-10718990.jpg"
        },
        {
          "name": "Graham Cracker Porter",
          "type": "Porter",
          "brewery": "Denver Beer Co",
          "abv": 5.6,
          "bar": null,
          "user_id": null,
          "description": "Like a campfire in a glass, this robust beauty has seductive notes of vanilla, smoked cedar, and mulling spices. A dark pour with mild lacing, she is a rollercoaster of lush chocolate diving into a semi-dry finish of roasted malt and biscuit. 5.6% ABV",
          "image_url": "https://www.beersyndicate.com/images/beerLabels/label_thumb_16165001000517_front.jpg"
        },
        {
          "name": "Incredible Pedal",
          "type": "West Coast IPA",
          "brewery": "Denver Beer Co",
          "abv": 7,
          "bar": null,
          "user_id": null,
          "description": "This American IPA greets you with lush floral, citrus, and tropical fruit on the nose. A medium bodied ale with a touch of sweetness, she will gear you up for a finish full of tangerine and grapefruit. Incredible Pedal is a hoppy beauty that takes you for a ride! 7.0% ABV",
          "image_url": "http://www.brewingnews.com/nipac/2016/Labels_NIPAC_2016/DenverBeer_IncrediblePedal.jpg"
        },
        {
          "name": "Sun Drenched",
          "type": "Exploratory Ale",
          "brewery": "Denver Beer Co",
          "abv": 5,
          "bar": null,
          "user_id": null,
          "description": "Brewed for Colorado’s 300 days of sunshine, this is our twist on a refreshing American ale. Part IPA, part American wheat, she is a perfect thirst-quenching reward after a long day of adventure. Sun Drenched is a straw-colored ale loaded full of hops with a crisp, dry finish. Dry hopped with generous amounts of Simcoe, Cascade, and Mosaic hops, she is highlighted by a bright floral and citrus aroma. Remember your sunscreen while enjoying this beauty in our sun-drenched state!",
          "image_url": "http://www.brewingnews.com/gwo/2016/Labels2016/DenverBeer_SunDrenched.jpg"
        },
        {
          "name": "Pretzel Assassin",
          "type": "Amber Lager",
          "brewery": "Denver Beer Co",
          "abv": 5,
          "bar": null,
          "user_id": null,
          "description": "This classic Vienna Lager is crisp and easy drinking. Munich and caramel malts are used to create a malty flavor with a touch of breadiness and a light sweetness. German noble hops round out the flavor profile of this clean, authentic amber lager. No pretzels were harmed in the making of this beer, but we can’t vouch for pretzel safety while you imbibe!",
          "image_url": "https://www.beersyndicate.com/images/beerLabels/label_thumb_16161001000292_front.jpg"
        },
        {
          "name": "Maui Express",
          "type": "Coconut IPA",
          "brewery": "Denver Beer Co",
          "abv": 6.6,
          "bar": null,
          "user_id": null,
          "description": "Maui Express features a distinct blend of hops and coconut to create a delightful tropical flavor explosion! Citra and Mosaic hops form a juicy fruit hop character that is enhanced by shredded coconut for a truly unique flavor combination. Easy drinking and refreshing, this IPA will transport your mind to memories of the beach, sunny days, and laughs among friends.",
          "image_url": "https://lh3.googleusercontent.com/-3BdgyzqamNI/WLWJ2N9ZlXI/AAAAAAAEq2U/LP0B5VvgsDo/image_thumb.png?imgmax=800"
        },
        {
          "name": "",
          "type": "",
          "brewery": "",
          "abv": 6.6,
          "bar": null,
          "user_id": null,
          "description": "",
          "image_url": ""
        },
        {
          "name": "",
          "type": "",
          "brewery": "",
          "abv": 6.6,
          "bar": null,
          "user_id": null,
          "description": "",
          "image_url": ""
        },
      ]);
    });
};
