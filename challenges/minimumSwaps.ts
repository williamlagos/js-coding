function minimumSwaps(arr: number[]): number {
    let swaps = 0
    const n = arr.length

    for (let i = 0; i < n; i++) {
        while (arr[i] !== i + 1) {
            const swapIdx = arr[i] - 1
            ;[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]
            swaps += 1
        }
    }

    return swaps
}

// Sample Input 0
let arr = [4, 3, 1, 2]
console.log(minimumSwaps(arr)) // Output: 3

// Sample Input 1
arr = [2, 3, 4, 1, 5]
console.log(minimumSwaps(arr)) // Output: 3

// Sample Input 2
arr = [1, 3, 5, 2, 4, 6, 7]
console.log(minimumSwaps(arr)) // Output: 3
