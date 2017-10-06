declare var swal;
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
			var item = document.createElement("li");
			var link = document.createElement("a");
			link.href = y.realUrl;
			link.download = "";
			link.innerText = 
				"[" + y.attributes.mime.split("/")[1] + "]" + 
				(y.attributes.size || ("Audio - " + y.attributes.bitrate ));

			item.appendChild(link);
			return item;
		});
		var contentElement = document.createElement("ul");
		for(var item of downloadList){
			contentElement.appendChild(item);
		}
		swal({
			title: "Download",
			content: contentElement,
			html: true
		});
	}catch(e){
		swal({
			title: e.name,
			text: e.message,
			type: "error"
		});
	}
})();