# Variables
CLASSPATH = .:algs4.jar

#########################
#	      Chapter 1       #
#########################

#########################
#	     Assignments      #
#########################

helloWorld:
	javac c1/HelloWorld.java
	java -cp c1 HelloWorld

# make helloGoodbye ARGS="Chick Duck"
helloGoodbye:
	javac c1/HelloGoodbye.java
	java -cp c1 HelloGoodbye $(ARGS)

# Ctrl+D on MacOS to signal end of input
helloRandom1:
	javac -cp $(CLASSPATH) c1/RandomWord.java
	java -cp c1:$(CLASSPATH) RandomWord

helloRandom2:
	javac -cp $(CLASSPATH) c1/RandomWord.java
	java -cp c1:$(CLASSPATH) RandomWord < c1/txt/animals8.txt

P1:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationTest.java
	java -cp c1:$(CLASSPATH) PercolationTest < c1/txt/data-percolation/eagle25.txt

PS1:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationStats.java
	java -cp c1:$(CLASSPATH) PercolationStats 200 100

PS2:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationStats.java
	java -cp c1:$(CLASSPATH) PercolationStats 2 10000

PS3:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationStats.java
	java -cp c1:$(CLASSPATH) PercolationStats 2 100000

deque:
	javac -cp $(CLASSPATH) c1/Deque.java
	java -cp c1:$(CLASSPATH) Deque

RQ:
	javac -cp $(CLASSPATH) c1/RandomizedQueue.java
	java -cp c1:$(CLASSPATH) RandomizedQueue

PM1:
	javac -cp $(CLASSPATH) c1/Permutation.java c1/RandomizedQueue.java
	java -cp c1:$(CLASSPATH) Permutation 3 < c1/txt/data-queues/distinct.txt

PM2:
	javac -cp $(CLASSPATH) c1/Permutation.java c1/RandomizedQueue.java
	java -cp c1:$(CLASSPATH) Permutation 8 < c1/txt/data-queues/duplicates.txt

#########################
#	     Chapter 1.1      #
#########################

BS1:
	javac -cp $(CLASSPATH) c1/BinarySearch.java
	java -cp c1:$(CLASSPATH) BinarySearch c1/txt/tinyAllowlist.txt < c1/txt/tinyText.txt

BS2:
	javac -cp $(CLASSPATH) c1/BinarySearch.java
	java -cp c1:$(CLASSPATH) BinarySearch c1/txt/largeAllowlist.txt < c1/txt/largeText.txt | wc -l

#########################
#	     Chapter 1.3      #
#########################

S1:
	javac -cp $(CLASSPATH) c1/Stack.java
	java -cp c1:$(CLASSPATH) Stack < c1/txt/tobe.txt

S2:
	javac -cp $(CLASSPATH) c1/LinkedStack.java
	java -cp c1:$(CLASSPATH) LinkedStack < c1/txt/tobe.txt

S3:
	javac -cp $(CLASSPATH) c1/ResizingArrayStack.java
	java -cp c1:$(CLASSPATH) ResizingArrayStack < c1/txt/tobe.txt

S4:
	javac -cp $(CLASSPATH) c1/FixedCapacityStack.java
	java -cp c1:$(CLASSPATH) FixedCapacityStack 5 < c1/txt/tobe.txt

S5:
	javac -cp $(CLASSPATH) c1/FixedCapacityStackOfStrings.java
	java -cp c1:$(CLASSPATH) FixedCapacityStackOfStrings 5 < c1/txt/tobe.txt

Q1:
	javac -cp $(CLASSPATH) c1/Queue.java
	java -cp c1:$(CLASSPATH) Queue < c1/txt/tobe.txt

Q2:
	javac -cp $(CLASSPATH) c1/LinkedQueue.java
	java -cp c1:$(CLASSPATH) LinkedQueue < c1/txt/tobe.txt

Q3:
	javac -cp $(CLASSPATH) c1/ResizingArrayQueue.java
	java -cp c1:$(CLASSPATH) ResizingArrayQueue < c1/txt/tobe.txt

I1:
	javac -cp $(CLASSPATH) c1/Bag.java
	java -cp c1:$(CLASSPATH) Bag < c1/txt/tobe.txt

I2:
	javac -cp $(CLASSPATH) c1/LinkedBag.java
	java -cp c1:$(CLASSPATH) LinkedBag < c1/txt/tobe.txt

D1:
	javac -cp $(CLASSPATH) c1/Evaluate.java c1/Stack.java
	java -cp c1:$(CLASSPATH) Evaluate

#########################
#	     Chapter 1.4      #
#########################

TSF1K:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/1Kints.txt

TSF2K:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/2Kints.txt

TSF4K:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/4Kints.txt

TSF8K:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/8Kints.txt

TSF16K:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/16Kints.txt

TSF32K:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/32Kints.txt

TSF1M:
	javac -cp $(CLASSPATH) c1/ThreeSumFast.java
	java -cp c1:$(CLASSPATH) ThreeSumFast c1/txt/1Mints.txt

#########################
#	     Chapter 1.5      #
#########################

QF1:
	javac -cp $(CLASSPATH) c1/QuickFindUF.java
	java -cp c1:$(CLASSPATH) QuickFindUF < c1/txt/tinyUF.txt

QF2:
	javac -cp $(CLASSPATH) c1/QuickFindUF.java
	java -cp c1:$(CLASSPATH) QuickFindUF < c1/txt/mediumUF.txt

QF3:
	javac -cp $(CLASSPATH) c1/QuickFindUF.java
	java -cp c1:$(CLASSPATH) QuickFindUF < c1/txt/largeUF.txt

QU1:
	javac -cp $(CLASSPATH) c1/QuickUnionUF.java
	java -cp c1:$(CLASSPATH) QuickUnionUF < c1/txt/tinyUF.txt

QU2:
	javac -cp $(CLASSPATH) c1/QuickUnionUF.java
	java -cp c1:$(CLASSPATH) QuickUnionUF < c1/txt/mediumUF.txt

QU3:
	javac -cp $(CLASSPATH) c1/QuickUnionUF.java
	java -cp c1:$(CLASSPATH) QuickUnionUF < c1/txt/largeUF.txt

WQUF1:
	javac -cp $(CLASSPATH) c1/WeightedQuickUnionUF.java
	java -cp c1:$(CLASSPATH) WeightedQuickUnionUF < c1/txt/tinyUF.txt

WQUF2:
	javac -cp $(CLASSPATH) c1/WeightedQuickUnionUF.java
	java -cp c1:$(CLASSPATH) WeightedQuickUnionUF < c1/txt/mediumUF.txt

WQUF3:
	javac -cp $(CLASSPATH) c1/WeightedQuickUnionUF.java
	java -cp c1:$(CLASSPATH) WeightedQuickUnionUF < c1/txt/largeUF.txt

UF1:
	javac -cp $(CLASSPATH) c1/UF.java
	java -cp c1:$(CLASSPATH) UF < c1/txt/tinyUF.txt

UF2:
	javac -cp $(CLASSPATH) c1/UF.java
	java -cp c1:$(CLASSPATH) UF < c1/txt/mediumUF.txt

UF3:
	javac -cp $(CLASSPATH) c1/UF.java
	java -cp c1:$(CLASSPATH) UF < c1/txt/largeUF.txt

#########################
#	     Chapter 2.1      #
#########################

SS1:
	javac -cp $(CLASSPATH) c2/Selection.java
	java -cp c2:$(CLASSPATH) Selection < c2/txt/tiny.txt

SS2:
	javac -cp $(CLASSPATH) c2/Selection.java
	java -cp c2:$(CLASSPATH) Selection < c2/txt/words3.txt

IS1:
	javac -cp $(CLASSPATH) c2/Insertion.java
	java -cp c2:$(CLASSPATH) Insertion < c2/txt/tiny.txt

IS2:
	javac -cp $(CLASSPATH) c2/Insertion.java
	java -cp c2:$(CLASSPATH) Insertion < c2/txt/words3.txt

IS3:
	javac -cp $(CLASSPATH) c2/InsertionX.java
	java -cp c2:$(CLASSPATH) Insertion < c2/txt/tiny.txt

IS4:
	javac -cp $(CLASSPATH) c2/InsertionX.java
	java -cp c2:$(CLASSPATH) Insertion < c2/txt/words3.txt

SHS1:
	javac -cp $(CLASSPATH) c2/Shell.java
	java -cp c2:$(CLASSPATH) Shell < c2/txt/tiny.txt

SHS2:
	javac -cp $(CLASSPATH) c2/Shell.java
	java -cp c2:$(CLASSPATH) Shell < c2/txt/words3.txt

MS1:
	javac -cp $(CLASSPATH) c2/Merge.java
	java -cp c2:$(CLASSPATH) Merge < c2/txt/tiny.txt

MS2:
	javac -cp $(CLASSPATH) c2/Merge.java
	java -cp c2:$(CLASSPATH) Merge < c2/txt/words3.txt

MS3:
	javac -cp $(CLASSPATH) c2/MergeX.java
	java -cp c2:$(CLASSPATH) MergeX < c2/txt/tiny.txt

MS4:
	javac -cp $(CLASSPATH) c2/MergeX.java
	java -cp c2:$(CLASSPATH) MergeX < c2/txt/words3.txt

MS5:
	javac -cp $(CLASSPATH) c2/MergeX.java
	java -cp c2:$(CLASSPATH) MergeX < c2/txt/tiny.txt

MS6:
	javac -cp $(CLASSPATH) c2/MergeX.java
	java -cp c2:$(CLASSPATH) MergeX < c2/txt/words3.txt

MS7:
	javac -cp $(CLASSPATH) c2/MergeBars.java
	java -cp c2:$(CLASSPATH) MergeBars 1000 96

MS8:
	javac -cp $(CLASSPATH) c2/MergeBU.java
	java -cp c2:$(CLASSPATH) MergeBU < c2/txt/tiny.txt

MS9:
	javac -cp $(CLASSPATH) c2/MergeBU.java
	java -cp c2:$(CLASSPATH) MergeBU < c2/txt/words3.txt

INV1:
	javac -cp $(CLASSPATH) c2/Inversions.java
	java -cp c2:$(CLASSPATH) Inversions < c2/txt/input.txt

QS1:
	javac -cp $(CLASSPATH) c2/Quick.java
	java -cp c2:$(CLASSPATH) Quick < c2/txt/tiny.txt

QS2:
	javac -cp $(CLASSPATH) c2/Quick.java
	java -cp c2:$(CLASSPATH) Quick < c2/txt/words3.txt

QS3:
	javac -cp $(CLASSPATH) c2/Quick3way.java
	java -cp c2:$(CLASSPATH) Quick3way < c2/txt/tiny.txt

QS4:
	javac -cp $(CLASSPATH) c2/Quick3way.java
	java -cp c2:$(CLASSPATH) Quick3way < c2/txt/words3.txt

QS5:
	javac -cp $(CLASSPATH) c2/QuickX.java
	java -cp c2:$(CLASSPATH) QuickX < c2/txt/tiny.txt

QS6:
	javac -cp $(CLASSPATH) c2/QuickX.java
	java -cp c2:$(CLASSPATH) QuickX < c2/txt/words3.txt

QS7:
	javac -cp $(CLASSPATH) c2/QuickBentleyMcIlroy.java
	java -cp c2:$(CLASSPATH) QuickBentleyMcIlroy < c2/txt/tiny.txt

QS8:
	javac -cp $(CLASSPATH) c2/QuickBentleyMcIlroy.java
	java -cp c2:$(CLASSPATH) QuickBentleyMcIlroy < c2/txt/words3.txt

PQ1:
	javac -cp $(CLASSPATH) c2/MinPQ.java
	java -cp c2:$(CLASSPATH) MinPQ < c2/txt/tinyPQ.txt

PQ2:
	javac -cp $(CLASSPATH) c2/MaxPQ.java
	java -cp c2:$(CLASSPATH) MaxPQ < c2/txt/tinyPQ.txt

PQ3:
	javac -cp $(CLASSPATH) c2/IndexMinPQ.java
	java -cp c2:$(CLASSPATH) IndexMinPQ

PQ4:
	javac -cp $(CLASSPATH) c2/IndexMaxPQ.java
	java -cp c2:$(CLASSPATH) IndexMaxPQ

PQ5:
	javac -cp $(CLASSPATH) c2/Heap.java
	java -cp c2:$(CLASSPATH) Heap < c2/txt/tiny.txt

PQ6:
	javac -cp $(CLASSPATH) c2/Heap.java
	java -cp c2:$(CLASSPATH) Heap < c2/txt/words3.txt