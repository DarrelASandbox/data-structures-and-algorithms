# Variables
CLASSPATH = .:algs4.jar

binarySearch1:
	javac -cp $(CLASSPATH) c1/binarySearch/BinarySearch.java
	java -cp c1:$(CLASSPATH) binarySearch.BinarySearch c1/binarySearch/tinyAllowlist.txt < c1/binarySearch/tinyText.txt

binarySearch2:
	javac -cp $(CLASSPATH) c1/binarySearch/BinarySearch.java
	java -cp c1:$(CLASSPATH) binarySearch.BinarySearch c1/binarySearch/largeAllowlist.txt < c1/binarySearch/largeText.txt | wc -l