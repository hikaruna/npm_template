import B from './b'
console.log(`B=${B}`)

/**
 * Classドキュメントのサンプル.
 * @class
 */
export default class A {
  /** このクラスのname. */
  static get name () {
    return 'A'
  }

  /** B.nameを出力する.  */
  static say () {
    console.log(B.name) // eslint-disable-line no-console
  }
}
