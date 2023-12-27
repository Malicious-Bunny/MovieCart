import StringSplit from '../scripts/StringSplit'
import {test} from 'vitest'
import {expect} from 'vitest'
import Checknum from '../scripts/Checknum'
test('BEATIT', () => {
    const str = '?BEAT?IT'
    const result = StringSplit(str, '?')

    expect(result).toEqual(['BEAT', 'IT'])
})

test('Checknum', () => {
    const num = 'djijsjdid9999';
    const result = Checknum(num)
    expect(result).toEqual(true)
})