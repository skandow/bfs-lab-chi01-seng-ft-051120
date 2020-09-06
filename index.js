function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let queue = []
    let visitedOrder = []
    addToQueue(rootNode, queue)
    while (queue.length !== 0) {
        let firstNode = queue.shift()
        visitedOrder.push(firstNode)
        let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
        if (adjacentVertices) {
        markDistanceAndPredecessor(firstNode, adjacentVertices)
        adjacentVertices.forEach(vertex => {
            addToQueue(vertex, queue)
        })}
    }
    return visitedOrder
}

function findAdjacent(name, vertices, edges) {
    let adjacentNames = [] 
    edges.forEach(edge => {
        if (edge[0] === name) {
            adjacentNames.push(edge[1])
        } else if (edge[1] === name) {
            adjacentNames.push(edge[0])
        }
    })
    let answerArray = []
    adjacentNames.forEach(name => {
        let adjacentVertex = vertices.find(vertex => vertex.name === name)
        if (adjacentVertex.distance === null) {
            answerArray.push(adjacentVertex)
        }  
    })
    return answerArray
}

function markDistanceAndPredecessor(firstNode, adjacentVertices) {
    adjacentVertices.forEach(vertex => {
        vertex.predecessor = firstNode 
        vertex.distance = firstNode.distance + 1
    })
}

function addToQueue(node, queue) {
    queue.push(node)
}
