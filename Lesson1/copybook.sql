CREATE DATABASE baumstrukturen;
USE baumstrukturen;

CREATE TABLE german_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    begriff VARCHAR(50),
    text_content TEXT
);

CREATE TABLE russian_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    term VARCHAR(50),
    text_content TEXT
);

INSERT INTO german_content (begriff, text_content) VALUES
('Grad eines Knotens', 'Beim Spiel Tic Tac Toe hat man nach jedem Zug unterschiedlich viele Möglichkeiten, seine Zeichen auf dem Spielfeld zu setzen. Diese Wahl entspricht dem Grad eines Knotens im Baum. Der Grad eines Knotens ist die Anzahl seiner Nachfolger. Blätter haben Grad 0. Der Grad des gesamten Baumes ist der größte Knotengrad im Baum.'),
('Pfad', 'Ein Pfad in einem Baum ist der Weg über Kanten des Baumes, den man gehen muss, um von einem Knoten zu einem anderen zu gelangen. Dabei ist es nicht erlaubt, im Kreis zu laufen oder einen Ausgangsknoten wieder zu erreichen.'),
('Tiefe', 'Die Tiefe eines Knotens ist die Anzahl der Kanten auf dem Pfad von der Wurzel bis zu diesem Knoten. Die Tiefe des Baumes ist die Länge des längsten Pfades von der Wurzel bis zu einem Blatt.'),
('Ebene', 'Ausgehend von der Wurzel kann man die Knoten eines Baumes in Ebenen einteilen. Alle Knoten mit dem gleichen Abstand zur Wurzel liegen in derselben Ebene.'),
('Teilbaum', 'Ein Teilbaum ist ein Teil des Baumes, der selbst wieder ein Baum ist. Jeder Teilbaum kann eigenständig betrachtet werden.');
('Wurzel', '');
('Innerknoten', '');

INSERT INTO russian_content (term, text_content) VALUES
('Степень узла', 'В игре «Крестики-нолики» после каждого хода у игрока есть разное количество возможных продолжений. Это соответствует степени узла в дереве. Степень узла — это количество его потомков. Листья имеют степень 0. Степень дерева — это максимальная степень узлов в дереве.'),
('Путь', 'Путь в дереве — это последовательность рёбер, по которой нужно пройти, чтобы попасть из одного узла в другой. Нельзя проходить по кругу или возвращаться в уже пройденный узел.'),
('Глубина', 'Глубина узла — это количество рёбер на пути от корня до этого узла. Глубина дерева — это длина самого длинного пути от корня до листа.'),
('Уровень', 'Начиная от корня, все узлы дерева можно разделить на уровни. Узлы, находящиеся на одинаковом расстоянии от корня, принадлежат одному уровню.'),
('Поддерево', 'Поддерево — это часть дерева, которая сама по себе является деревом. Каждое поддерево можно рассматривать отдельно.');
