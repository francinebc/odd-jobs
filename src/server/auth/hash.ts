import * as sodium from 'libsodium-wrappers'

export default {
  generateHash,
  verify
}

function generateHash (password: string) {
  // We have to wait for sodium to initialise. sodium.ready is a promise.
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str(
      password,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_MIN
    )
  )
}

function verify (hash: string, password: string) {
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str_verify(hash, password))
}