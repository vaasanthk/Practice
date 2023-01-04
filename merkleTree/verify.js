const { hashProof, sha256, concatHash, concatLetters } = require("./testUtil")
const MerkleTree = require("./merkleTree")

function verifyProof(proof, node, root, concat) {
  let data = node
  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      data = concat(proof[i].data, data)
    } else {
      data = concat(data, proof[i].data)
    }
  }
  return data === root
}

const leaves = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const root = "eb100814abc896ab18bcf6c37b6550eeadeae0c312532286a4cf4be132ace526"
const hashTree = new MerkleTree(leaves.map(sha256), concatHash)
const lettersTree = new MerkleTree(leaves, concatLetters)
let proof, hashedProof

leaves.forEach((leaf, i) => {
  proof = hashTree.getProof(i)
  hashedProof = hashProof(leaf, proof).toString("hex")
})

console.log(root === hashedProof)
