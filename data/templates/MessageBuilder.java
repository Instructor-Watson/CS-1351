import java.util.Scanner;

public class MessageBuilder {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a message: " );
        String text = input.nextLine();
        // TODO: Keep asking while text.trim() is empty.
        // TODO: Build a trimmed message, capitalize its first character, and append !
        StringBuilder message = new StringBuilder();
        System.out.println("Message: " + message);
    }
}
