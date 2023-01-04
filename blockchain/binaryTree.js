class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  hasNode(data) {
    return this.searchRoot(this.root, data)
  }

  searchRoot(root, data) {
    if (!root) {
      return false
    }
    if (root.data === data) {
      return true
    }
    if (root.data > data) {
      return this.searchRoot(root.left, data)
    }
    if (root.data < data) {
      return this.searchRoot(root.right, data)
    }
  }

  addNode(node) {
    if (!this.root) {
      this.root = node
    }
    this.addToRoot(this.root, node)
  }

  addToRoot(root, node) {
    if (node.data < root.data) {
      if (!root.left) {
        root.left = node
      } else {
        this.addToRoot(root.left, node)
      }
    }

    if (node.data > root.data) {
      if (!root.right) {
        root.right = node
      } else {
        this.addToRoot(root.right, node)
      }
    }
  }
}

const tree = new Tree()
// root node
tree.addNode(new Node(5))
console.log(tree.hasNode(5))

// adding to left node of the root node
tree.addNode(new Node(3))
console.log(tree.root.left.data)
console.log(tree.hasNode(3))

// adding to left node of the child node(3)
tree.addNode(new Node(2))
console.log(tree.root.left.left.data)
console.log(tree.hasNode(2))

// adding to right node of child node
tree.addNode(new Node(4))
console.log(tree.root.left.right.data)
console.log(tree.hasNode(4))

// adding to the right node of the root node
tree.addNode(new Node(7))
console.log(tree.root.right.data)
console.log(tree.hasNode(7))

// adding to the left node of the child node(7)
tree.addNode(new Node(6))
console.log(tree.root.right.left.data)
console.log(tree.hasNode(6))

// adding to the right node of the child node(7)
tree.addNode(new Node(8))
console.log(tree.root.right.right.data)
console.log(tree.hasNode(8))
