var ByteArray = require("awayjs-core/lib/utils/ByteArray");
/**
 *
 */
var ByteArrayTest = (function () {
    function ByteArrayTest() {
        var b1 = new ByteArray();
        b1.writeByte(0xFF);
        b1.writeByte(0xEE);
        b1.writeByte(0xDD);
        b1.writeByte(0xCC);
        b1.writeByte(0xBB);
        b1.writeByte(0xAA);
        var b2 = new ByteArray();
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.position = 0;
        b1.position = 0;
        b1.readBytes(b2, 2, 2);
        console.log('b1.position', b1.position);
        console.log('b2.length', b2.length, 'b2.position', b2.position);
        while (b2.getBytesAvailable()) {
            console.log(b2.readByte().toString(16));
        }
    }
    return ByteArrayTest;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2J5dGVhcnJheXRlc3QudHMiXSwibmFtZXMiOlsiQnl0ZUFycmF5VGVzdCIsIkJ5dGVBcnJheVRlc3QuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sU0FBUyxXQUFhLGlDQUFpQyxDQUFDLENBQUM7QUFFaEUsQUFHQTs7R0FERztJQUNHLGFBQWE7SUFFbEJBLFNBRktBLGFBQWFBO1FBSWpCQyxJQUFJQSxFQUFFQSxHQUFhQSxJQUFJQSxTQUFTQSxFQUFFQSxDQUFDQTtRQUNuQ0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBRUEsSUFBSUEsQ0FBRUEsQ0FBQ0E7UUFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUVBLElBQUlBLENBQUVBLENBQUNBO1FBQ3JCQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFFQSxJQUFJQSxDQUFFQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBRUEsSUFBSUEsQ0FBRUEsQ0FBQ0E7UUFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUVBLElBQUlBLENBQUVBLENBQUNBO1FBQ3JCQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFFQSxJQUFJQSxDQUFFQSxDQUFDQTtRQUVyQkEsSUFBSUEsRUFBRUEsR0FBYUEsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUVBLElBQUlBLENBQUVBLENBQUNBO1FBQ3JCQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFFQSxJQUFJQSxDQUFFQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBRUEsSUFBSUEsQ0FBRUEsQ0FBQ0E7UUFDckJBLEVBQUVBLENBQUNBLFNBQVNBLENBQUVBLElBQUlBLENBQUVBLENBQUNBO1FBQ3JCQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFFQSxJQUFJQSxDQUFFQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBRUEsSUFBSUEsQ0FBRUEsQ0FBQ0E7UUFFckJBLEVBQUVBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2hCQSxFQUFFQSxDQUFDQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUVoQkEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBRUEsQ0FBQ0E7UUFFekJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUVBLGFBQWFBLEVBQUdBLEVBQUVBLENBQUNBLFFBQVFBLENBQUVBLENBQUNBO1FBQzNDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFFQSxXQUFXQSxFQUFHQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFHQSxhQUFhQSxFQUFHQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFFQSxDQUFDQTtRQUVyRUEsT0FBUUEsRUFBRUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxFQUM5QkEsQ0FBQ0E7WUFDQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBRUEsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBRUEsRUFBRUEsQ0FBRUEsQ0FBRUEsQ0FBQ0E7UUFDN0NBLENBQUNBO0lBQ0ZBLENBQUNBO0lBQ0ZELG9CQUFDQTtBQUFEQSxDQWpDQSxBQWlDQ0EsSUFBQSIsImZpbGUiOiJ1dGlscy9CeXRlQXJyYXlUZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vdGVzdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnl0ZUFycmF5XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL0J5dGVBcnJheVwiKTtcblxuLyoqXG4gKiBcbiAqL1xuY2xhc3MgQnl0ZUFycmF5VGVzdFxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR2YXIgYjE6Qnl0ZUFycmF5ID0gbmV3IEJ5dGVBcnJheSgpO1xuXHRcdGIxLndyaXRlQnl0ZSggMHhGRiApO1xuXHRcdGIxLndyaXRlQnl0ZSggMHhFRSApO1xuXHRcdGIxLndyaXRlQnl0ZSggMHhERCApO1xuXHRcdGIxLndyaXRlQnl0ZSggMHhDQyApO1xuXHRcdGIxLndyaXRlQnl0ZSggMHhCQiApO1xuXHRcdGIxLndyaXRlQnl0ZSggMHhBQSApO1xuXG5cdFx0dmFyIGIyOkJ5dGVBcnJheSA9IG5ldyBCeXRlQXJyYXkoKTtcblx0XHRiMi53cml0ZUJ5dGUoIDB4MDAgKTtcblx0XHRiMi53cml0ZUJ5dGUoIDB4MDAgKTtcblx0XHRiMi53cml0ZUJ5dGUoIDB4MDAgKTtcblx0XHRiMi53cml0ZUJ5dGUoIDB4MDAgKTtcblx0XHRiMi53cml0ZUJ5dGUoIDB4MDAgKTtcblx0XHRiMi53cml0ZUJ5dGUoIDB4MDAgKTtcblxuXHRcdGIyLnBvc2l0aW9uID0gMDtcblx0XHRiMS5wb3NpdGlvbiA9IDA7XG5cblx0XHRiMS5yZWFkQnl0ZXMoIGIyLCAyLCAyICk7XG5cblx0XHRjb25zb2xlLmxvZyggJ2IxLnBvc2l0aW9uJyAsIGIxLnBvc2l0aW9uICk7XG5cdFx0Y29uc29sZS5sb2coICdiMi5sZW5ndGgnICwgYjIubGVuZ3RoICwgJ2IyLnBvc2l0aW9uJyAsIGIyLnBvc2l0aW9uICk7XG5cblx0XHR3aGlsZSAoIGIyLmdldEJ5dGVzQXZhaWxhYmxlKCkgKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKCBiMi5yZWFkQnl0ZSgpLnRvU3RyaW5nKCAxNiApICk7XG5cdFx0fVxuXHR9XG59Il19