// Orbius | NotX Development
// Author: NOT X
/**
 * Returns a promise that resolves after `ms` milliseconds.
 * @param {number} ms
 * @returns {Promise<void>}
 */
export async function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

/**
 * Project: Orbius
 * Author: NOT X
 * Organization: NotX Development
 * GitHub: https://github.com/notxggs
 * License: Custom
 *
 * © 2026 NotX Development. All rights reserved.
 */
