# Loop-Based Input Validation Guide

Use this guide in Week 11 and Project Part 2 when a program must keep asking until the user enters acceptable text.

## How the course readings connect

- Think Java, Chapter 5, Section 5.9, [Validating Input](https://chrismayfield.github.io/ThinkJava2/ch05.html#validate), explains how a program can test whether input is valid and display a useful message when it is not.
- Think Java, Chapter 6, Section 6.1, [The while Statement](https://chrismayfield.github.io/ThinkJava2/ch06.html#the-while-statement), explains how a `while` loop repeats as long as its condition remains true.

Combine those ideas in this order:

1. Prompt for and read the input.
2. Prepare the input for checking, such as removing extra spaces with `trim`.
3. While the input is invalid, explain the problem and read a new value.
4. Continue only after the loop ends with valid input.

## Completed example 1: reject blank text

    System.out.print("Enter a task: ");
    String task = input.nextLine().trim();

    while (task.isEmpty()) {
        System.out.println("Task cannot be blank.");
        System.out.print("Enter a task: ");
        task = input.nextLine().trim();
    }

    System.out.println("Accepted: " + task);

The loop repeats only while the prepared text is empty. Reading another line inside the loop updates the value being tested.

## Completed example 2: accept one of several menu choices

    System.out.print("Choose 1, 2, or 3: ");
    String choice = input.nextLine().trim();

    while (!choice.equals("1")
            && !choice.equals("2")
            && !choice.equals("3")) {
        System.out.println("Please enter 1, 2, or 3.");
        System.out.print("Choose 1, 2, or 3: ");
        choice = input.nextLine().trim();
    }

    System.out.println("Accepted choice: " + choice);

The loop condition means that the value matches none of the allowed choices. The loop ends as soon as the user enters `1`, `2`, or `3`.

## Testing checklist

- A valid first entry proceeds without an error message.
- An invalid entry produces a clear, specific message.
- A corrected entry ends the loop and allows the program to continue.
- The loop body reads a new value so the condition can change.
- The program retains and uses the corrected value after the loop.

## Common mistakes

- Using an `if` statement when the program must allow more than one retry.
- Forgetting to read a new value inside the loop, which causes the loop to repeat forever.
- Giving a vague message instead of telling the user what input is allowed.
- Comparing strings with `==` instead of the `equals` method.
