class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        boats = 0
        left = 0
        people.sort()
        right = len(people) - 1
        while(left <= right):
            print(people[left])
            # print(people[right])
            if(people[left]+people[right] <= limit):
                  left += 1
            right -=1
            boats += 1
           
        return boats

        

        