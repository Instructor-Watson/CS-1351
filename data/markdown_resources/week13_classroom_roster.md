# Week 13: Searchable Student Roster

## Overview

This assignment turns Week 13 concepts into a small, finishable Java program or project milestone. Start from the provided template, preserve the public class filename, and run the program in IntelliJ before submitting.

## Objectives

- Design a small immutable object with meaningful methods.
- Create and traverse an array of object references.
- Implement a sequential search that uses object equality.

## Required reading - one new chapter

- [Think Java Chapter 12 - Arrays of Objects](https://chrismayfield.github.io/ThinkJava2/ch12.html)

## Optional supplemental reading - previously covered chapters

- [Chapter 7 - Arrays and References](https://chrismayfield.github.io/ThinkJava2/ch07.html)
- [Chapter 11 - Designing Classes](https://chrismayfield.github.io/ThinkJava2/ch11.html)

## Supplemental videos

- [Arrays of objects](https://www.youtube.com/watch?v=cMJeCs0n6BY)

## Complete these steps

- Create Week13ClassroomRoster and a class named ClassroomRoster.
- Copy the starter into ClassroomRoster.java.
- Keep the Student fields private and final.
- Complete the Student constructor, getId, getName, toString, and equals methods.
- Make toString return the student's ID, a space-hyphen-space, and the student's name, such as 101 - Ada.
- Make equals return true when two Student objects have the same ID and name.
- Create Ada with ID 101, Grace with ID 102, and James with ID 103 in the provided Student array.
- Complete printRoster with an enhanced for loop that prints every Student object.
- Complete findStudent with a standard for loop that returns the matching index or -1 when the target is absent.
- Run the program and confirm the roster displays, Grace is found at index 1, and Linus produces -1.
- Submit ClassroomRoster.java.

## What will be checked

Use this list as your final review before submitting.

- Student has private final ID and name fields plus completed constructor, getters, toString, and equals methods.
- Ada, Grace, and James are stored in a Student array and printed by traversing the array.
- findStudent uses sequential search and returns index 1 for Grace and -1 for Linus.
- The submitted file contains no unfinished TODO marker from the starter template.
