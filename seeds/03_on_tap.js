
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('on-tap').del()
    .then(function () {
      // Inserts seed entries
      return knex('on-tap').insert([
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
        }
      ]);
    });
};
