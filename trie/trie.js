class Node{
    constructor(){
        this.isEnd = false;
        this.children = {};
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let currentNode = this.root;
        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char] = new Node();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEnd = true;
    }
    search(word){
        let searchNode = this._dfs(word, this.root);
        return searchNode.isEnd && searchNode != null;
    }
    startsWith(prefix){
        let searchNode = this._dfs(prefix, this.root);
        return searchNode != null;
    }
    _dfs(pattern, node){
        let currentNode = node;
        for(let char of pattern){
            if(!currentNode.children[char])return null;
            currentNode = currentNode.children[char]
        }
        return currentNode;
    }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True
console.log(trie)