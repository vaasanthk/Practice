const TrieNode = require("./TrieNode")

class Trie {
  constructor() {
    this.root = new TrieNode(null)
  }
  insert(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i])
      }

      node = node.children[word[i]]

      if (i == word.length - 1) {
        node.isWord = true
      }
    }
  }

  contains(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      console.log(node.children[word[i]])
      if (node.children[word[i]]) {
        node = node.children[word[i]]
      } else {
        return false
      }
    }

    return node.isWord
  }
}

const trie = new Trie()
trie.insert("HEY")
trie.insert("Hello")
console.log(trie.contains("HEY"))
