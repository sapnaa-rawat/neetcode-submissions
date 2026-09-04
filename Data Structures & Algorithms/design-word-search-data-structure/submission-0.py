class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEnd = False
class WordDictionary:

    def __init__(self):
        self.root = TrieNode()
        

    def addWord(self, word: str) -> None:
        curr = self.root

        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()

            curr = curr.children[char]

        curr.isEnd = True
        

    def search(self, word: str) -> bool:
        def dfs(i,curr):
            if i ==len(word):
                return curr.isEnd
            char = word[i]

            if char != '.':
                if char not in curr.children:
                    return False
                return dfs(i+1, curr.children[char])

            for child in curr.children.values():
                if dfs(i+1, child):
                    return True
            return False

        return dfs(0,self.root)
