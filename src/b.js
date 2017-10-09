import A from './a'
console.log(`A=${A}`)

export default class B {
  static get name () {
    return 'B'
  }

  static say () {
    console.log(A.name) // eslint-disable-line no-console
  }
}
