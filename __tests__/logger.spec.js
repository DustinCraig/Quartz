import { Logger } from '../src/logger'

describe('Logger Class', () => {
    test('Print an info log', () => {
        const output = 'TestLogger: INFO -> Test Message'
        const logger = new Logger('TestLogger')
        expect(logger.info('Test Message')).toEqual(output)
    })
})
