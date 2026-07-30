import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;

class Student {
    private String name;
    public Student(String name) { /* TODO */ }
    public String getName() { return ""; } // TODO
}

public class ClassroomRoster {
    public static void main(String[] args) {
        // TODO: Create Ada, Grace, and James in a Student array and copy their names into a list.
        try {
            Files.write(Path.of("students.txt"), new ArrayList<String>()); // TODO: write the actual names.
            // TODO: Read students.txt and print the loaded names.
        } catch (IOException error) {
            // TODO: Print a helpful message.
        }
    }
}
