// @flow
import A from './a'
import B from './b'

A.say()
B.say()

const say = ({ n = 1, s, sep = '\n' }: { n?: number, s: string, sep?: string } = {}) => {
  let ary = []
  for (let i = 0; i < n; i++) {
    ary.push(s)
  }
  console.log(ary.join(sep)) // eslint-disable-line no-console
}

say({ n: 3, s: 'hello', sep: ', ' })
