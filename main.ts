(async function(){
	var extractor = new MediaGet.Extractors.YoutubeExtractor();
	try{
		var mediaInfos = await extractor.getMediaInfosAsync(location.href);
		mediaInfos = mediaInfos.filter(function(y){
			if(y.attributes.mime.indexOf("video") == -1)return true;
			if(y.attributes.codecs.indexOf("+")> -1)return true;
			return false;
		});
		var downloadList = mediaInfos.map(function(y){
			return "<li><a download href=\"" + y.realUrl + "\">[" + y.attributes.mime.split("/")[1] + "]" + 
			(y.attributes.size || ("Audio - " + y.attributes.bitrate )) + 
			"</li>"
		});
		swal({
			title: "Download",
			text: "<ul>" + downloadList.join("") + "</ul>",
			html: true
		});
	}catch(e){
		swal({
			title: error.name,
			text: error.message,
			type: "error"
		});
	}
})();