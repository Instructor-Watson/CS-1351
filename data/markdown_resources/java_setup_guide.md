# Java Programming Setup Guide

*OpenJDK 26 and IntelliJ IDEA for Windows, macOS, and Linux*

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

## Troubleshooting

- java works but javac does not: the full JDK is not selected or its bin folder is not on PATH.
- No run triangle: the file must be under src and contain a main method.
- macOS blocks the download: use Privacy & Security > Open Anyway only for files downloaded from the OpenJDK or JetBrains sites linked above.
- No installation permission: use the campus lab image or contact the help desk; online compilers are not a substitute for later file assignments.
