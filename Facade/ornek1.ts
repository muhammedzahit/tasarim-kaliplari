// Facade Tasarım Kalıbı
class VideoConverter{
    public convertVideo(dosyaAdi : string, format: string) {
        console.log("Video dönüştürülüyor");
        if(format == "mp4"){
            return new Mp4ComperssionCodec(dosyaAdi);
        }else if(format == "flv"){
            return new FlvCompressionCodec(dosyaAdi);
        }else{
            return new OggCompressionCodec(dosyaAdi);
        }
    }

}

class Mp4ComperssionCodec{
    private dosyaAdi : string;
    constructor(dosyaAdi : string){
        this.dosyaAdi = dosyaAdi;
        // bilmediğimiz karmaşık işlemler ...
        console.log('Çıktı : ' + dosyaAdi + '.mp4')
    }
}

class FlvCompressionCodec{
    private dosyaAdi : string;
    constructor(dosyaAdi : string){
        this.dosyaAdi = dosyaAdi;
        // bilmediğimiz karmaşık işlemler ...
        console.log('Çıktı : ' + dosyaAdi + '.flv')
    }
}

class OggCompressionCodec{
    private dosyaAdi : string;
    constructor(dosyaAdi : string){
        this.dosyaAdi = dosyaAdi;
        // bilmediğimiz karmaşık işlemler ...
        console.log('Çıktı : ' + dosyaAdi + '.ogg')
    }
}

let video = new VideoConverter();
video.convertVideo('video1', 'mp4');
video.convertVideo('video2', 'flv');
video.convertVideo('video3', 'ogg');
