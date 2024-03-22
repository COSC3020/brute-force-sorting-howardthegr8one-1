function permutationSort(a, q = [], iters = 0, len = a.length, done = [false]) {
    if (a.length < 1 && iters == 0) return 0
    if (a.length < 1)  return iters

    for (let i = 0; i < a.length; i++) {
        q.push(a[i])
        iters = permutationSort(a.slice(0,i).concat(a.slice(i+1)), q, iters, len, done)
        if (done[0]){
            for (let i = 0; i < q.length; i++) a[i] = q[i]
            return iters
        }
        if (q.length == len) {
            iters++
            if (isSorted(q)) {
                done[0] = true
                return iters
            }
        }
        q.pop()
    }
    return iters
}
function isSorted(a) {
    for (let i = 1; i < a.length; i++) if (a[i-1] > a[i]) return false
    return true
}
