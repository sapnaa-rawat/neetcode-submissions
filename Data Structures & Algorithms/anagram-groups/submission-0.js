class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let Map ={};
        for(let str of strs){
            let sortedKey = str.split("").sort().join("");
            if(Map[[sortedKey]]){
                Map[sortedKey].push(str)
            }else
            Map[sortedKey]= [str]
        }
        return Object.values(Map)
    }
}
