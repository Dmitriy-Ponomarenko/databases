package Lesson2;
import java.util.Stack;

public class A3 {
    public void wasTueIch(BinaryTree b) {
        Stack<BinaryTree> stapel = new Stack<>();
        while (!stapel.isEmpty() || !b.isEmpty()) {
            if (!b.isEmpty()) {
                stapel.push(b);
                b = b.getLeftSubtree();
            } else {
                b = (BinaryTree) stapel.peek();
                stapel.pop();
                System.out.println((Integer) b.getObject());
                b = b.getRightSubtree();
            }
        }
    }
}
