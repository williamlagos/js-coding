function findSum(
    numbers: number[],
    queries: [number, number, number][]
): number[] {
    const n = numbers.length
    const prefixSum: number[] = new Array(n + 1).fill(0)
    const zeroCount: number[] = new Array(n + 1).fill(0)

    // Build the prefix sum and zero count arrays
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + numbers[i - 1]
        zeroCount[i] = zeroCount[i - 1] + (numbers[i - 1] === 0 ? 1 : 0)
    }

    const results: number[] = []

    // Process each query
    for (let [I, r, x] of queries) {
        const subarraySum = prefixSum[r] - prefixSum[I - 1]
        const zerosInSubarray = zeroCount[r] - zeroCount[I - 1]
        const adjustedSum = subarraySum + zerosInSubarray * x
        results.push(adjustedSum)
    }

    return results
}

// Example usage
const numbers = [1, 0, 2, 3, 0, 4]
const queries: [number, number, number][] = [
    [1, 3, 5], // sum of numbers[0] to numbers[2] with x=5 for zeros
    [2, 5, 2], // sum of numbers[1] to numbers[4] with x=2 for zeros
    [1, 6, 1] // sum of numbers[0] to numbers[5] with x=1 for zeros
]

const results = findSum(numbers, queries)
console.log(results) // Outputs the results for each query
