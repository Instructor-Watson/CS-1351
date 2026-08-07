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
    public static void printRoster(Student[] students) {
        // TODO: Use an enhanced for loop to print every Student.
    }

    public static int findStudent(Student[] students, Student target) {
        // TODO: Use sequential search and equals. Return the matching index.
        return -1;
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
    }
}
