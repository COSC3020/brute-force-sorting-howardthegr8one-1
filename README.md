[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Analysis for my Implementation
Since this algorithm creates all permutations of a given array (assuming the sorted version is the last one to be found) then the runtime to generate these permutations is $\Theta(n!)$, although even if the sorted version is found before the last permutation we would still have a runtime of $\Theta((n-k)!)$ where the sorted permutation is the $k^{th}$ permutation. Furthermore once each full length permutation has been found the `isSorted()` function is called which runs in linear time, if the found permutation is the sorted version then a different loop is run to copy the sorted elements into the original array, however since the `if(done[0])` condition is now true this copying loop simply replaces the `if(isSorted(q))` check for each permutation and remains a linear term. Therefore the runtime of my implementation would be $\Theta(n \cdot n!)$.

### Best-case input:
A sorted list would be the best-case input as this would only need the algorithm to recurse down one single branch of permutations taking linear time, find the sorted version and the `isSorted()` function would run in linear time. This would give a runtime of $\Theta(n^2)$ because the for loop in the function would have to run and the `isSorted()` function within that loop would also run. 

### Worst-case input:
A reverse-sorted list would be the worst-case input as it would require the algorithm to generate every single permutation before eventually finding the sorted one as the last possible permutation. It would also run the `isSorted()` function at every full permutation, and would run the for loop in the `if (done[0])` statement as well. Thus the worst-case runtime is also $\Theta(n \cdot n!)$.

### Random Permutation Generation:
The complexity could either be quadratic or infinite for random generation. By creating random permutations without memory the first permutation could be sorted which would be similar to the best-case input above where the first branch of recursive calls would result in the sorted permutation. However random permutations may never result in a sorted version in which case the runtime would be infinite.
