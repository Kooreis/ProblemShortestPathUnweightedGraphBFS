Here is a JavaScript solution using Breadth-First Search (BFS) to find the shortest path in an unweighted graph:

```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    bfs(startingNode, endingNode) {
        let visited = [];
        for (let i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);

        let paths = [];
        paths[startingNode] = [startingNode];

        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();

            let getList = this.AdjList.get(getQueueElement);

            for (let i in getList) {
                let neigh = getList[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                    let path = paths[getQueueElement].slice();
                    path.push(neigh);
                    paths[neigh] = path;
                    if(neigh === endingNode) return path;
                }
            }
        }
    }
}

let g = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

console.log(g.bfs('A', 'C'));
```

This code creates a graph with vertices 'A' to 'F' and edges as specified. It then uses BFS to find the shortest path from 'A' to 'C'. The BFS method keeps track of the paths to each node and returns the path to the target node once it's found.