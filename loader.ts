async function loadScript(src: string) : Promise<void>{
    return new Promise<void>((res,rej)=>{
        var newScript = document.createElement("script");
        newScript.onload = function(){
            res();
        }
        newScript.src = src;
        document.body.appendChild(newScript);
    });
}

var host = 'https://xupeiyao.github.io/YoutubeDownloaderBookmarkTool/';

(async function(){
    /*非同步載入並等候SweetAlert、MediaGet.js*/
    await Promise.all([
        loadScript('https://unpkg.com/sweetalert/dist/sweetalert.min.js'),
        loadScript(host + 'lib/mediaGet/mediaget.js')
    ]);
    
    await loadScript(host + 'mainProcess.js');
})();
