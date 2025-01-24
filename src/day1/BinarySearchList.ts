export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  while (lo <= hi) {
    let m = Math.ceil((lo + hi) / 2);
    let val = haystack[m];
    if (val === needle) {
      return true
    } else if (val < needle) {
      lo = m + 1
    } else {
      hi = m - 1
    }
  }
  return false;
}
