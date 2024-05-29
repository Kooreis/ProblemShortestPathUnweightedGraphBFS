Here is a TypeScript solution for finding the shortest path in an unweighted graph using BFS:

```typescript
class Queue<T> {
    private data: T[] = [];

    enqueue(item: T) {
        this.data.push(item);
    }

    dequeue(): T | undefined {
        return this.data.shift();
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }
}

class Graph {
    private vertices: number;
    private adj: number[][];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adj = Array.from({ length: vertices }, () => []);
    }

    addEdge(u: number, v: number) {
        this.adj[u].push(v);
    }

    BFS(s: number, dest: number): number {
        let pred = Array(this.vertices).fill(-1);
        let dist = Array(this.vertices).fill(Number.MAX_SAFE_INTEGER);

        let queue = new Queue<number>();
        queue.enqueue(s);
        dist[s] = 0;

        while (!queue.isEmpty()) {
            let u = queue.dequeue() as number;

            for (let i = 0; i < this.adj[u].length; i++) {
                if (dist[this.adj[u][i]] === Number.MAX_SAFE_INTEGER) {
                    dist[this.adj[u][i]] = dist[u] + 1;
                    pred[this.adj[u][i]] = u;
                    queue.enqueue(this.adj[u][i]);

                    if (this.adj[u][i] === dest) return dist[dest];
                }
            }
        }

        return Number.MAX_SAFE_INTEGER;
    }
}

let graph = new Graph(8);
graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(3, 4);
graph.addEdge(3, 7);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.addEdge(4, 7);
graph.addEdge(5, 6);
graph.addEdge(6, 7);
let source = 0, dest = 7;

console.log("Shortest path length is: " + graph.BFS(source, dest));
```

This program creates a graph and adds edges between vertices. It then uses the BFS method to find the shortest path from a source vertex to a destination vertex. The BFS method uses a queue to keep track of vertices to visit next. It also keeps track of the predecessor of each vertex and the distance from the source vertex. When it finds the destination vertex, it returns the distance. If the destination vertex is not reachable, it returns `Number.MAX_SAFE_INTEGER`.