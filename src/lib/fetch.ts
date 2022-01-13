import { fetch as undiciFetch, RequestInfo, RequestInit, Response } from 'undici';
import { QueryError } from './QueryError';
import { FetchResultTypes } from './types';

export async function fetch<T>(input: RequestInfo, init?: RequestInit | undefined, type?: FetchResultTypes.JSON): Promise<T>;
export async function fetch(input: RequestInfo, init?: RequestInit | undefined, type?: FetchResultTypes.Buffer): Promise<Buffer>;
export async function fetch(input: RequestInfo, init?: RequestInit | undefined, type?: FetchResultTypes.Blob): Promise<Blob>;
export async function fetch(input: RequestInfo, init?: RequestInit | undefined, type?: FetchResultTypes.Text): Promise<string>;
export async function fetch(input: RequestInfo, init?: RequestInit | undefined, type?: FetchResultTypes) {
	const result: Response = await undiciFetch(input, init);

	if (!result.ok) throw new QueryError(String(input), result.status, result, await result.clone().text());

	switch (type) {
		case FetchResultTypes.Buffer:
			return Buffer.from(await (await result.blob()).arrayBuffer());
		case FetchResultTypes.Blob:
			return result.blob();
		case FetchResultTypes.JSON:
			return result.json();
		case FetchResultTypes.Text:
			return result.text();
		default:
			return result;
	}
}
