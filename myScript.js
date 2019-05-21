let divIDs = [
	'div[id*="google_image_div"]',
	'div[class*="google_image_div"]',
	'div[id*="ad_unit"]',
	'div[class*="ad_unit"]',
	'div[class*="ad-container"]',
	'div[id="ad-container"]',
	'div[id*="data-slot"]',
	'div[class*="data-slot"]',
	'div[id*="ad-wrapper"]',
	'div[class*="ad-wrapper"]',
	'div[id*="google_ads_iframe"]',
	'div[class*="google_ads_iframe"]',
	'div[id*="GoogleActiveViewElement"]',
	'div[class*="GoogleActiveViewElement"]',
	'div[id*="GoogleActiveViewClass"]',
	'div[class*="GoogleActiveViewClass"]',
	'div[id*="google_ads"]',
	'div[class*="google_ads"]',
	'div[id*="GoogleAd"]',
	'div[class*="GoogleAd"]',
	'div[id*="promotedlink"]',
	'div[class*="promotedlink"]',
	'div[class*="stickyAd"]',
	'div[class*="showAd"]',
	'div[data-google-query-id]',
	'div[class*="adContainerTarget"]',
	// //Fix banner to make sure that it only deletes in certain cases
	// //'div[id*="banner"]',
	// //'div[class*="banner"]',
	// //'div[id*="beacon"]',
	// //'div[class*="beacon"]',
	// 'div[id*="hireme"]',
	// 'div[class*="hireme"]',
	// 'div[id*="creative-container"]',
	// 'div[class*="creative-container"]',
	// //'div[id*="viewability"]',
	// //'div[class*="viewability"]',
	// //'div[id*="textwidget"]',
	// //'div[class*="textwidget"]',
	// //'div[id="fh"]',
	// //'div[class="fh"]',
	// //'div[id*="ad"]',
	// //'div[class*="ad"]',
];

function run() {
	setInterval(function() {
		console.log("HI");
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
