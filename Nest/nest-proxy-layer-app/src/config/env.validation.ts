/**
 * Lightweight environment validation. Throws at bootstrap if required
 * variables are missing so misconfiguration fails fast.
 */
export function validateEnv(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const required = [
    'BIGCOMMERCE_B2B_API_BASE_URL',
    'BIGCOMMERCE_B2B_AUTH_TOKEN',
    'BIGCOMMERCE_B2B_STORE_HASH',
  ];
  const missing = required.filter((key) => {
    const value = config[key];
    return (
      value === undefined ||
      value === null ||
      `${value as string}`.trim() === ''
    );
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`,
    );
  }

  return config;
}
