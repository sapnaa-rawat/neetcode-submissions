class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        freq = {}
        res = []
        n = len(nums)

        for num in nums:
            freq[num] = freq.get(num,0) + 1
        
        for num,count in freq.items():
            if(count > n//3):
                res.append(num)
        return res

        # count = 0
        # res =[]
        # for i in range (len(nums)):
        #     if(nums.count(nums[i])> len(nums)/3 and nums[i] not in res):
        #         res.append(nums[i])
        # return res
        