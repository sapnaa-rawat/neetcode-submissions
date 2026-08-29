class CountSquares {
    constructor() {
        this.points = new Map();

    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x,y] = point;
        const key = `${x},${y}`;
        
        this.points.set(
            key,
            (this.points.get(key) || 0) + 1
        )
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [x, y] = point;

        let result = 0;

        for (const [key, count] of this.points) {

            const [x2, y2] = key.split(",").map(Number);

            // Cannot form a square if same x or same y
            if (x2 === x || y2 === y) {
                continue;
            }

            // Side lengths must be equal
            if (Math.abs(x2 - x) !== Math.abs(y2 - y)) {
                continue;
            }

            // Other two corners
            const key1 = `${x},${y2}`;
            const key2 = `${x2},${y}`;

            const count1 = this.points.get(key1) || 0;
            const count2 = this.points.get(key2) || 0;

            result += count * count1 * count2;
        }

        return result;
    }
}

