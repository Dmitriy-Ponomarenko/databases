package Lesson2;

public class BinaryTree {
    private Object object;
    private BinaryTree left;
    private BinaryTree right;

    public BinaryTree(Object object) {
        this.object = object;
        this.left = null;
        this.right = null;
    }

    public Object getObject() {
        return object;
    }

    public BinaryTree getLeftSubtree() {
        return left;
    }

    public BinaryTree getRightSubtree() {
        return right;
    }

    public void setLeftSubtree(BinaryTree left) {
        this.left = left;
    }

    public void setRightSubtree(BinaryTree right) {
        this.right = right;
    }

    public boolean isEmpty() {
        return object == null;
    }
}
