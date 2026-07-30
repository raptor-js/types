import type { HttpError } from "./http-error.ts";
import type { ConnInfo } from "./conn-info.ts";

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
   * The connection the request arrived on, where the runtime exposes one.
   */
  readonly connection?: ConnInfo;

  /**
   * An error caught by the system.
   */
  error?: HttpError | Error;

  /**
   * Check if the response has a content-type set.
   */
  hasContentType(): boolean;
}
