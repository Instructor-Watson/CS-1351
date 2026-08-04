import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

class Student {
    private final int id;
    private final String name;

    public Student(int id, String name) {
        // TODO: Initialize both fields.
    }

    public int getId() {
        return 0; // TODO
    }

    public String getName() {
        return ""; // TODO
    }

    public String toString() {
        return ""; // TODO: Return text such as 101 - Ada.
    }

    public boolean equals(Student that) {
        return false; // TODO: Compare both the ID and name.
    }
}

public class ClassroomRoster {
    private static final Path ROSTER_FILE = Path.of("students.txt");

    public static void printRoster(Student[] students) {
        // TODO: Use an enhanced for loop to print every Student.
    }

    public static int findStudent(Student[] students, Student target) {
        // TODO: Use sequential search and equals. Return the matching index.
        return -1;
    }

    // This completed method demonstrates file output and input.
    // Read it, run it, and observe students.txt; no changes are required.
    public static void saveAndLoadRoster(Student[] students) {
        StringBuilder fileText = new StringBuilder();
        for (Student student : students) {
            fileText.append(student).append(System.lineSeparator());
        }

        try {
            Files.writeString(ROSTER_FILE, fileText.toString());
            String loadedText = Files.readString(ROSTER_FILE);
            System.out.println("Loaded from students.txt:");
            System.out.print(loadedText);
        } catch (IOException error) {
            System.out.println("Could not use roster file: " + error.getMessage());
        }
    }

    public static void main(String[] args) {
        Student[] students = {
            // TODO: Create Ada (101), Grace (102), and James (103).
        };

        System.out.println("Roster:");
        printRoster(students);

        Student grace = new Student(102, "Grace");
        Student linus = new Student(999, "Linus");
        System.out.println("Grace index: " + findStudent(students, grace));
        System.out.println("Linus index: " + findStudent(students, linus));

        saveAndLoadRoster(students);
    }
}
