function arrayManipulation(n: number, queries: number[][]): number {
    // Initialize the array with zeros
    let arr: number[] = new Array(n + 1).fill(0)

    // Apply the difference array technique
    for (let query of queries) {
        let a = query[0]
        let b = query[1]
        let k = query[2]
        arr[a - 1] += k
        if (b <= n) {
            arr[b] -= k
        }
    }

    // Compute the prefix sum and find the maximum value
    let maxValue = 0
    let currentValue = 0
    for (let i = 0; i < n; i++) {
        currentValue += arr[i]
        if (currentValue > maxValue) {
            maxValue = currentValue
        }
    }

    return maxValue
}

// Sample Input
const n = 5
const queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]

// Sample Output
console.log(arrayManipulation(n, queries)) // Output: 200
