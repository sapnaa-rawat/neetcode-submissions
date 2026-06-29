class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // using objects
    // groupAnagrams(strs) {
    //     let Map ={};
    //     for(let str of strs){
    //         let sortedKey = str.split("").sort().join("");
    //         if(Map[[sortedKey]]){
    //             Map[sortedKey].push(str)
    //         }else
    //         Map[sortedKey]= [str]
    //     }
    //     return Object.values(Map)
    // }
    // using map method
    groupAnagrams(strs) {
        let map = new Map();
        for(let str of strs){
            let key = str.split("").sort().join("");
            if(map.has(key)){
                map.get(key).push(str)
            }else
            map.set(key,[str])
        }
        return [...map.values()]
    }
}
