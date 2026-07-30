import java.util.Scanner;

public class VowelCounter {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter one word: " );
        String word = input.nextLine().toLowerCase();
        int vowels = 0;
        // TODO: Loop through word and count a, e, i, o, and u.
        System.out.println("Vowels: " + vowels);
    }
}
