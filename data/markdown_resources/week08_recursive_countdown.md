# Week 8: Recursive Countdown

## Overview

This assignment turns Week 8 concepts into a small, finishable Java program or project milestone. Start from the provided template, preserve the public class filename, and run the program in IntelliJ before submitting.

## Objectives

- Identify a recursive base case.
- Make progress toward the base case.
- Trace a short recursive call.

## Required reading - one new chapter

- [Think Java Chapter 8 - Recursive Methods](https://chrismayfield.github.io/ThinkJava2/ch08.html)

## Optional supplemental reading - previously covered chapters

- [Chapter 5 - Conditionals and Logic](https://chrismayfield.github.io/ThinkJava2/ch05.html)
- [Chapter 6 - Loops and Strings](https://chrismayfield.github.io/ThinkJava2/ch06.html)

## Interactive practice

- [Runestone: recursion practice](https://runestone.academy/ns/books/published/csjava/Unit11-Recursion/recursionCodePractice.html)

## Supplemental videos

- [Methods review](https://www.youtube.com/watch?v=JKecvKiNX2I)

## Complete these steps

- Create Week08RecursiveCountdown and a class named RecursiveCountdown.
- Copy the starter into RecursiveCountdown.java.
- Leave main calling countDown(3).
- At the top of countDown, check whether number is 0.
- For the base case, print Blast off! and return.
- For the recursive case, print number.
- Call countDown(number - 1).
- Run the program and verify 3, 2, 1, and Blast off! appear on separate lines.
- Do not test with a negative starting number.
- Submit RecursiveCountdown.java.

## What will be checked

Use this list as your final review before submitting.

- countDown calls itself.
- A number == 0 base case is present.
- The recursive call uses number - 1.
- Starting at 3 prints the complete countdown.
- The submitted file contains no unfinished TODO marker from the starter template.
