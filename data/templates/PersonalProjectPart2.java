import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Pattern;

public class PersonalProjectPart2 {
    private static final Path DATA_FILE = Path.of("project-data.txt");
    private static final Pattern VALID_INPUT = Pattern.compile(".+"); // TODO: customize
    public static ArrayList<String> loadData() throws IOException {
        // TODO: Return saved data, or an empty list when the file does not exist.
        return new ArrayList<>();
    }
    public static void saveData(ArrayList<String> data) throws IOException {
        // TODO: Save data to DATA_FILE.
    }
    public static String readValidInput(Scanner input) {
        // TODO: Loop until input matches VALID_INPUT.
        return "";
    }
    public static void main(String[] args) {
        // TODO: Integrate Part 1 with strings, validation, exceptions, regex, and file I/O.
    }
}
