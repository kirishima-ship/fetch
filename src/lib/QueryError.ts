import type { Response } from 'undici';

export class QueryError extends Error {
	public readonly url: string;
	public readonly code: number;
	public readonly body: string;
	public readonly response: Response;

	public constructor(url: string, code: number, response: Response, body: string) {
		super(`Failed to request '${url}' with code ${code}.`);
		this.url = url;
		this.code = code;
		this.body = body;
		this.response = response;
	}
}
