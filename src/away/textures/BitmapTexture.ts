﻿///<reference path="../_definitions.ts"/>

module away.textures
{

	export class BitmapTexture extends away.textures.Texture2DBase
	{
		private static _mipMaps = [];
		private static _mipMapUses = [];

		private _bitmapData:away.base.BitmapData;
		private _mipMapHolder:away.base.BitmapData;
		private _generateMipmaps:boolean;

		constructor(bitmapData:away.base.BitmapData, generateMipmaps:boolean = true)
		{
			super();

			this.bitmapData = bitmapData;
			this._generateMipmaps = generateMipmaps;
		}

		public get bitmapData():away.base.BitmapData
		{

			return this._bitmapData;

		}

		public set bitmapData(value:away.base.BitmapData)
		{

			if (value == this._bitmapData) {

				return;

			}

			if (!away.utils.TextureUtils.isBitmapDataValid(value)) {

				throw new Error("Invalid bitmapData: Width and height must be power of 2 and cannot exceed 2048");

			}


			this.invalidateContent();

			this.pSetSize(value.width, value.height);

			this._bitmapData = value;

			if (this._generateMipmaps) {

				this.getMipMapHolder();

			}

		}

		public pUploadContent(texture:away.gl.TextureBase)
		{

			if (this._generateMipmaps) {

				away.textures.MipmapGenerator.generateMipMaps(this._bitmapData, texture, this._mipMapHolder, true);

			} else {

				var tx:away.gl.Texture = <any> texture;
				tx.uploadFromBitmapData(this._bitmapData, 0);

			}

		}

		private getMipMapHolder()
		{
			var newW:number, newH:number;

			newW = this._bitmapData.width;
			newH = this._bitmapData.height;

			if (this._mipMapHolder) {

				if (this._mipMapHolder.width == newW && this._bitmapData.height == newH) {

					return;

				}


				this.freeMipMapHolder();

			}

			if (!BitmapTexture._mipMaps[newW]) {

				BitmapTexture._mipMaps[newW] = [];
				BitmapTexture._mipMapUses[newW] = [];

			}

			if (!BitmapTexture._mipMaps[newW][newH]) {

				this._mipMapHolder = BitmapTexture._mipMaps[newW][newH] = new away.base.BitmapData(newW, newH, true);
				BitmapTexture._mipMapUses[newW][newH] = 1;

			} else {

				BitmapTexture._mipMapUses[newW][newH] = BitmapTexture._mipMapUses[newW][newH] + 1;
				this._mipMapHolder = BitmapTexture._mipMaps[newW][newH];

			}
		}

		private freeMipMapHolder()
		{
			var holderWidth:number = this._mipMapHolder.width;
			var holderHeight:number = this._mipMapHolder.height;

			if (--BitmapTexture._mipMapUses[holderWidth][holderHeight] == 0) {

				BitmapTexture._mipMaps[holderWidth][holderHeight].dispose();
				BitmapTexture._mipMaps[holderWidth][holderHeight] = null;

			}
		}

		public dispose()
		{
			super.dispose();

			if (this._mipMapHolder) {

				this.freeMipMapHolder();
			}

		}

	}

}
