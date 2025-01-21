function countNearlySimilarRectangles(rectangles: number[][]): number {
    const ratioMap: Map<string, number> = new Map()
    let count = 0

    const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y))

    for (const [a, b] of rectangles) {
        const divisor = gcd(a, b)
        const normalized = `${a / divisor}/${b / divisor}`

        const currentCount = ratioMap.get(normalized) || 0
        count += currentCount
        ratioMap.set(normalized, currentCount + 1)
    }

    return count
}

// Example usage:
const rectangles = [
    [5, 10],
    [10, 10],
    [3, 6],
    [9, 9]
]
const result = countNearlySimilarRectangles(rectangles)
console.log(result) // Output: 2
