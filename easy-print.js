var easyPrint=function(url){
	$('body')
		.find('iframe.print').remove()
	.end().append('<iframe src="'+url+'" width="1" height="1" style="display:none" class="print"></iframe>')
		.find('iframe.print:last').get(0).contentWindow.print();
	setTimeout(function(){
		$('iframe.print').remove();
	},1000);
};
