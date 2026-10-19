class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        for i in range(len(nums)):
            if target < nums[0]:
                return 0
            elif nums[i] == target:
                return i
            elif  i == len(nums) - 1 or nums[i] <target < nums[i+1]:
                print(i+1)
                return i+1
        # search the array
        # if exist return the value
        # else return the index num[i]< val < num[i+1]