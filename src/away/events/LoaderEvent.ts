///<reference path="../_definitions.ts"/>

/**
 * @module away.events
 */
module away.events
{
	export class LoaderEvent extends away.events.Event
	{
		/**
		 * Dispatched when a resource and all of its dependencies is retrieved.
		 */
		public static RESOURCE_COMPLETE:string = "resourceComplete";

		private _url:string;
		private _assets:away.library.IAsset[];

		/**
		 * Create a new LoaderEvent object.
		 *
		 * @param type The event type.
		 * @param url The url of the loaded resource.
		 * @param assets The assets of the loaded resource.
		 */
		constructor(type:string, url:string = null, assets:Array<away.library.IAsset> = null)
		{
			super(type);

			this._url = url;
			this._assets = assets;
		}

		/**
		 * The url of the loaded resource.
		 */
		public get url():string
		{
			return this._url;
		}

		/**
		 * The error string on loadError.
		 */
		public get assets():away.library.IAsset[]
		{
			return this._assets;
		}

		/**
		 * Clones the current event.
		 * @return An exact duplicate of the current event.
		 */
		public clone():away.events.Event
		{
			return <away.events.Event> new LoaderEvent(this.type, this._url, this._assets);
		}
	}
}