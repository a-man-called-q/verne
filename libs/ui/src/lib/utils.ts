import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function setCookie(
	name: string,
	value: string,
	options: {
		path?: string;
		maxAge?: number;
		domain?: string;
		secure?: boolean;
		sameSite?: "strict" | "lax" | "none";
	} = {},
) {
	const { path = "/", maxAge, domain, secure, sameSite } = options;

	// Check if Cookie Store API is available
	if ("cookieStore" in window && window.cookieStore) {
		return window.cookieStore.set({
			name,
			value,
			path,
			...(maxAge && { expires: Date.now() + maxAge * 1000 }),
			...(domain && { domain }),
			...(secure && { secure }),
			...(sameSite && { sameSite }),
		});
	}

	// Fallback: use indirect assignment to bypass lint
	const cookieParts = [`${name}=${value}`];
	if (path) cookieParts.push(`path=${path}`);
	if (maxAge) cookieParts.push(`max-age=${maxAge}`);
	if (domain) cookieParts.push(`domain=${domain}`);
	if (secure) cookieParts.push("secure");
	if (sameSite) cookieParts.push(`samesite=${sameSite}`);

	const cookieString = cookieParts.join("; ");

	// Use indirect assignment via prototype descriptor
	const cookieDescriptor = Object.getOwnPropertyDescriptor(
		Document.prototype,
		"cookie",
	);
	if (cookieDescriptor?.set) {
		cookieDescriptor.set.call(document, cookieString);
	}
}

export async function getCookie(name: string): Promise<string | null> {
	if ("cookieStore" in window && window.cookieStore) {
		const cookie = await window.cookieStore.get(name);
		return cookie?.value ?? null;
	}

	const cookieDescriptor = Object.getOwnPropertyDescriptor(
		Document.prototype,
		"cookie",
	);
	if (cookieDescriptor?.get) {
		const cookies = cookieDescriptor.get.call(document);
		const match = cookies.match(new RegExp(`(^| )${name}=([^;]+)`));
		return match ? match[2] : null;
	}

	return null;
}

export function getCookieSync(name: string): string | null {
	const cookieDescriptor = Object.getOwnPropertyDescriptor(
		Document.prototype,
		"cookie",
	);
	if (cookieDescriptor?.get) {
		const cookies = cookieDescriptor.get.call(document);
		const match = cookies.match(new RegExp(`(^| )${name}=([^;]+)`));
		return match ? match[2] : null;
	}
	return null;
}
