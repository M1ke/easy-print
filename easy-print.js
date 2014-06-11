/**
* Easy-print
*
* @description: A function to quickly open a print dialog from a new URL
* @author: M1ke http://m1ke.me
*
*/

var easyPrint=function(url) {
	var element=document.getElementById("easy-print");
	element && element.parentNode.removeChild(element);
	var iframe=document.createElement('iframe');
	iframe.setAttribute('src',url);
	iframe.setAttribute('width',1);
	iframe.setAttribute('height',1);
	iframe.setAttribute('style','display:none');
	iframe.setAttribute('id','easy-print');
	var divs=document.getElementsByTagName('div');
	divs[0].appendChild(iframe); 
	document.getElementById("easy-print").contentWindow.print();
};
