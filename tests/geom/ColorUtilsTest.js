var ColorTransform = require("awayjs-core/lib/geom/ColorTransform");
var ColorUtils = require("awayjs-core/lib/utils/ColorUtils");
var ColorUtilsTest = (function () {
    function ColorUtilsTest() {
        /*
        constructor(    inRedMultiplier:number = 1.0,  inGreenMultiplier:number = 1.0, inBlueMultiplier:number = 1.0,  inAlphaMultiplier:number = 1.0,
                        inRedOffset:number = 0.0,      inGreenOffset:number = 0.0,     inBlueOffset:number = 0.0,      inAlphaOffset:number = 0.0)
        */
        var ct_RED = new ColorTransform(1, 0, 0, 1, 255, 0, 0, 255);
        console.log("ct_RED - ARGB: ", ColorUtils.float32ColorToARGB(ct_RED.color));
        var ct_GREEN = new ColorTransform(0, 1, 0, 1, 0, 255, 0, 255);
        console.log("ct_GREEN - ARGB: ", ColorUtils.float32ColorToARGB(ct_GREEN.color));
        var ct_BLUE = new ColorTransform(0, 0, 1, 1, 0, 0, 255, 255);
        console.log("ct_BLUE - ARGB: ", ColorUtils.float32ColorToARGB(ct_BLUE.color));
        var ct_RED_a = new ColorTransform(.5, 0, 0, 1, 255, 0, 0, 255);
        console.log("ct_RED_a - ARGB: ", ColorUtils.float32ColorToARGB(ct_RED_a.color));
        var ct_GREEN_a = new ColorTransform(0, .5, 0, 1, 0, 255, 0, 255);
        console.log("ct_GREEN_a - ARGB: ", ColorUtils.float32ColorToARGB(ct_GREEN_a.color));
        var ct_BLUE_a = new ColorTransform(0, 0, .5, 1, 0, 0, 255, 255);
        console.log("ct_BLUE_a - ARGB: ", ColorUtils.float32ColorToARGB(ct_BLUE_a.color));
        console.log('--------------------------------------------------------------------------------');
        ct_RED.color = 0xff0000;
        console.log("SET - ct_RED - ARGB: ", ColorUtils.float32ColorToARGB(ct_RED.color));
        ct_GREEN.color = 0x00ff00;
        console.log("SET - ct_GREEN - ARGB: ", ColorUtils.float32ColorToARGB(ct_GREEN.color));
        ct_BLUE.color = 0x0000ff;
        console.log("SET - ct_BLUE - ARGB: ", ColorUtils.float32ColorToARGB(ct_BLUE.color));
    }
    return ColorUtilsTest;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb20vY29sb3J1dGlsc3Rlc3QudHMiXSwibmFtZXMiOlsiQ29sb3JVdGlsc1Rlc3QiLCJDb2xvclV0aWxzVGVzdC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxjQUFjLFdBQWEscUNBQXFDLENBQUMsQ0FBQztBQUN6RSxJQUFPLFVBQVUsV0FBYyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRW5FLElBQU0sY0FBYztJQUVuQkEsU0FGS0EsY0FBY0E7UUFJbEJDOzs7VUFHRUE7UUFFRkEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFNURBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFFQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUU3RUEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFOURBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1CQUFtQkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFFQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVqRkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFN0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUU5RUEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFL0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1CQUFtQkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVoRkEsSUFBSUEsVUFBVUEsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFakVBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVwRkEsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFaEVBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG9CQUFvQkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFFQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUduRkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0ZBQWtGQSxDQUFDQSxDQUFDQTtRQUVoR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDeEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHVCQUF1QkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVsRkEsUUFBUUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHlCQUF5QkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUV0RkEsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDekJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHdCQUF3QkEsRUFBRUEsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNyRkEsQ0FBQ0E7SUFDRkQscUJBQUNBO0FBQURBLENBN0NBLEFBNkNDQSxJQUFBIiwiZmlsZSI6Imdlb20vQ29sb3JVdGlsc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiLi90ZXN0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvclRyYW5zZm9ybVx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9nZW9tL0NvbG9yVHJhbnNmb3JtXCIpO1xuaW1wb3J0IENvbG9yVXRpbHNcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9Db2xvclV0aWxzXCIpO1xuXG5jbGFzcyBDb2xvclV0aWxzVGVzdFxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHQvKlxuXHRcdGNvbnN0cnVjdG9yKCAgICBpblJlZE11bHRpcGxpZXI6bnVtYmVyID0gMS4wLCAgaW5HcmVlbk11bHRpcGxpZXI6bnVtYmVyID0gMS4wLCBpbkJsdWVNdWx0aXBsaWVyOm51bWJlciA9IDEuMCwgIGluQWxwaGFNdWx0aXBsaWVyOm51bWJlciA9IDEuMCxcblx0XHRcdFx0XHRcdGluUmVkT2Zmc2V0Om51bWJlciA9IDAuMCwgICAgICBpbkdyZWVuT2Zmc2V0Om51bWJlciA9IDAuMCwgICAgIGluQmx1ZU9mZnNldDpudW1iZXIgPSAwLjAsICAgICAgaW5BbHBoYU9mZnNldDpudW1iZXIgPSAwLjApXG5cdFx0Ki9cblxuXHRcdHZhciBjdF9SRUQgPSBuZXcgQ29sb3JUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMjU1LCAwLCAwLCAyNTUpO1xuXG5cdFx0Y29uc29sZS5sb2coXCJjdF9SRUQgLSBBUkdCOiBcIiwgQ29sb3JVdGlscy5mbG9hdDMyQ29sb3JUb0FSR0IoIGN0X1JFRC5jb2xvcikpO1xuXG5cdFx0dmFyIGN0X0dSRUVOID0gbmV3IENvbG9yVHJhbnNmb3JtKDAsIDEsIDAsIDEsIDAsIDI1NSwgMCwgMjU1KTtcblxuXHRcdGNvbnNvbGUubG9nKFwiY3RfR1JFRU4gLSBBUkdCOiBcIiwgQ29sb3JVdGlscy5mbG9hdDMyQ29sb3JUb0FSR0IoIGN0X0dSRUVOLmNvbG9yKSk7XG5cblx0XHR2YXIgY3RfQkxVRSA9IG5ldyBDb2xvclRyYW5zZm9ybSgwLCAwLCAxLCAxLCAwLCAwLCAyNTUsIDI1NSk7XG5cblx0XHRjb25zb2xlLmxvZyhcImN0X0JMVUUgLSBBUkdCOiBcIiwgQ29sb3JVdGlscy5mbG9hdDMyQ29sb3JUb0FSR0IoY3RfQkxVRS5jb2xvcikpO1xuXG5cdFx0dmFyIGN0X1JFRF9hID0gbmV3IENvbG9yVHJhbnNmb3JtKC41LCAwLCAwLCAxLCAyNTUsIDAsIDAsIDI1NSk7XG5cblx0XHRjb25zb2xlLmxvZyhcImN0X1JFRF9hIC0gQVJHQjogXCIsIENvbG9yVXRpbHMuZmxvYXQzMkNvbG9yVG9BUkdCKGN0X1JFRF9hLmNvbG9yKSk7XG5cblx0XHR2YXIgY3RfR1JFRU5fYSA9IG5ldyBDb2xvclRyYW5zZm9ybSgwLCAuNSwgMCwgMSwgMCwgMjU1LCAwLCAyNTUpO1xuXG5cdFx0Y29uc29sZS5sb2coXCJjdF9HUkVFTl9hIC0gQVJHQjogXCIsIENvbG9yVXRpbHMuZmxvYXQzMkNvbG9yVG9BUkdCKGN0X0dSRUVOX2EuY29sb3IpKTtcblxuXHRcdHZhciBjdF9CTFVFX2EgPSBuZXcgQ29sb3JUcmFuc2Zvcm0oMCwgMCwgLjUsIDEsIDAsIDAsIDI1NSwgMjU1KTtcblxuXHRcdGNvbnNvbGUubG9nKFwiY3RfQkxVRV9hIC0gQVJHQjogXCIsIENvbG9yVXRpbHMuZmxvYXQzMkNvbG9yVG9BUkdCKCBjdF9CTFVFX2EuY29sb3IpKTtcblxuXG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cblx0XHRjdF9SRUQuY29sb3IgPSAweGZmMDAwMDtcblx0XHRjb25zb2xlLmxvZyhcIlNFVCAtIGN0X1JFRCAtIEFSR0I6IFwiLCBDb2xvclV0aWxzLmZsb2F0MzJDb2xvclRvQVJHQihjdF9SRUQuY29sb3IpKTtcblxuXHRcdGN0X0dSRUVOLmNvbG9yID0gMHgwMGZmMDA7XG5cdFx0Y29uc29sZS5sb2coXCJTRVQgLSBjdF9HUkVFTiAtIEFSR0I6IFwiLCBDb2xvclV0aWxzLmZsb2F0MzJDb2xvclRvQVJHQihjdF9HUkVFTi5jb2xvcikpO1xuXG5cdFx0Y3RfQkxVRS5jb2xvciA9IDB4MDAwMGZmO1xuXHRcdGNvbnNvbGUubG9nKFwiU0VUIC0gY3RfQkxVRSAtIEFSR0I6IFwiLCBDb2xvclV0aWxzLmZsb2F0MzJDb2xvclRvQVJHQihjdF9CTFVFLmNvbG9yKSk7XG5cdH1cbn0iXX0=