# practice_js
# Practice JavaScript Higher-Order Functions from Scratch

---

Reduce in JavaScript Higher-Order Functions

Reduce is a very useful Higher-Order Function built into JavaScript. Reduce is perfect for summarizing the total of an array. Reduce will compute a single value from a collection of numbers in an array and return that number, the total. It works non-destructively, so it will not mutate our original array, rather it will return that single value number from the sum total of the array it is called upon.
Reduce is also sometimes called fold. This higher-order operation 
Common use cases of Reduce: Reduce is ideal for:
totals
receipts 
ledgers 
tallies 
in combinations with other operations, as in to find an average i.e. sum total divided by the length of the data set, for example sum total / array.length
If we built Reduce from scratch, it might resemble something like this: 







---

The standard array method reduce is very useful because it will take the first element of the array as the starting value and begin totaling at the index of the second element. So basically, it relieves the need to declare a variable to keep as the memo, or running total, although, that's what's happening under the hood as evident in building reduce from scratch.
