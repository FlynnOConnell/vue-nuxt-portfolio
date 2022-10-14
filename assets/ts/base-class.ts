import { ILogger } from 'typescript-ilogger';
import { LogHelper } from './log-helper';

/**
 * Base class
 */
export class BaseClass {
  /**
   * Logger
   */
  public Logger: ILogger;

  /**
   * Log Helper
   */
  public LogHelper: LogHelper;



  /**
   * Initialize new instance of BaseClass
   * @param logger {ILogger} Logger
   */
  constructor(logger: ILogger) {
    this.Logger = logger;

    this.LogHelper = new LogHelper(this.Logger);

  }
}