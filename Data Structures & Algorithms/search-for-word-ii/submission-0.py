class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None


class Solution:
    def findWords(self, board, words):
        root = TrieNode()

        # Build Trie
        for word in words:
            curr = root

            for char in word:
                if char not in curr.children:
                    curr.children[char] = TrieNode()

                curr = curr.children[char]

            curr.word = word

        result = []
        rows = len(board)
        cols = len(board[0])

        def dfs(r, c, node):
            char = board[r][c]

            if char not in node.children:
                return

            next_node = node.children[char]

            # Found a complete word
            if next_node.word:
                result.append(next_node.word)
                next_node.word = None

            # Mark current cell as visited
            board[r][c] = "#"

            # Explore 4 directions
            if r > 0 and board[r - 1][c] != "#":
                dfs(r - 1, c, next_node)

            if r < rows - 1 and board[r + 1][c] != "#":
                dfs(r + 1, c, next_node)

            if c > 0 and board[r][c - 1] != "#":
                dfs(r, c - 1, next_node)

            if c < cols - 1 and board[r][c + 1] != "#":
                dfs(r, c + 1, next_node)

            # Backtrack
            board[r][c] = char

            # Optional optimization:
            # remove empty Trie branch
            if not next_node.children and next_node.word is None:
                del node.children[char]

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)

        return result