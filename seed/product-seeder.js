var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
		new Product({
			imagePath: 'http://www.samsung.com/global/galaxy/galaxy-s8/images/gallery/galaxy-s8_gallery_left_side_coralblue_s4.png',
			title: 'Samsung S8 Edge',
			description: 'New Samsung in market',
			price: 800
		}),
		new Product({
			imagePath: 'http://mobitrends.co.ke/wp-content/uploads/2016/06/Tecno-Camon-C9-in-Kenya.jpg',
			title: 'Tecno Camon C9',
			description: 'better New Phone in Kenya',
			price: 140
		}),
		new Product({
			imagePath: 'http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg',
			title: 'Iphone 7',
			description: 'Iphone 7 - bigger and better with no earphones jack',
			price: 800
		}),
		new Product({
			imagePath: 'http://sonyglobal.scene7.com/is/image/gwtprod/53acebc1f69c9f232d3f3e3eefdbe7c3?fmt=pjpeg&wid=330&bgcolor=F1F5F9&bgc=F1F5F9',
			title: 'Sony Headphones',
			description: 'Listen your favorite music with sony',
			price: 100
		}),
		new Product({
			imagePath: 'http://sonyglobal.scene7.com/is/image/gwtprod/53acebc1f69c9f232d3f3e3eefdbe7c3?fmt=pjpeg&wid=330&bgcolor=F1F5F9&bgc=F1F5F9',
			title: 'Samsung Smart TV',
			description: 'TV LED 4K SAMSUNG Smart TV 55',
			price: 3000
		}),
		new Product({
			imagePath: 'http://dam.which.co.uk.s3-website-eu-west-1.amazonaws.com/207d70fb-34f8-4531-8e92-f607226a5c9b.jpg',
			title: 'Beko fridge freezer',
			description: 'Beko fridge freezer - Bigger and better',
			price: 300
		})
	];
var done = 0;
for(var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			exit();	
		}
	});
}
function exit(){
	mongoose.disconnect();
}

