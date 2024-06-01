# Question: How do you determine the shortest path in an unweighted graph using BFS? JavaScript Summary

The JavaScript code provided is a solution to finding the shortest path in an unweighted graph using the Breadth-First Search (BFS) algorithm. The code first defines a Queue class with methods to enqueue, dequeue, and check if the queue is empty. Then, it defines a Graph class with methods to add vertices and edges, and a BFS method to find the shortest path between two nodes. The BFS method initializes an array to keep track of visited nodes and a queue to hold nodes to be visited. It also creates an array to store the paths to each node. The BFS method then starts from the starting node, marks it as visited, and adds it to the queue. It then enters a loop that continues until the queue is empty. In each iteration of the loop, it dequeues a node, gets its adjacent nodes, and for each unvisited adjacent node, it marks it as visited, enqueues it, and updates the path to it. If the adjacent node is the ending node, it returns the path to it. Finally, the code creates a graph, adds vertices and edges to it, and calls the BFS method to find the shortest path from 'A' to 'C'.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of the overall approach to solving the problem. Both versions use the Breadth-First Search (BFS) algorithm to find the shortest path in an unweighted graph. They both use a queue to keep track of the vertices to visit next and use an array to keep track of the visited vertices.

However, there are some differences in the language features and methods used in the TypeScript version:

1. TypeScript uses static types: In the TypeScript version, types are specified for variables and function return values. For example, the Queue class is a generic class that can hold items of any type T. This helps to catch errors at compile time and makes the code more predictable and easier to understand.

2. Different data structures: The JavaScript version uses a Map to store the adjacency list of the graph, while the TypeScript version uses a 2D array. The JavaScript version also uses an array to store the paths to each node, while the TypeScript version uses two arrays to store the predecessor of each vertex and the distance from the source vertex.

3. Different return values: The JavaScript version returns the shortest path as an array of vertices, while the TypeScript version returns the length of the shortest path as a number. If the destination vertex is not reachable, the TypeScript version returns `Number.MAX_SAFE_INTEGER`.

4. Different graph representation: The JavaScript version represents vertices as strings ('A', 'B', 'C', etc.), while the TypeScript version represents vertices as numbers (0, 1, 2, etc.). This is not a difference in language features, but it does affect how the graph is created and how the BFS method is called.

---

# C++ Differences

The C++ version of the solution uses a similar approach to the JavaScript version, but there are some differences due to the language features and standard libraries available in C++.

1. Data Structures: In the JavaScript version, the adjacency list is implemented using a Map object, while in the C++ version, it is implemented using a vector of lists. The visited nodes are stored in an array in JavaScript, while in C++, a vector is used.

2. Queue: In JavaScript, a custom Queue class is created and used for BFS. In C++, the standard library queue is used.

3. Path Tracking: In JavaScript, the path to each node is stored in an array, and the path to the target node is returned once it's found. In C++, two vectors are used to track the predecessor of each node and the distance from the start node to each node. After the BFS, the path is reconstructed from the end node to the start node using the predecessor vector.

4. Output: The JavaScript version returns the shortest path as an array, while the C++ version prints the shortest path length and the path itself to the console.

5. Main Function: In JavaScript, the graph is created and the BFS method is called outside of any function. In C++, this is done in the main function, which is the entry point of the program.

6. Iteration: In JavaScript, for-in loop is used to iterate over the adjacency list of a node. In C++, an iterator is used to iterate over the adjacency list.

7. Vertex Naming: In JavaScript, vertices are named using strings ('A', 'B', etc.), while in C++, vertices are named using integers (0, 1, etc.).

---
