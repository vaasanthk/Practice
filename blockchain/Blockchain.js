const SHA256 = require("crypto-js/sha256")

class Block {
  constructor(data) {
    this.data = data
  }
  toHash() {
    return SHA256(this.data + this.previousHash)
  }
}

class Blockchain {
  constructor() {
    this.chain = [new Block()]
  }

  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash()
    // console.log(block)
    this.chain.push(block)
  }

  isValid() {
    for (let i = this.chain.length - 1; i > 0; i--) {
      const block = this.chain[i]
      const prev = this.chain[i - 1]
      if (block.previousHash.toString() !== prev.toHash().toString()) {
        return false
      }
    }
    return true
  }
}

// e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

blockchain = new Blockchain()
blockchain.addBlock(new Block("Dan"))
blockchain.addBlock(new Block("Peter"))
blockchain.addBlock(new Block("James"))

console.log(blockchain.chain[0].toHash().toString())
// blockchain.chain[0].data = "data hack"

// console.log(blockchain.chain[0].toHash().toString())
// console.log(blockchain.isValid())

console.log(blockchain.chain[1].toHash().toString())
blockchain.chain[1].previousHash = SHA256("gibberish")

console.log(blockchain.chain[1].toHash().toString())
console.log(blockchain.isValid())
