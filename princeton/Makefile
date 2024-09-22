# Variables
CLASSPATH = .:algs4.jar

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

binarySearch1:
	javac -cp $(CLASSPATH) c1/binarySearch/BinarySearch.java
	java -cp c1:$(CLASSPATH) binarySearch.BinarySearch c1/binarySearch/tinyAllowlist.txt < c1/binarySearch/tinyText.txt

binarySearch2:
	javac -cp $(CLASSPATH) c1/binarySearch/BinarySearch.java
	java -cp c1:$(CLASSPATH) binarySearch.BinarySearch c1/binarySearch/largeAllowlist.txt < c1/binarySearch/largeText.txt | wc -l