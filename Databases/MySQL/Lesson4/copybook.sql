CREATE TABLE "GraphenBegriffe" (
    "ID" INTEGER PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Beschreibung" TEXT
);

CREATE TABLE "GraphenBegriffe_RU" (
    "ID" INTEGER PRIMARY KEY,
    "Name_DE" TEXT NOT NULL,
    "Name_RU" TEXT NOT NULL,
    "Beschreibung_RU" TEXT
);

INSERT INTO GraphenBegriffe (Name, Beschreibung) VALUES
(1, 'Adjazenzliste', 'Eine Datenstruktur, die für jeden Knoten eine Liste seiner Nachbarknoten speichert.'),
(2, 'Adjazenzmatrix', 'Eine quadratische Matrix, in der der Eintrag an Position (i,j) angibt, ob eine Kante zwischen Knoten existiert.'),
(3, 'Gerichtet', 'Ein Graph, bei dem die Kanten eine Richtung haben.'),
(4, 'Gewichtet', 'Ein Graph, bei dem die Kanten mit Werten (Gewichten) versehen sind, z.B. für Kosten oder Entfernungen.'),
(5, 'Zusammenhängend', 'Ein Graph, bei dem jeder Knoten von jedem anderen Knoten aus erreichbar ist.'),
(6, 'Vollständig', 'Ein Graph, bei dem jeder Knoten mit jedem anderen Knoten direkt verbunden ist.');

INSERT INTO GraphenBegriffe_RU (Name_DE, Name_RU, Beschreibung_RU) VALUES
(1, 'Adjazenzliste', 'Список смежности', 'Структура данных, в которой для каждой вершины хранится список соседних вершин.'),
(2, 'Adjazenzmatrix', 'Матрица смежности', 'Квадратная матрица, где элемент в позиции (i,j) показывает наличие ребра между вершинами.'),
(3, 'Gerichtet', 'Ориентированный граф', 'Граф, в котором ребра имеют направление.'),
(4, 'Gewichtet', 'Взвешенный граф', 'Граф, в котором ребра имеют значения (веса), например, для стоимости или расстояния.'),
(5, 'Zusammenhängend', 'Связный граф', 'Граф, в котором каждая вершина достижима из любой другой вершины.'),
(6, 'Vollständig', 'Полный граф', 'Граф, в котором каждая вершина соединена с каждой другой вершиной напрямую.');