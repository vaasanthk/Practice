const ethers = require("ethers")
const secp = require("ethereum-cryptography/secp256k1")
const { keccak256 } = require("ethereum-cryptography/keccak")

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"

function hashMessage(message) {
  const bytes = ethers.utils.toUtf8Bytes(message)

  return ethers.utils.keccak256(bytes)
}

async function signMessage() {
  //   const messageHash = hashMessage(msg)
  const msg1 =
    "a33321f98e4ff1c283c76998f14f57447545d339b3db534c6d886decb4209f28"
  const sign = await secp.sign(msg1, PRIVATE_KEY, { recovered: true })
  console.log(sign)
}

console.log(signMessage())

// function getAddress(publicKey) {
//   // the first byte indicates whether this is in compressed form or not
//   return keccak256(publicKey.slice(1)).slice(-20)
// }

// console.log(getAddress("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"))

const slice = "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"

console.log(slice.slice(1).slice(-20))
