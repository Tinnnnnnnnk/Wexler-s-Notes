import java.lang.Thread;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        int[] countWrapper = new int[1];

        Thread[] threads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    countWrapper[0]++;
                }
            });
            threads[i].start();
        }

        for (Thread t : threads) {
            t.join();
        }

        System.out.println("count = " + countWrapper[0]);
    }
}
