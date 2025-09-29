# Binary search is not that easy

###### *29 September 2025*  
###### By Benson

---

## Can you find the bugs?
Binary search is an algorithm used to search through a list with some form of sorted properties where we can narrow the search space by half everytime.


```python
def binarySearch(arr, target):
    l = 0
    r = len(n) - 1

    while (l < r):
        mid = (l + r)//2
        if arr[mid] == target:
            return mid
        if arr[mid] > target:
            l = mid + 1
        else:
            r = mid - 1

    return -1 
```

The buggy lines are:

```python
    mid = (l + r)//2
    r = mid - 1
```

But why?


## Original Problem
Suppose we are given a sorted array, determine if x is inside the array.

If you were to ask different people to do this, they would probably give you different solutions in terms of coding style.

Some may give you this:
```
def binarySearch(arr, target):
    l = 0
    r = len(n) - 1

    while (l < r):
        mid = (l + r)//2
        if arr[mid] == target:
            return mid
        if arr[mid] > target:
            l = mid + 1
        else:
            r = mid

    return -1 
```