/**
 * 211. Design Add and Search Words Data Structure
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }
    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }
    search(word) {
        let searchNode = this._dfs(0, this.root, word);
        return searchNode;
    }
    _dfs(index, node, pattern) {
        let currentNode = node;
        let char;
        for (let i = index; i < pattern.length; i++) {
            char = pattern[i];
            if (char == ".") {
                for (let child of Object.values(currentNode.children)) {
                    if (this._dfs(i + 1, child, pattern)) {
                        return true;
                    }
                    return false;
                }
            } else {
                if(!currentNode.children[char]){
                    return false;
                } else {
                    currentNode = currentNode.children[char];
                }
            }
        }
        return currentNode.isEnd;
    }
}
let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
console.log(wordDictionary.search(".ad")); // return True
// wordDictionary.search("b..");