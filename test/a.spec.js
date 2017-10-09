import assert from 'assert'
import A from '../src/a'

describe('A', () => {
  describe('#name', () => {
    it('returns "A"', () => {
      assert.equal('A', A.name)
    })
  })
})
