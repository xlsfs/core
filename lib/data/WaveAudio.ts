import IAudioChannel				= require("awayjs-core/lib/managers/IAudioChannel");
import AudioManager				= require("awayjs-core/lib/managers/AudioManager");
import BlendMode				= require("awayjs-core/lib/data/BlendMode");
import ColorTransform			= require("awayjs-core/lib/geom/ColorTransform");
import Matrix					= require("awayjs-core/lib/geom/Matrix");
import Rectangle				= require("awayjs-core/lib/geom/Rectangle");
import IAsset					= require("awayjs-core/lib/library/IAsset");
import AssetBase				= require("awayjs-core/lib/library/AssetBase");
import ParserUtils				= require("awayjs-core/lib/parsers/ParserUtils");
import ColorUtils				= require("awayjs-core/lib/utils/ColorUtils");
import Event					= require("awayjs-core/lib/events/Event");

// TODO: Audio should probably be an interface containing play/stop/seek functionality
class WaveAudio extends AssetBase implements IAsset
{
	public static assetType:string = "[asset WaveAudio]";

	private _audioChannel:IAudioChannel;
	private _volume:number = 1;
	private _buffer:ArrayBuffer;

	/**
	 *
	 * @returns {string}
	 */
	public get assetType():string
	{
		return WaveAudio.assetType;
	}

	public get volume():number
	{
		return this._volume;
	}

	public set volume(value:number)
	{
		if (this._volume == value)
			return;

		this._volume = value;

		if (this._audioChannel)
			this._audioChannel.volume = this._volume;
	}

	public get currentTime():number
	{
		if (this._audioChannel)
			return this._audioChannel.currentTime;

		return 0;
	}

	public get duration():number
	{
		if (this._audioChannel)
			return this._audioChannel.duration;

		return 0;
	}

	/**
	 *
	 */
	constructor(buffer:ArrayBuffer)
	{
		super();

		this._buffer = buffer;
	}

	public dispose()
	{
		this.stop();
	}

	public play(offset:number, loop:boolean = false)
	{
		this._audioChannel = AudioManager.getChannel(this._buffer.byteLength);

		if (this._audioChannel) {
			this._audioChannel.volume = this._volume;
			this._audioChannel.play(this._buffer, offset, loop, this.id);
		}
	}

	public stop()
	{
		if (this._audioChannel)
			this._audioChannel.stop();

		delete this._audioChannel;
		this._audioChannel = null;
	}

	public clone()
	{
		var newInstance:WaveAudio = new WaveAudio(this._buffer);

		newInstance.name = this.name;

		return newInstance;
	}
}

export = WaveAudio;