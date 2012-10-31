/**
* Easy-print
*
* @description: A function to quickly open a print dialog from a new URL, using jQuery
* @author: M1ke http://m1ke.me
*
*/

var easyPrint=function(url,time){
	$('body')
		.find('iframe.print').remove()
	.end().append('<iframe src="'+url+'" width="1" height="1" style="display:none" class="print"></iframe>')
		.find('iframe.print:last').get(0).contentWindow.print();
	setTimeout(function(){
		$('iframe.print').remove();
	},time ? time : 2000);
};
