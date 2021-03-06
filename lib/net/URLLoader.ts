import URLLoaderDataFormat			= require("awayjs-core/lib/net/URLLoaderDataFormat");
import URLRequest					= require("awayjs-core/lib/net/URLRequest");
import URLRequestMethod				= require("awayjs-core/lib/net/URLRequestMethod");
import URLVariables					= require("awayjs-core/lib/net/URLVariables");
import AwayEvent					= require("awayjs-core/lib/events/Event");
import EventDispatcher				= require("awayjs-core/lib/events/EventDispatcher");
import HTTPStatusEvent				= require("awayjs-core/lib/events/HTTPStatusEvent");
import IOErrorEvent					= require("awayjs-core/lib/events/IOErrorEvent");
import AwayProgressEvent			= require("awayjs-core/lib/events/ProgressEvent");

/**
 * The URLLoader is used to load a single file, as part of a resource.
 *
 * While URLLoader can be used directly, e.g. to create a third-party asset
 * management system, it's recommended to use any of the classes Loader3D, LoaderSession
 * and AssetLibrary instead in most cases.
 *
 * @see LoaderSession
 * @see away.library.AssetLibrary
 */
class URLLoader extends EventDispatcher
{
	private _XHR:XMLHttpRequest;
	private _bytesLoaded:number = 0;
	private _bytesTotal:number = 0;
	private _dataFormat:string = URLLoaderDataFormat.TEXT;
	private _loadError:boolean = false;

	private _request:URLRequest;
	private _data:any;

	private _loadStartEvent:AwayEvent;
	private _loadErrorEvent:IOErrorEvent;
	private _loadCompleteEvent:AwayEvent;
	private _progressEvent:AwayProgressEvent;

	/**
	 * Creates a new URLLoader object.
	 */
	constructor()
	{
		super();
	}

	/**
	 *
	 */
	public get url():string
	{

		return this._request? this._request.url : '';
	}

	/**
	 *
	 */
	public get data():any
	{
		return this._data;
	}


	/**
	 *
	 * URLLoaderDataFormat.BINARY
	 * URLLoaderDataFormat.TEXT
	 * URLLoaderDataFormat.VARIABLES
	 *
	 * @param format
	 */
	public set dataFormat(format:string)
	{
		this._dataFormat = format;
	}

	public get dataFormat():string
	{
		return this._dataFormat;
	}

	/**
	 *
	 * @returns {number}
	 */
	public get bytesLoaded():number
	{
		return this._bytesLoaded;
	}

	/**
	 *
	 * @returns {number}
	 */
	public get bytesTotal():number
	{
		return this._bytesTotal;
	}

	/**
	 * Load a resource from a file.
	 *
	 * @param request The URLRequest object containing the URL of the object to be loaded.
	 */
	public load(request:URLRequest):void
	{
		this._request = request;

		this.initXHR();

		if (request.method === URLRequestMethod.POST)
			this.postRequest(request);
		else
			this.getRequest(request);
	}

	/**
	 *
	 */
	public close():void
	{
		this._XHR.abort();
		this.disposeXHR();
	}

	/**
	 *
	 */
	public dispose():void
	{
		if (this._XHR)
			this._XHR.abort();

		this.disposeXHR();

		this._data = null;
		this._dataFormat = null;
		this._bytesLoaded = null;
		this._bytesTotal = null;
	}

	/**
	 *
	 * @param xhr
	 * @param responseType
	 */
	private setResponseType(xhr:XMLHttpRequest, responseType:string):void
	{
		switch (responseType) {
			case URLLoaderDataFormat.ARRAY_BUFFER:
			case URLLoaderDataFormat.BLOB:
			case URLLoaderDataFormat.TEXT:
				xhr.responseType = responseType;
				break;

			case URLLoaderDataFormat.VARIABLES:
				xhr.responseType = URLLoaderDataFormat.TEXT;
				break;

			case URLLoaderDataFormat.BINARY:
				xhr.responseType = '';
				break;

			default:
		}
	}

	/**
	 *
	 * @param request {URLRequest}
	 */
	private getRequest(request:URLRequest):void
	{
		try {
			this._XHR.open(request.method, request.url, request.async);
			this.setResponseType(this._XHR, this._dataFormat);
			this._XHR.send(); // No data to send
		} catch (e /* <XMLHttpRequestException> */) {
			this.handleXmlHttpRequestException(e);
		}
	}

	/**
	 *
	 * @param request {URLRequest}
	 */
	private postRequest(request:URLRequest):void
	{
		this._loadError = false;

		this._XHR.open(request.method, request.url, request.async);

		if (request.data != null) {
			if (request.data instanceof URLVariables) {
				var urlVars:URLVariables = <URLVariables> request.data;

				try {
					this._XHR.responseType = 'text';
					this._XHR.send(urlVars.formData);
				} catch (e /* <XMLHttpRequestException> */) {
					this.handleXmlHttpRequestException(e);
				}
			} else {
				this.setResponseType(this._XHR, this._dataFormat);

				if (request.data)
					this._XHR.send(request.data); // TODO: Test
				else
					this._XHR.send(); // no data to send
			}
		} else {
			this._XHR.send(); // No data to send
		}

	}

	/**
	 *
	 * @param error {XMLHttpRequestException}
	 */
	private handleXmlHttpRequestException(error:any /* <XMLHttpRequestException> */):void
	{
		switch (error.code) {

		/******************************************************************************************************************************************************************************************************
		 *
		 *  XMLHttpRequestException { message: "NETWORK_ERR: XMLHttpRequest Exception 101", name: "NETWORK_ERR", code: 101, stack: "Error: A network error occurred in synchronous req…",NETWORK_ERR: 101… }
		 *  code: 101 , message: "NETWORK_ERR: XMLHttpRequest Exception 101" ,  name: "NETWORK_ERR"
		 *
		 ******************************************************************************************************************************************************************************************************/

			case 101:
				// Note: onLoadError event throws IO_ERROR event - this case is already Covered
				break;
		}
	}

	/**
	 *
	 */
	private initXHR()
	{
		if (!this._XHR) {
			this._XHR = new XMLHttpRequest();

			this._XHR.onloadstart = (event:ProgressEvent) => this.onLoadStart(event);                 // loadstart	        - When the request starts.
			this._XHR.onprogress = (event:ProgressEvent) => this.onProgress(event);	                // progress	            - While loading and sending data.
			this._XHR.onabort = (event:UIEvent) => this.onAbort(event);	                        // abort	            - When the request has been aborted, either by invoking the abort() method or navigating away from the page.
			this._XHR.onerror = (event:ErrorEvent) => this.onLoadError(event);                     // error	            - When the request has failed.
			this._XHR.onload = (event:Event) => this.onLoadComplete(event);                   // load	                - When the request has successfully completed.
			this._XHR.ontimeout = (event:Event) => this.onTimeOut(event);                     // timeout	            - When the author specified timeout has passed before the request could complete.
			this._XHR.onloadend = (event:ProgressEvent) => this.onLoadEnd(event);                     // loadend	            - When the request has completed, regardless of whether or not it was successful.
			this._XHR.onreadystatechange = (event:Event) => this.onReadyStateChange(event);   // onreadystatechange   - When XHR state changes
		}
	}

	/**
	 *
	 */
	private disposeXHR()
	{
		if (this._XHR !== null) {
			this._XHR.onloadstart = null;
			this._XHR.onprogress = null;
			this._XHR.onabort = null;
			this._XHR.onerror = null;
			this._XHR.onload = null;
			this._XHR.ontimeout = null;
			this._XHR.onloadend = null;
			this._XHR = null;
		}
	}

	/**
	 *
	 * @param source
	 */
	public decodeURLVariables(source:string):Object
	{
		var result:Object = new Object();

		source = source.split("+").join(" ");

		var tokens, re = /[?&]?([^=]+)=([^&]*)/g;

		while (tokens = re.exec(source))
			result[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);

		return result;
	}

	// XMLHttpRequest - Event Handlers

	/**
	 * When XHR state changes
	 * @param event
	 */
	private onReadyStateChange(event:Event)
	{
		if (this._XHR.readyState == 4) {
			if (this._XHR.status == 404) {
				this._loadError = true;

				if (!this._loadErrorEvent)
					this._loadErrorEvent = new IOErrorEvent(IOErrorEvent.IO_ERROR);

				this.dispatchEvent(this._loadErrorEvent);
			}

			this.dispatchEvent(new HTTPStatusEvent(HTTPStatusEvent.HTTP_STATUS, this._XHR.status));
		}
	}

	/**
	 * When the request has completed, regardless of whether or not it was successful.
	 * @param event
	 */
	private onLoadEnd(event:ProgressEvent)
	{
		if (this._loadError === true)
			return;
	}

	/**
	 * When the author specified timeout has passed before the request could complete.
	 * @param event
	 */
	private onTimeOut(event:Event)
	{
		//TODO: Timeout not currently implemented ( also not part of AS3 API )
	}

	/**
	 * When the request has been aborted, either by invoking the abort() method or navigating away from the page.
	 * @param event
	 */
	private onAbort(event:UIEvent)
	{
		// TODO: investigate whether this needs to be an IOError
	}

	/**
	 * While loading and sending data.
	 * @param event
	 */
	private onProgress(event:ProgressEvent)
	{
		if (!this._progressEvent)
			this._progressEvent = new AwayProgressEvent(AwayProgressEvent.PROGRESS);

		this._progressEvent.bytesTotal = event.total;
		this._progressEvent.bytesLoaded = event.loaded;

		this.dispatchEvent(this._progressEvent);
	}

	/**
	 * When the request starts.
	 * @param event
	 */
	private onLoadStart(event:ProgressEvent)
	{
		if (!this._loadStartEvent)
			this._loadStartEvent = new AwayEvent(AwayEvent.OPEN);

		this.dispatchEvent(this._loadStartEvent);
	}

	/**
	 * When the request has successfully completed.
	 * @param event
	 */
	private onLoadComplete(event:Event)
	{
		if (this._loadError === true)
			return;

		switch (this._dataFormat) {
			case URLLoaderDataFormat.TEXT:
				this._data = this._XHR.responseText;
				break;

			case URLLoaderDataFormat.VARIABLES:
				this._data = this.decodeURLVariables(this._XHR.responseText);
				break;

			case URLLoaderDataFormat.BLOB:
			case URLLoaderDataFormat.ARRAY_BUFFER:
			case URLLoaderDataFormat.BINARY:
				this._data = this._XHR.response;
				break;

			default:
				this._data = this._XHR.responseText;
				break;
		}

		if (!this._loadCompleteEvent)
			this._loadCompleteEvent = new AwayEvent(AwayEvent.COMPLETE);

		this.dispatchEvent(this._loadCompleteEvent);
	}

	/**
	 * When the request has failed. ( due to network issues ).
	 * @param event
	 */
	private onLoadError(event:Event)
	{
		this._loadError = true;

		if (!this._loadErrorEvent)
			this._loadErrorEvent = new IOErrorEvent(IOErrorEvent.IO_ERROR);

		this.dispatchEvent(this._loadErrorEvent);
	}
}

export = URLLoader;