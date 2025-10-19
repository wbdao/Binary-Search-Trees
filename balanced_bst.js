import { Node } from "./Node.js";
export class Tree {
  constructor(array) {
    this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
  }

  buildTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);
    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));
    return root;
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) return;
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insert(value, node = this.root) {
    if (!node) return new Node(value);
    if (value < node.data) {
      node.left = node.left ? this.insert(value, node.left) : new Node(value);
    } else if (value > node.data) {
      node.right = node.right ? this.insert(value, node.right) : new Node(value);
    }
    return node;
  }

  deleteItem(value, node = this.root) {
    if (!node) return null;
    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let successor = node.right;
      while (successor.left) successor = successor.left;
      node.data = successor.data;
      node.right = this.deleteItem(successor.data, node.right);
    }
    return node;
  }

  find(value, node = this.root) {
    if (!node) return null;
    if (value === node.data) return node;
    return value < node.data ? this.find(value, node.left) : this.find(value, node.right);
  }

  levelOrderForEach(callback) {
    if (!callback) throw new Error("Callback is required");
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required");
    if (node.left) this.inOrderForEach(callback, node.left);
    callback(node);
    if (node.right) this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required");
    callback(node);
    if (node.left) this.preOrderForEach(callback, node.left);
    if (node.right) this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback is required");
    if (node.left) this.postOrderForEach(callback, node.left);
    if (node.right) this.postOrderForEach(callback, node.right);
    callback(node);
  }

  height(value) {
    const node = this.find(value);
    if (!node) return null;
    const getHeight = (n) => {
      if (!n) return -1;
      return 1 + Math.max(getHeight(n.left), getHeight(n.right));
    };
    return getHeight(node);
  }

  depth(value, node = this.root, depth = 0) {
    if (!node) return null;
    if (value === node.data) return depth;
    return value < node.data
      ? this.depth(value, node.left, depth + 1)
      : this.depth(value, node.right, depth + 1);
  }

  isBalanced(node = this.root) {
    if (!node) return true;
    const leftHeight = this.height(node.left?.data ?? null);
    const rightHeight = this.height(node.right?.data ?? null);
    const diff = Math.abs(leftHeight - rightHeight);
    return diff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const values = [];
    this.inOrderForEach((node) => values.push(node.data));
    this.root = this.buildTree(values);
  }
}
