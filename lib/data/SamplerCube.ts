import SamplerBase				= require("awayjs-core/lib/data/SamplerBase");
import ImageCube				= require("awayjs-core/lib/data/ImageCube");

/**
 * The Bitmap class represents display objects that represent bitmap images.
 * These can be images that you load with the <code>flash.Assets</code> or
 * <code>flash.display.Loader</code> classes, or they can be images that you
 * create with the <code>Bitmap()</code> constructor.
 *
 * <p>The <code>Bitmap()</code> constructor allows you to create a Bitmap
 * object that contains a reference to a BitmapData object. After you create a
 * Bitmap object, use the <code>addChild()</code> or <code>addChildAt()</code>
 * method of the parent DisplayObjectContainer instance to place the bitmap on
 * the display list.</p>
 *
 * <p>A Bitmap object can share its BitmapData reference among several Bitmap
 * objects, independent of translation or rotation properties. Because you can
 * create multiple Bitmap objects that reference the same BitmapData object,
 * multiple texture objects can use the same complex BitmapData object without
 * incurring the memory overhead of a BitmapData object for each texture
 * object instance.</p>

 */
class SamplerCube extends SamplerBase
{
	public static assetType:string = "[asset SamplerCube]";

	/**
	 *
	 * @returns {string}
	 */
	public get assetType():string
	{
		return SamplerCube.assetType;
	}

	/**
	 * The ImageCube object being referenced.
	 */
	public imageCube:ImageCube;

	/**
	 *
	 * @param bitmapData
	 * @param smoothing
	 */
	constructor(imageCube:ImageCube = null)
	{
		super();

		this.imageCube = imageCube;
	}
}

export = SamplerCube;