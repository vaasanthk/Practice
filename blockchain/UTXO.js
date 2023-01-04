class TXO {
  constructor(owner, amount) {
    this.owner = owner
    this.amount = amount
    this.spent = false
  }
  spend() {
    this.spent = true
  }
}

class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs
    this.outputUTXOs = outputUTXOs
  }
  execute() {
    const anySpent = this.inputUTXOs.some((x) => x.spent)
    if (anySpent) {
      throw new Error("Cannot include a spent UTXO")
    }
    const inputAmount = this.inputUTXOs.reduce((p, c) => {
      return p + c.amount
    }, 0)

    const outputAmount = this.outputUTXOs.reduce((p, c) => {
      return p + c.amount
    }, 0)

    if (inputAmount < outputAmount) {
      throw new Error("Total value is less than output")
    }

    this.inputUTXOs.forEach((utxo) => {
      utxo.spend()
    })

    this.fee = inputAmount - outputAmount
  }
}

const fromAddress = "1DBS97W3jWw6FnAqdduK1NW6kFo3Aid1N6"
const toAddress = "12ruWjb4naCME5QhjrQSJuS5disgME22fe"

const inputTXO1 = new TXO(fromAddress, 5)
const inputTXO2 = new TXO(fromAddress, 5)
const outputTXO1 = new TXO(toAddress, 10)
const tx = new Transaction([inputTXO1, inputTXO2], [outputTXO1])

tx.execute()
