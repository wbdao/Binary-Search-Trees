
import { Tree } from "./balanced_bst.js";

// Driver Script
const randomArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
const tree = new Tree(randomArray);

console.log("Is Balanced:", tree.isBalanced());
tree.levelOrderForEach((node) => console.log("Level:", node.data));
tree.preOrderForEach((node) => console.log("Pre:", node.data));
tree.postOrderForEach((node) => console.log("Post:", node.data));
tree.inOrderForEach((node) => console.log("In:", node.data));

tree.insert(120);
tree.insert(130);
tree.insert(140);
tree.insert(150);

console.log("Is Balanced After Insertions:", tree.isBalanced());
tree.rebalance();
console.log("Is Balanced After Rebalance:", tree.isBalanced());
tree.levelOrderForEach((node) => console.log("Level After Rebalance:", node.data));
