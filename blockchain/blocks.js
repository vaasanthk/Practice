const SHA256 = require("crypto-js/sha256")

class Block {
  toHash() {
    return SHA256("vasanth")
  }
}

const block = new Block()

console.log(block.toHash())
