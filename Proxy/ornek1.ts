// Proxy tasarım kalıbını youtube üzerinden video indirme örneği ile anlatacağım.

interface IYoutubeLib {
    getVideoInfo(id: string): string;
    downloadVideo(id: string): string;
}

class YoutubeLib implements IYoutubeLib {
    public getVideoInfo(id: string): string {
        return "Video bilgileri";
    }
    public downloadVideo(id: string): string {
        return "Video indirildi";
    }
}

class YoutubeProxy implements IYoutubeLib {

    private youtubeLib: YoutubeLib;
    private cache: any = {};

    constructor(youtubeLib?: YoutubeLib) {
        this.youtubeLib = youtubeLib || new YoutubeLib();
    }

    // Proxy tasarım kalıbı ile birlikte cache mekanizması da kullanıldı.
    // Bu sayede bir video indirildiğinde, aynı video tekrar indirilmeden cache'den okunur.
    // Bu sayede youtube üzerinden video indirme işlemi daha hızlı gerçekleşir.
    public getVideoInfo(id: string): string {
        if (this.cache[id]) {
            console.log("Cache'den okundu")
            return this.cache[id];
        } else {
            console.log("Youtube üzerinden okundu")
            this.youtubeLib = new YoutubeLib();
            this.cache[id] = this.youtubeLib.getVideoInfo(id);
            return this.cache[id];
        }
        
    }

    public downloadVideo(id: string): string {
        if (this.cache[id]) {
            console.log("Cache'den okundu")
            return this.cache[id];
        } else {
            console.log("Youtube üzerinden okundu")
            this.youtubeLib = new YoutubeLib();
            this.cache[id] = this.youtubeLib.downloadVideo(id);
            return this.cache[id];
        }
        
    }
}

let youtubeLib = new YoutubeLib();
let youtube = new YoutubeProxy(youtubeLib);

console.log(youtube.getVideoInfo("video1"));
console.log()

console.log(youtube.getVideoInfo("video1"));
console.log()

console.log(youtube.getVideoInfo("video1"));
console.log()

console.log(youtube.downloadVideo("video2"));
console.log()

console.log(youtube.downloadVideo("video2"));
console.log()

console.log(youtube.downloadVideo("video2"));
console.log()

