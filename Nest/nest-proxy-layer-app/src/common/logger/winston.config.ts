import { utilities as nestWinstonUtilities } from 'nest-winston';
import * as winston from 'winston';

export const buildWinstonOptions = (
  level: string,
  appName = 'nest-proxy-layer-app',
): winston.LoggerOptions => ({
  level,
  defaultMeta: { service: appName },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonUtilities.format.nestLike(appName, {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
  ],
});
