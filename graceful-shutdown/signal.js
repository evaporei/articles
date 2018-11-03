// process.on('SIGKILL', () => console.log('kill'))
// process.on('SIGSTOP', () => console.log('stop'))
process.on('SIGTERM', () => console.log('term'))
process.on('SIGINT', () => console.log('int'))
process.on('SIGHUP', () => console.log('hup'))

setInterval(() => console.log('doing useless work!'), 10000)
