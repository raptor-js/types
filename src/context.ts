import type { HttpError } from "./http-error.ts";

export interface Context {
  /**
   * The current HTTP request.
   */
  request: Request;

  /**
   * The current HTTP response.
   */
  response: Response;

  /**
   * An error caught by the system.
   */
  error?: HttpError | Error;

  /**
   * Check if the response has a content-type set.
   */
  hasContentType(): boolean;
}
