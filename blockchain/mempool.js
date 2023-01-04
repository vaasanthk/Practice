const SHA256 = require("crypto-js/sha256")
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
const MAX_TRANSACIONS = 10
const mempool = []
const blocks = []

function addTransaction(transacion) {
  mempool.push(transacion)
}

function mine() {
  let transactions = []
  while (transactions.length < MAX_TRANSACIONS && mempool.length > 0) {
    transactions.push(mempool.pop())
  }

  const block = { id: blocks.length, transactions }
  block.nonce = 0
  let hash
  while (true) {
    hash = `0x${SHA256(JSON.stringify(block))}`.toString()
    if (hash < TARGET_DIFFICULTY) {
      break
    }

    block.nonce++
  }

  blocks.push({ ...block, hash })
}

addTransaction({ sender: "bob", to: "alice" })
mine()

console.log(blocks)
