class Logger {

    log(message: string) {
        console.log("[LOG]: " + message)
    }

}

const logger = new Logger()

logger.log("TypeScript practice running")