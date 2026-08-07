# Week 11: Validated Message Builder

## Overview

This assignment turns Week 11 concepts into a small, finishable Java program or project milestone. Start from the provided template, preserve the public class filename, and run the program in IntelliJ before submitting.

## Objectives

- Modify a StringBuilder.
- Reject blank input with a loop.
- Prepare reusable string-processing logic.

## Required reading - one new chapter

- [Think Java Chapter 10 - Mutable Objects](https://chrismayfield.github.io/ThinkJava2/ch10.html)

## Optional supplemental reading - previously covered chapters

- [Chapter 5 - Conditionals and Logic](https://chrismayfield.github.io/ThinkJava2/ch05.html)
- [Chapter 6 - Loops and Strings](https://chrismayfield.github.io/ThinkJava2/ch06.html)
- [Chapter 9 - Immutable Objects](https://chrismayfield.github.io/ThinkJava2/ch09.html)

## Interactive practice

- [Runestone: calling object methods](https://runestone.academy/ns/books/published/csjava/Unit2-Using-Objects/topic-2-4-methods-with-params.html)

## Supplemental videos

- [String methods review](https://www.youtube.com/watch?v=Ntl3DxhyrQQ)

## Complete these steps

- Read LOOP_BASED_INPUT_VALIDATION_GUIDE.md before starting.
- Create Week11MessageBuilder and a class named MessageBuilder.
- Copy the starter into MessageBuilder.java.
- Prompt for a short message and read it with nextLine().
- Use a while loop to ask again while the trimmed message is empty.
- Create a StringBuilder from the validated text.
- Trim surrounding spaces, convert the message to title-style output by capitalizing its first character, and append an exclamation mark.
- Print Message: followed by the finished text.
- Run once with a blank line followed by java is fun and confirm the program asks again.
- Submit MessageBuilder.java.

## What will be checked

Use this list as your final review before submitting.

- Scanner input and a while validation loop are used.
- A StringBuilder modifies the validated text.
- Blank input is rejected.
- A valid message produces labeled output.
- The submitted file contains no unfinished TODO marker from the starter template.
