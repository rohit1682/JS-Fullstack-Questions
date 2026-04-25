export interface AppConfig {
  port: number;
  nodeEnv: string;
  logLevel: string;
}

export interface BigCommerceConfig {
  baseUrl: string;
  authToken: string;
  storeHash: string;
  timeoutMs: number;
}

export interface ExternalApiConfig {
  baseUrl: string;
  timeoutMs: number;
}

export interface RootConfig {
  app: AppConfig;
  bigCommerce: BigCommerceConfig;
  externalApi: ExternalApiConfig;
}

const loadConfiguration = (): RootConfig => ({
  app: {
    port: Number.parseInt(process.env.PORT ?? '3000', 10),
    nodeEnv: process.env.NODE_ENV ?? 'development',
    logLevel: process.env.LOG_LEVEL ?? 'info',
  },
  bigCommerce: {
    baseUrl:
      process.env.BIGCOMMERCE_B2B_API_BASE_URL ??
      'https://api-b2b.bigcommerce.com/api/v3/io',
    authToken: process.env.BIGCOMMERCE_B2B_AUTH_TOKEN ?? '',
    storeHash: process.env.BIGCOMMERCE_B2B_STORE_HASH ?? '',
    timeoutMs: Number.parseInt(
      process.env.BIGCOMMERCE_B2B_REQUEST_TIMEOUT_MS ?? '15000',
      10,
    ),
  },
  externalApi: {
    baseUrl: process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
    timeoutMs: Number.parseInt(
      process.env.API_REQUEST_TIMEOUT_MS ?? '10000',
      10,
    ),
  },
});

export default loadConfiguration;
