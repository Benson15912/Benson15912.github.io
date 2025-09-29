# Binary Search is Not That Easy

###### *29 September 2025*  
###### By Benson

---

### Summary
Binary search is simple in theory, tricky in practice. Let’s talk about why.

## The “Oops” Moment
This all started while I was revising LeetCode. I suddenly forgot how to code a binary search properly — yes, even though it’s “easy.”  
Result? Bugs. Lots of them.  

Here’s my slightly buggy attempt:


```python
def binarySearch(arr, target):
    l = 0
    r = len(arr) - 1

    while (l < r):
        mid = (l + r)//2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1

    return -1 
```

The culprits are these lines:

```python
    r = len(arr) - 1
    l < r
    mid = (l + r)//2
    r = mid - 1
```

But why?


## Original Problem
Suppose you’re given a sorted array and need to find x.

Different people will code it differently:  

**Half-open interval style** ```[l, r)```
```python
def binarySearch(arr, target):
    l = 0
    r = len(arr)

    while (l < r):
        mid = l + (r - l) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            l = mid + 1
        else:
            r = mid

    return -1 
```
**Closed interval style** ```[l, r]```
```python
def binarySearch(arr, target):
    l = 0
    r = len(arr) - 1

    while (l <= r):
        mid = l + (r - l) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1

    return -1 
```

But when do we use which versions?

Main things to think about:

1. ```mid = (l + r) // 2``` vs ```mid = l + (r-l) // 2```
2. ```r = mid```  vs ```r = mid - 1```
3. ```l < r``` vs ```l <= r```


## Calculating middle index


Avoid doing:
```python
mid = (l + r) // 2
```

Although this works in Python, it is not 100% safe in languages with fixed size integers.

For example, in Java, when your l and r integers are big, ```(l + r)``` might cause an integer overflow, causing mid to be calculated wrongly.

A safer option would always be:

```python
mid = l + (r-l) // 2
```


## Half-Open vs Closed Intervals

This is where I really tripped up.

- **Half-open `[l, r)`**: `while l < r`  
  - `r` is never searched  
  - Good if `r = len(arr)`

- **Closed `[l, r]`**: `while l <= r`  
  - `r` *can* be searched  
  - Good if `r = len(arr) - 1`

Updating `r` depends on which interval you’re using:

- `[l, r)`: `r = mid`  
- `[l, r]`: `r = mid - 1`

Remember: in `[l, r)`, `mid` itself is no longer in the search space after checking.  
If you do `r = mid - 1` here, you actually skip a value, and that’s when bugs happen.


## Summary: Half-Open vs Closed Intervals

| Interval Type | Loop Condition     | Update Right `r`  | Initial `r`       |
|---------------|------------------|-----------------|-----------------|
| Half-Open `[l, r)` | `while l < r`      | `r = mid`        | `len(arr)`      |
| Closed `[l, r]`    | `while l <= r`     | `r = mid - 1`    | `len(arr) - 1`  |



## Additional Resources
Check this [Leetcode Discussion](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/777019/Python-Clear-explanation-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems/) for templates and examples covering all interval types.