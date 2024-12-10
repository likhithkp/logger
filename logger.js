import chalk from 'chalk';

function getTimestamp() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

class Logger {
    // Method for info logs
    info(message) {
        console.log(chalk.blue(`[INFO] ${getTimestamp()}: ${message}`));
    }

    // Method for warning logs
    warn(message) {
        console.log(chalk.yellow(`[WARN] ${getTimestamp()}: ${message}`));
    }

    // Method for error logs
    error(message) {
        console.log(chalk.red(`[ERROR] ${getTimestamp()}: ${message}`));
    }
}

export default new Logger();
