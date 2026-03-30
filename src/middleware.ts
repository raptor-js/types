import type { Context } from "./context.ts";

export type Next = () => unknown;

/**
 * Middleware function that processes a response.
 */
export type Middleware = (
  context: Context,
  next: Next,
) => unknown;
