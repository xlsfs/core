var BitmapData = require("awayjs-core/lib/base/BitmapData");
var Rectangle = require("awayjs-core/lib/geom/Rectangle");
var URLLoader = require("awayjs-core/lib/net/URLLoader");
var URLLoaderDataFormat = require("awayjs-core/lib/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/net/URLRequest");
var Event = require("awayjs-core/lib/events/Event");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var BitmapTexture = require("awayjs-core/lib/textures/BitmapTexture");
var Debug = require("awayjs-core/lib/utils/Debug");
var BitmapTextureTest = (function () {
    function BitmapTextureTest() {
        //---------------------------------------
        // Load a PNG
        var _this = this;
        var mipUrlRequest = new URLRequest('assets/1024x1024.png');
        this.mipLoader = new URLLoader();
        this.mipLoader.dataFormat = URLLoaderDataFormat.BLOB;
        this.mipLoader.load(mipUrlRequest);
        this.mipLoader.addEventListener(Event.COMPLETE, function (e) { return _this.mipImgLoaded(e); });
    }
    BitmapTextureTest.prototype.mipImgLoaded = function (e) {
        var _this = this;
        var loader = e.target;
        var image = ParserUtils.blobToImage(loader.data);
        image.onload = function (event) { return _this.onImageLoad(event); };
    };
    BitmapTextureTest.prototype.onImageLoad = function (event) {
        var image = event.target;
        var rect = new Rectangle(0, 0, image.width, image.height);
        console.log('Event', image);
        this.bitmapData = new BitmapData(image.width, image.height);
        this.bitmapData.drawImage(image, rect, rect);
        this.target = new BitmapTexture(this.bitmapData, true); //new HTMLImageElementTexture( loader.image , false );
        Debug.log('BitmapData', this.bitmapData);
        Debug.log('BitmapTexture', this.target);
    };
    return BitmapTextureTest;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVzL2JpdG1hcHRleHR1cmV0ZXN0LnRzIl0sIm5hbWVzIjpbIkJpdG1hcFRleHR1cmVUZXN0IiwiQml0bWFwVGV4dHVyZVRlc3QuY29uc3RydWN0b3IiLCJCaXRtYXBUZXh0dXJlVGVzdC5taXBJbWdMb2FkZWQiLCJCaXRtYXBUZXh0dXJlVGVzdC5vbkltYWdlTG9hZCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxVQUFVLFdBQWEsaUNBQWlDLENBQUMsQ0FBQztBQUNqRSxJQUFPLFNBQVMsV0FBYSxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQy9ELElBQU8sU0FBUyxXQUFhLCtCQUErQixDQUFDLENBQUM7QUFDOUQsSUFBTyxtQkFBbUIsV0FBVyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ2hGLElBQU8sVUFBVSxXQUFhLGdDQUFnQyxDQUFDLENBQUM7QUFDaEUsSUFBTyxLQUFLLFdBQWMsOEJBQThCLENBQUMsQ0FBQztBQUMxRCxJQUFPLFdBQVcsV0FBYSxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ3RFLElBQU8sYUFBYSxXQUFZLHdDQUF3QyxDQUFDLENBQUM7QUFDMUUsSUFBTyxLQUFLLFdBQWMsNkJBQTZCLENBQUMsQ0FBQztBQUV6RCxJQUFNLGlCQUFpQjtJQU90QkEsU0FQS0EsaUJBQWlCQTtRQVVyQkMseUNBQXlDQTtRQUN6Q0EsYUFBYUE7UUFYZkEsaUJBOENDQTtRQWpDQ0EsSUFBSUEsYUFBYUEsR0FBR0EsSUFBSUEsVUFBVUEsQ0FBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtRQUM1REEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBSUEsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLEdBQUdBLG1CQUFtQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDckRBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUVBLGFBQWFBLENBQUVBLENBQUNBO1FBQ3JDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxnQkFBZ0JBLENBQUVBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUdBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBLEVBQXBCQSxDQUFvQkEsQ0FBRUEsQ0FBQ0E7SUFFakZBLENBQUNBO0lBRU9ELHdDQUFZQSxHQUFwQkEsVUFBc0JBLENBQUNBO1FBQXZCRSxpQkFNQ0E7UUFIQUEsSUFBSUEsTUFBTUEsR0FBb0NBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBO1FBQ3ZEQSxJQUFJQSxLQUFLQSxHQUFzQkEsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDcEVBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLFVBQUVBLEtBQUtBLElBQU1BLE9BQUFBLEtBQUlBLENBQUNBLFdBQVdBLENBQUVBLEtBQUtBLENBQUVBLEVBQXpCQSxDQUF5QkEsQ0FBQ0E7SUFDdkRBLENBQUNBO0lBRU9GLHVDQUFXQSxHQUFuQkEsVUFBcUJBLEtBQUtBO1FBRXpCRyxJQUFJQSxLQUFLQSxHQUF5Q0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFFL0RBLElBQUlBLElBQUlBLEdBQXdCQSxJQUFJQSxTQUFTQSxDQUFFQSxDQUFDQSxFQUFHQSxDQUFDQSxFQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFFQSxDQUFDQTtRQUVwRkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBRUEsT0FBT0EsRUFBR0EsS0FBS0EsQ0FBRUEsQ0FBQ0E7UUFFL0JBLElBQUlBLENBQUNBLFVBQVVBLEdBQTJCQSxJQUFJQSxVQUFVQSxDQUFFQSxLQUFLQSxDQUFDQSxLQUFLQSxFQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFFQSxDQUFDQTtRQUN2RkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBRUEsS0FBS0EsRUFBR0EsSUFBSUEsRUFBSUEsSUFBSUEsQ0FBRUEsQ0FBQ0E7UUFFbERBLElBQUlBLENBQUNBLE1BQU1BLEdBQStCQSxJQUFJQSxhQUFhQSxDQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFHQSxJQUFJQSxDQUFFQSxFQUFDQSxzREFBc0RBO1FBRTVJQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFFQSxZQUFZQSxFQUFhQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFFQSxDQUFDQTtRQUN0REEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBRUEsZUFBZUEsRUFBU0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBRUEsQ0FBQ0E7SUFFbERBLENBQUNBO0lBQ0ZILHdCQUFDQTtBQUFEQSxDQTlDQSxBQThDQ0EsSUFBQSIsImZpbGUiOiJ0ZXh0dXJlcy9CaXRtYXBUZXh0dXJlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3Rlc3RzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpdG1hcERhdGFcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvYmFzZS9CaXRtYXBEYXRhXCIpO1xuaW1wb3J0IFJlY3RhbmdsZVx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL1JlY3RhbmdsZVwiKTtcbmltcG9ydCBVUkxMb2FkZXJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlclwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMUmVxdWVzdFwiKTtcbmltcG9ydCBFdmVudFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9FdmVudFwiKTtcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xuaW1wb3J0IEJpdG1hcFRleHR1cmVcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3RleHR1cmVzL0JpdG1hcFRleHR1cmVcIik7XG5pbXBvcnQgRGVidWdcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9EZWJ1Z1wiKTtcblxuY2xhc3MgQml0bWFwVGV4dHVyZVRlc3RcbntcblxuXHRwcml2YXRlIG1pcExvYWRlciAgICAgICA6IFVSTExvYWRlcjtcblx0cHJpdmF0ZSBiaXRtYXBEYXRhICAgICAgOiBCaXRtYXBEYXRhO1xuXHRwcml2YXRlIHRhcmdldCAgICAgICAgICA6IEJpdG1hcFRleHR1cmU7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIExvYWQgYSBQTkdcblxuXHRcdHZhciBtaXBVcmxSZXF1ZXN0ID0gbmV3IFVSTFJlcXVlc3QoICdhc3NldHMvMTAyNHgxMDI0LnBuZycpO1xuXHRcdHRoaXMubWlwTG9hZGVyICA9IG5ldyBVUkxMb2FkZXIoKTtcblx0XHR0aGlzLm1pcExvYWRlci5kYXRhRm9ybWF0ID0gVVJMTG9hZGVyRGF0YUZvcm1hdC5CTE9CO1xuXHRcdHRoaXMubWlwTG9hZGVyLmxvYWQoIG1pcFVybFJlcXVlc3QgKTtcblx0XHR0aGlzLm1pcExvYWRlci5hZGRFdmVudExpc3RlbmVyKCBFdmVudC5DT01QTEVURSAsIChlKSA9PiB0aGlzLm1pcEltZ0xvYWRlZChlKSApO1xuXG5cdH1cblxuXHRwcml2YXRlIG1pcEltZ0xvYWRlZCggZSApXG5cdHtcblxuXHRcdHZhciBsb2FkZXIgIDogVVJMTG9hZGVyICAgICAgICA9IDxVUkxMb2FkZXIgPiBlLnRhcmdldDtcblx0XHR2YXIgaW1hZ2UgOiBIVE1MSW1hZ2VFbGVtZW50ID0gUGFyc2VyVXRpbHMuYmxvYlRvSW1hZ2UobG9hZGVyLmRhdGEpO1xuXHRcdGltYWdlLm9ubG9hZCA9ICggZXZlbnQgKSA9PiB0aGlzLm9uSW1hZ2VMb2FkKCBldmVudCApO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkltYWdlTG9hZCAoZXZlbnQpXG5cdHtcblx0XHR2YXIgaW1hZ2UgOiBIVE1MSW1hZ2VFbGVtZW50ID0gPEhUTUxJbWFnZUVsZW1lbnQ+IGV2ZW50LnRhcmdldDtcblxuXHRcdHZhciByZWN0ICAgIDogUmVjdGFuZ2xlICAgICAgID0gbmV3IFJlY3RhbmdsZSggMCAsIDAgLCBpbWFnZS53aWR0aCAsIGltYWdlLmhlaWdodCApO1xuXG5cdFx0Y29uc29sZS5sb2coICdFdmVudCcgLCBpbWFnZSApO1xuXG5cdFx0dGhpcy5iaXRtYXBEYXRhICAgICAgICAgICAgICAgICAgICAgICAgID0gbmV3IEJpdG1hcERhdGEoIGltYWdlLndpZHRoICwgaW1hZ2UuaGVpZ2h0ICk7XG5cdFx0dGhpcy5iaXRtYXBEYXRhLmRyYXdJbWFnZSggaW1hZ2UgLCByZWN0ICwgIHJlY3QgKTtcblxuXHRcdHRoaXMudGFyZ2V0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IG5ldyBCaXRtYXBUZXh0dXJlKCB0aGlzLmJpdG1hcERhdGEgLCB0cnVlICk7Ly9uZXcgSFRNTEltYWdlRWxlbWVudFRleHR1cmUoIGxvYWRlci5pbWFnZSAsIGZhbHNlICk7XG5cblx0XHREZWJ1Zy5sb2coICdCaXRtYXBEYXRhJyAgICAgICAgICAgLCB0aGlzLmJpdG1hcERhdGEgKTtcblx0XHREZWJ1Zy5sb2coICdCaXRtYXBUZXh0dXJlJyAgICAgICAsIHRoaXMudGFyZ2V0ICk7XG5cblx0fVxufSJdfQ==