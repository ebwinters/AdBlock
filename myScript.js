let divIDs = [
	"div.google_image_div",
	"div.banner",
	"div.ad_unit",
	"div.ad",
	"div.ad-container",
	"div.data-slot",
	"div.google_image_div",
	"div.ad-wrapper",
	"div.beacon",
	"div.hireme",
	"div.google_ads_iframe",
	"div.textwidget",
	"div.fh",
	"div.GoogleActiveViewElement",
	"div.viewability",
	"div.GoogleActiveViewclass",
	"div.creative-container",
	"div.google_ads",
];

function run() {
	setInterval(function() {
		var el = document.querySelector('div[id*="google_ads_iframe"]');
      	console.log(el);
      	console.log("HI");
		el.parentElement.removeChild(el);
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
