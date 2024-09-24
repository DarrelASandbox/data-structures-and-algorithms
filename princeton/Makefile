# Variables
CLASSPATH = .:algs4.jar

###############
#	 Chapter 1  #
###############

helloWorld:
	javac c1/assignments/HelloWord.java
	java -cp c1 assignments.HelloWord

helloGoodbye:
	javac c1/assignments/HelloGoodbye.java
	java -cp c1 assignments.HelloGoodbye $(ARGS)

# Ctrl+D on MacOS to signal end of input
helloRandom1:
	javac -cp $(CLASSPATH) c1/assignments/RandomWord.java
	java -cp c1:$(CLASSPATH) assignments.RandomWord

helloRandom2:
	javac -cp $(CLASSPATH) c1/assignments/RandomWord.java
	java -cp c1:$(CLASSPATH) assignments.RandomWord < c1/assignments/animals8.txt

BS1:
	javac -cp $(CLASSPATH) c1/BinarySearch.java
	java -cp c1:$(CLASSPATH) BinarySearch c1/txt/tinyAllowlist.txt < c1/txt/tinyText.txt

BS2:
	javac -cp $(CLASSPATH) c1/BinarySearch.java
	java -cp c1:$(CLASSPATH) BinarySearch c1/txt/largeAllowlist.txt < c1/txt/largeText.txt | wc -l

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

p1:
	javac -cp $(CLASSPATH) c1/Percolation.java
	java -cp c1:$(CLASSPATH) Percolation < c1/assignments/data-percolation/input8.txt

ps1:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationStats.java
	java -cp c1:$(CLASSPATH) PercolationStats 200 100

ps2:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationStats.java
	java -cp c1:$(CLASSPATH) PercolationStats 2 10000

ps3:
	javac -cp $(CLASSPATH) c1/Percolation.java c1/PercolationStats.java
	java -cp c1:$(CLASSPATH) PercolationStats 2 100000