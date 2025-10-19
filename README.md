
# Balanced Binary Search Tree (BST)

This project implements a Balanced Binary Search Tree (BST) in JavaScript. It includes all essential operations such as insertion, deletion, traversal, height/depth calculation, balance checking, and rebalancing.

## 📁 Project Structure

- `balanced_bst.js`: Contains the `Node` and `Tree` classes with all BST functionalities.
- `main.js`: Driver script to test the tree operations.
- `index.html` (optional): Can be used to build a visual interface.

## 🚀 Features

- Build a balanced BST from an array
- Insert and delete nodes efficiently
- Find nodes by value
- Traverse the tree in level, in-order, pre-order, and post-order
- Calculate height and depth of nodes
- Check if the tree is balanced
- Rebalance the tree when needed

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wbdao/Binary-Search-Trees.git
   ```
2. Open the project folder:
   ```bash
   cd balanced-bst
   ```
3. Run the project using a browser or Node.js

## 📦 Usage

```javascript
import { Tree } from './balanced_bst.js';

const array = [1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324];
const tree = new Tree(array);

console.log(tree.isBalanced());
tree.levelOrderForEach(node => console.log(node.data));
```

## 📊 Example Output

```
Is Balanced: true
Level Order: 8 4 23 3 5 9 67 1 7 324 6345
```

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Developed by Abdullah.
