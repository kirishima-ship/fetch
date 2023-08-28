<div align="center">

![Kirishima Banner](https://i.kagchi.my.id/kirishima-ship-banner.jpg)

# @kirishima/fetch

</div>

# Description
This code is forked from `@sapphire/fetch` [code](https://github.com/sapphiredev/utilities/tree/main/packages/fetch), i forked because of they still uses node-fetch instead undici.
usage may same with `@sapphire/fetch`

# Features
- Written in TypeScript
- Exported const enum for the common return data types.
- Support ESM & CommonJS

# Installation

```
npm install @kirishima/fetch undici
```

# Example

```js
// Import the fetch function
import { fetch, FetchResultTypes } from '@kirishima/fetch';

interface JsonPlaceholderResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// Fetch the data. No need to call `.json()` after making the request!
const data = await fetch<JsonPlaceholderResponse>('https://jsonplaceholder.typicode.com/todos/1', undefined, FetchResultTypes.JSON);

// Do something with the data
console.log(data.userId);
```
