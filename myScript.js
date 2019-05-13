let divIDs = [
	'div[id*="google_image_div"]',
	'div[class*="google_image_div"]',
	'div[id*="banner"]',
	'div[class*="banner"]',
	'div[id*="ad_unit"]',
	'div[class*="ad_unit"]',
	'div[id*="ad"]',
	'div[class*="ad"]',
	'div[id*="ad-container"]',
	'div[id*="data-slot"]',
	'div[id*="ad-wrapper"]',
	'div[class*="ad-wrapper"]',
	'div[id*="beacon"]',
	'div[class*="beacon"]',
	'div[id*="hireme"]',
	'div[class*="hireme"]',
	'div[id*="google_ads_iframe"]',
	'div[class*="google_ads_iframe"]',
	'div[id*="textwidget"]',
	'div[class*="textwidget"]',
	'div[id*="fh"]',
	'div[class*="fh"]',
	'div[id*="GoogleActiveViewElement"]',
	'div[class*="GoogleActiveViewElement"]',
	'div[id*="viewability"]',
	'div[class*="viewability"]',
	'div[id*="GoogleActiveViewClass"]',
	'div[class*="GoogleActiveViewClass"]',
	'div[id*="creative-container"]',
	'div[class*="creative-container"]',
	'div[id*="google_ads"]',
	'div[class*="google_ads"]',
	'div[id*="GoogleAd"]',
	'div[class*="GoogleAd"]',
];

function run() {
	setInterval(function() {
		divIDs.every(query => {
			var el = document.querySelectorAll(query);
			if (el.length > 0) {
				console.log(query);
				console.log(el);
				el.forEach(documentElement => {
					documentElement.parentElement.removeChild(documentElement);	
				});
			}
			return true;	
		});
		//var el = document.querySelectorAll('div[id*="google_ads_iframe"]');
		//var el = document.querySelectorAll(query);
      	//console.log(el);
      	//console.log("HI");
		//el.parentElement.removeChild(el);
	}, 3000);
}

window.onload = run 

//Popular ad div IDs and classes
/*
	google_image_div
	banner
	ad_unit
	ad
	ad-container
	data-slot
	google_image_div
	contains "ad-wrapper"
	beacon
	hireme
	contains "google_ads_iframe"
	textwidget
	fh
	GoogleActiveViewElement
	contains "viewability"
	GoogleActiveViewclass
	creative-container
	contains "google_ads"
	conains "promotedlink"
	reddit
		data-slot
*/

//a tag classes nested in divs 
/*
	google_image_div

*/

//a tag props nested in divs
/*
	data-clc-click
*/

//iframe classes
/*
	ym-ad-choices
	google_ads_iframe
*/
