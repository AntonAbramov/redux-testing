// TO START APPLICATION RUN: nodemon server
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3300));
app.use('/', express.static(__dirname + '/app/assets/'));

app.get('/cart', function(req, res){
  res.send([
    {
      'link': 'http://www.juniqe.com/gin-premium-poster-portrait-1190535.html',
      'imgSrc': 'https://d2t0avdreobd8d.cloudfront.net/media/catalog/product/cache/2/image/x160/040ec09b1e35df139433887a97daa66f/531/9/531-9-101P.jpg',
      'imgAlt': 'Image Alt tag',
      'productName': 'Gin',
      'productType': 'Premium Poster',
      'productAuthor': 'Maren Kruth',
      'removeText': 'remove',
      'removeLink': '#',
      'size': 'Size : 40x60',
      'avaliableText': 'Available: delivery in 4 to 7 working days',
      'avaliable': true,
      'selected' : '3',
      'select': [
        {'value' : '1', 'name' : '1'},
        {'value' : '2', 'name' : '2'},
        {'value' : '3', 'name' : '3'},
        {'value' : '4', 'name' : '4'},
        {'value' : '5', 'name' : '5'},
        {'value' : '6', 'name' : '6'},
        {'value' : '7', 'name' : '7'},
        {'value' : '8', 'name' : '8'},
        {'value' : '9', 'name' : '9'},
        {'value' : '10', 'name' : '10'}
      ],
      'selectData' : {
        'quantity' : 2,
        'data' : [
          {'value' : '1', 'name' : '1'},
          {'value' : '2', 'name' : '2'},
          {'value' : '3', 'name' : '3'},
          {'value' : '4', 'name' : '4'},
          {'value' : '5', 'name' : '5'},
          {'value' : '6', 'name' : '6'},
          {'value' : '7', 'name' : '7'},
          {'value' : '8', 'name' : '8'},
          {'value' : '9', 'name' : '9'},
          {'value' : '10', 'name' : '10'}
        ]
      },
      'quantityName': 'select',
      'price': 24.00,
      'total': 72.00,
      'currency': '€'
    },
    {
      'link': 'http://www.juniqe.com/gin-premium-poster-portrait-1190535.html',
      'imgSrc': 'https://d2t0avdreobd8d.cloudfront.net/media/catalog/product/cache/2/image/x160/040ec09b1e35df139433887a97daa66f/531/9/531-9-101P.jpg',
      'imgAlt': 'Image Alt tag',
      'productName': 'Gin',
      'productType': 'Premium Poster',
      'productAuthor': 'Maren Kruth',
      'removeText': 'remove',
      'removeLink': '#',
      'size': 'Size : 40x60',
      'avaliableText': 'Available: delivery in 4 to 7 working days',
      'avaliable': true,
      'selectData' : {
        'quantity' : 4,
        'data' : [
          {'value' : '1', 'name' : '1'},
          {'value' : '2', 'name' : '2'},
          {'value' : '3', 'name' : '3'},
          {'value' : '4', 'name' : '4'},
          {'value' : '5', 'name' : '5'},
          {'value' : '6', 'name' : '6'},
          {'value' : '7', 'name' : '7'},
          {'value' : '8', 'name' : '8'},
          {'value' : '9', 'name' : '9'},
          {'value' : '10', 'name' : '10'}
        ]
      },
      'quantityName': 'select',
      'price': 24.33,
      'total': 72.21,
      'currency': '€'
    }
  ]);
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
