
def canJump(self, nums: list[int]) -> bool:
    goal = len(nums) - 1

    for i in range(len(nums) - 1, -1, -1):
        if i +nums[i] >= goal:
            goal = i

    return True if goal == 0 else False

#Liner time complexity with the greedy approach

canJump(nums=[3,2,1,4,5])