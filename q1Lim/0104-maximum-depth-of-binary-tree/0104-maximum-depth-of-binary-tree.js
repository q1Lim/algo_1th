/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // DFS.. 도전
    
    let result = 0

    const dfs = (node, depth) => {
        if(!node) return

        if(!node.left && !node.right){
            result = Math.max(result, depth)
        }

        console.log('현재 노드:', node.val, '| 깊이:', depth);

        // depth++ 가 아니라 depth + 1을 해줘야한다
        // 그렇지 않으면 left와 right에 다른 depth가 들어갈 수 있다
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 1)
    return result

};