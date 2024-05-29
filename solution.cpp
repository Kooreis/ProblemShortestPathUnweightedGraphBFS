```cpp
#include <iostream>
#include <list>
#include <vector>
#include <queue>

class Graph {
    int numVertices;
    std::vector<std::list<int>> adjLists;
    std::vector<bool> visited;

public:
    Graph(int vertices);
    void addEdge(int src, int dest);
    void BFS(int startVertex, int endVertex);
};

Graph::Graph(int vertices) {
    numVertices = vertices;
    adjLists.resize(vertices);
    visited.resize(vertices);
}

void Graph::addEdge(int src, int dest) {
    adjLists[src].push_back(dest);
    adjLists[dest].push_back(src);
}

void Graph::BFS(int startVertex, int endVertex) {
    std::vector<int> pred(numVertices, -1);
    std::vector<int> dist(numVertices, INT_MAX);
    std::queue<int> q;

    visited[startVertex] = true;
    dist[startVertex] = 0;
    q.push(startVertex);

    while (!q.empty()) {
        int currentVertex = q.front();
        q.pop();

        for (auto it = adjLists[currentVertex].begin(); it != adjLists[currentVertex].end(); it++) {
            int adjVertex = *it;
            if (!visited[adjVertex]) {
                visited[adjVertex] = true;
                dist[adjVertex] = dist[currentVertex] + 1;
                pred[adjVertex] = currentVertex;
                q.push(adjVertex);

                if (adjVertex == endVertex)
                    break;
            }
        }
    }

    std::vector<int> path;
    int crawl = endVertex;
    path.push_back(crawl);
    while (pred[crawl] != -1) {
        path.push_back(pred[crawl]);
        crawl = pred[crawl];
    }

    std::cout << "Shortest path length is : " << dist[endVertex];

    std::cout << "\nPath is : ";
    for (int i = path.size() - 1; i >= 0; i--)
        std::cout << path[i] << " ";
}

int main() {
    Graph g(8);
    g.addEdge(0, 1);
    g.addEdge(0, 3);
    g.addEdge(1, 2);
    g.addEdge(3, 4);
    g.addEdge(3, 7);
    g.addEdge(4, 5);
    g.addEdge(4, 6);
    g.addEdge(4, 7);
    g.addEdge(5, 6);
    g.addEdge(6, 7);
    g.BFS(0, 7);

    return 0;
}
```