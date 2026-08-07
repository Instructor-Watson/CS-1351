# Week 1: Hello, World!

## Overview

This assignment turns Week 1 concepts into a small, finishable Java program or project milestone. Start from the provided template, preserve the public class filename, and run the program in IntelliJ before submitting.

## Objectives

- Recognize the class and main method in a Java program.
- Use System.out.println to display text.
- Create and run a Java file in IntelliJ IDEA.

## Required reading - one new chapter

- [Think Java Chapter 1 - Computer Programming](https://chrismayfield.github.io/ThinkJava2/ch01.html)

## Interactive practice

- [Runestone: first Java programs](https://runestone.academy/ns/books/published/csjava/Unit1-Getting-Started/topic-1-2-java-intro.html)

## Supplemental videos

- [Start coding with Java](https://www.youtube.com/watch?v=23HFxAPyJ9U)

## Complete these steps

- Open IntelliJ IDEA and choose New Project.
- Select Java, choose OpenJDK 26, keep the build system set to IntelliJ, and name the project Week01HelloWorld.
- In the Project panel, right-click src and choose New > Java Class.
- Enter HelloWorld exactly. IntelliJ creates HelloWorld.java and a matching class.
- Inside the class, type the main method shown in Chapter 1.
- Inside main, add System.out.println("Hello, World!");
- Use the green triangle beside main and choose Run 'HelloWorld.main()'.
- Confirm the Run window displays Hello, World!
- Save and submit HelloWorld.java. Do not submit a screenshot instead of the Java file.

## What will be checked

Use this list as your final review before submitting.

- The file is named HelloWorld.java and contains class HelloWorld.
- A main method is present.
- The program prints Hello, World! exactly.
- The submitted file contains no unfinished TODO marker from the starter template.

## OpenJDK 26 and IntelliJ setup

Install a standalone OpenJDK 26, then install IntelliJ IDEA. The JDK contains the compiler and runtime; IntelliJ is the editor and project workspace. Do not select IntelliJ's bundled runtime as the project JDK.

- [OpenJDK 26 downloads](https://jdk.java.net/26/)
- [Download IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
- [JetBrains SDK setup guide](https://www.jetbrains.com/help/idea/sdk.html)

## Windows 10/11

- Download the Windows x64 OpenJDK 26 archive and extract it to a permanent folder such as C:\Program Files\Java\jdk-26, or use IntelliJ's Download JDK command and choose OpenJDK 26.
- Open Command Prompt and run java -version and javac -version. Both must begin with 26.
- Install IntelliJ IDEA with the Windows installer and keep the default options.

## macOS

- Apple menu > About This Mac: Apple M-series uses ARM64; Intel Macs use x64.
- Download the matching OpenJDK 26 archive, install/extract it, then verify java -version and javac -version both begin with 26 in Terminal.
- Download the matching IntelliJ DMG, drag IntelliJ IDEA to Applications, and open it.

## Linux

- Run uname -m: x86_64 uses x64; aarch64/arm64 uses ARM64.
- Download the matching OpenJDK 26 archive, extract it to a permanent JDK folder, and configure JAVA_HOME/PATH if your distribution does not do so automatically.
- Verify java -version and javac -version both begin with 26. Install IntelliJ using JetBrains Toolbox or the official Linux archive.

## Create and run the first project

- Open IntelliJ IDEA. On the Welcome screen choose New Project.
- Select Java on the left. Set Name to Week01HelloWorld and choose a location you can find again.
- For JDK, select OpenJDK 26. If it is missing, choose Add JDK from Disk and select the JDK home folder, or choose Download JDK and select version 26.
- Set Build system to IntelliJ, leave Add sample code off, and choose Create.
- In the Project panel, expand the project. Right-click src and choose New > Java Class.
- Type HelloWorld exactly and press Enter. IntelliJ creates HelloWorld.java; a public class filename must match its class name exactly, including capitalization.
- Type public static void main(String[] args) inside the class, then add System.out.println("Hello, World!"); inside main.
- Select the green triangle beside main, choose Run 'HelloWorld.main()', and look for Hello, World! in the Run window.
- If Project SDK is not defined, open File > Project Structure > Project and select OpenJDK 26. Do not select jbr, which is the runtime used to launch IntelliJ itself.
