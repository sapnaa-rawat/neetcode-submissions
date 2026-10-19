class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # linear search sol - o(n)
        # for i in range(len(nums)):
        #     if target < nums[0]:
        #         return 0
        #     elif nums[i] == target:
        #         return i
        #     elif  i == len(nums) - 1 or nums[i] <target < nums[i+1]:
        #         print(i+1)
        #         return i+1

        #Binary search o(logn)
        l,r = 0,len(nums)-1
        while(l <= r):
            mid = (l + r)//2
            if(nums[mid] == target):
                return mid
            elif nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        return l

       