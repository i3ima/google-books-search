import chalk from "chalk";
import { DEV } from "config";

export enum LogSeverity {
 INFO,
 WARN,
 ERROR,
}

const debug = (message: string, severity: LogSeverity) => {
 if (!DEV) {
	return;
 }
 switch (severity) {
	case LogSeverity.INFO:
	 console.log(chalk.green(`[INFO] ${message}`));
	 return;
	case LogSeverity.WARN:
	 console.log(chalk.yellow(`[WARN] ${message}`));
	 return;
	case LogSeverity.ERROR:
	 console.log(chalk.red(`[ERROR] ${message}`));
 }
};

export default debug;
