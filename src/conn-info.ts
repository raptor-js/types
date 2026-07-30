/**
 * The network connection an HTTP request arrived on.
 */
export interface ConnInfo {
  /**
   * The remote peer of the connection.
   */
  remote: {
    /**
     * The remote IP address, in canonical form.
     */
    address?: string;

    /**
     * The remote port.
     */
    port?: number;

    /**
     * The address family.
     */
    addressType?: "IPv4" | "IPv6";
  };
}
