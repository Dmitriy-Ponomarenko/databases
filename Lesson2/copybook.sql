CREATE TABLE "Binaere_Baeume" (
    "ID" INTEGER PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Beschreibung" TEXT,

);

INSERT INTO Binaere_Baeume (Name, Beschreibung) VALUES
(1, 'Biner Baum', 'Jeder Knoten hat hoechstens zwei Kinder: links und rechts.'),
(2, 'Preorder Traversierung', 'Zuerst die Wurzel, dann der linke Teilbaum, danach der rechte Teilbaum.'),
(3, 'Inorder Traversierung', 'Zuerst die linke Teilbaum, dann die Wurzel, danach der rechte Teilbaum.'),
(5, 'Postprder Traversierung', 'Zuerst der linke Teilbaum, dann der rechte Teilbaum, danach die Wurzel.'),
(4, 'SELECT', 'Waelt Daten aus einer oder mehreren Tabellen aus.'),
(5, 'WHERE', 'Filtert die Datensaetze nach bestimmten Kriterien.'),
(6, 'JOIN', 'Verbindet Daten aus mehreren Tabellen.');
(7, 'ORDER BY', 'Sortiert die Ergebnisse einer Abfrage.');
(8, 'GROUP BY', 'Gruppiert Zeilen nach Spaltenwerten');

-- Selection for all the topics of the tree:
SELECT * FROM Binaere_Baeume;

-- Selection for a specific topic:
SELECT * FROM Binaere_Baeume WHERE Name = 'SELECT', 'WHERE', 'JOIN', 'ORDER BY', 'GROUP BY';

-- Selection with ordering (asc):
SELECT * FROM Binaere_Baeume ORDER BY Name ASC;

-- Selection with ordering (desc):
SELECT * FROM Binaere_Baeume ORDER BY Name DESC;

-- Grouping of the table:
SELECT Name, COUNT(*) AS Anzahl FROM Binaere_Baeume GROUP BY Name;

-- Example of a join (with the same table):
SELECT a.ID, a.Name AS Name1, b.Name AS Name2 FROM Binaere_Baeume a JOIN Binaere_Baeume b ON a.ID < b.ID LIMIT 10;
