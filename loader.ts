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
    await Promise.all([
        //SweetAlert
        loadScript('https://unpkg.com/sweetalert/dist/sweetalert.min.js'),
        //MediaGet.js
        loadScript(host + 'lib/mediaGet/mediaget.js')
    ]);
    
    await loadScript(host + 'mainProcess.js');
})();
