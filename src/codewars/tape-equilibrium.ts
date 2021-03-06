/**
 * A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
 * Any integer P, such that 0 < P < N, splits this tape into two non-empty parts:
 * A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
 * The difference between the two parts is the value of:
 * |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
 *
 * In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
 * For example, consider array A such that:
 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 *
 * We can split this tape in four places:
 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7

 * Write a function:
 * function solution(A);

 * that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
 * For example, given:
 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3

 * the function should return 1, as explained above.

 * Assume that:
 * N is an integer within the range [2..100,000];
 * each element of array A is an integer within the range [−1,000..1,000].
 *
 * Complexity:
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
 */

export function tapeEquilibrium(numbers: number[]): number {
  const diffs: number[] = [];

  numbers.forEach((number, index, self) => {
    if (index === self.length - 1) {
      return;
    }

    const firstPart = self.slice(0, index + 1).reduce((acc, value) => acc + value);
    const secondPart = self.slice(index + 1, self.length).reduce((acc, value) => acc + value);
    diffs.push(Math.abs(firstPart - secondPart));
  });

  return Math.min.apply(Math, diffs);
}

function tapeEquilibrium3(numbers: number[]): number {
  let firstPartSum = 0;
  let secondPartSum = numbers.reduce((acc, current) => acc + current, 0);
  let minDiff = Number.POSITIVE_INFINITY;

  for (let i = 1; i < numbers.length; i++) {
    firstPartSum += numbers[i - 1];
    secondPartSum -= numbers[i - 1];

    const diff = Math.abs(firstPartSum - secondPartSum);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}
