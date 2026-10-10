class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def merge(left,right):
            res = []
            i = 0
            j = 0

            while(i < len(left) and j < len(right)):
                if(left[i]<right[j]):
                    res.append(left[i])
                    i += 1

                else:
                    res.append(right[j])
                    j += 1

            #will append the remaing values from boht array
            res.extend(left[i:])
            res.extend(right[j:])

            return res

        def merge_Sort(arr):

            if len(arr) <= 1:
                return arr

            mid = len(arr)// 2

            left = merge_Sort(arr[:mid])
            right = merge_Sort(arr[mid:])

            return merge(left,right)

        return merge_Sort(nums)

    

    


