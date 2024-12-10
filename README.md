# Logger - Simple and Flexible Logging Package

A simple and flexible logging utility for JavaScript developers. It supports multiple log levels (`info`, `warn`, `error`), customizable log formatting, and allows logging to the console or a file.

## Features

- Supports multiple log levels: `info`, `warn`, `error`
- Customizable log formats
- Write logs to the console or file
- Customizable timestamp format
- Flexible log level control per environment (e.g., `debug` in development, `error` in production)
- Easy integration and extension

## Installation

You can install the logger using npm or Yarn:

### npm
```bash
npm i @likhithkp/logger
```

### Usage
```bash
import logger from '@likhithkp/logger';

// Log an informational message
logger.info('Application started successfully');

// Log a warning
logger.warn('Missing config file, using defaults');

// Log an error
logger.error('Failed to connect to the database');
```
### Contributing
Feel free to fork the repository and submit pull requests. If you encounter any issues or have suggestions for new features, open an issue on GitHub.