class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        if (len(digits) == 1):
            arr = []
            num = str(digits[0] + 1)

            for i in range(len(num)):
                arr.append(int(num[i]))

            return arr

        if (not digits[-1] == 9):
            digits[-1] = digits[-1] + 1
            return digits

        num = ""

        for i in range(len(digits)):
            num += str(digits[i])

        return [int(digit) for digit in str(int(num) + 1)]
