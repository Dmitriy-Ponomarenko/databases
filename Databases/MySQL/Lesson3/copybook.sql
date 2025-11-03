CREATE TABLE "Graphen" (
    "ID" INTEGER PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Beschreibung" TEXT,

);

INSERT INTO Graphen (Name, Beschreibung) VALUES
(1, 'Eulertour', 'Ein geschlossener Weg in einem Graphen, der jede Kante genau einmal durchläuft und am Startknoten wieder endet.'),
(2, 'Eulerweg', 'Ein Weg in einem Graphen, der jede Kante genau einmal durchläuft, aber nicht zwingend am Startknoten endet.'),

(3, 'Hamiltonkreis', 'Ein geschlossener Weg, der jeden Knoten genau einmal besucht.'),
(4, 'Hamiltonweg', 'Ein offener Weg, der jeden Knoten genau einmal besucht.'),

(5, 'Dijkstra-Algorithmus', 'Ein Algorithmus zur Bestimmung der kuerzesten Wege in einem Graphen mit nicht-negativen Kantengewichten.'),
(6, 'Breitensuche (BFS)', 'Ein Algorithmus zur Durchsuchung oder Traversierung von Graphen oder Baumstrukturen.'),
(7, 'Tiefensuche (DFS)', 'Ein Algorithmus zur Durchsuchung oder Traversierung von Graphen oder Baumstrukturen.');