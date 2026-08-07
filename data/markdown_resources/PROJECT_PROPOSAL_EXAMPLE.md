# Personal Project Proposal

## Project title
Local Study List

## Purpose and intended user
This console program helps a student keep a small list of study tasks. The student can add a task, view all tasks, or quit.

## Part 1 workflow
The program displays a menu in a loop. The user chooses add, list, or quit; invalid choices show a helpful message.

## Foundational Java feature map
- Console input/output: menu prompts and responses
- Variables: menu choice and task text
- If/else-if/else: menu actions
- Relational and logical operators: valid menu range and nonblank task
- Loop: repeat the menu until quit
- At least two methods besides main: showMenu and performAction
- Array: store task strings

## Three example interactions
1. Input: add and Read chapter 7; expected result: task is stored
2. Input: list; expected result: stored tasks are displayed
3. Input: quit; expected result: goodbye message and program ends

## Part 2 improvements
- String manipulation: trim and format tasks
- Loop-based input validation: reject blank tasks and keep asking
- Collection use: organize and process task strings in an ArrayList

## Expected files
PersonalProjectPart1.java, PersonalProjectPart2.java, and README.md

## Timeline
- Weeks 8-9: build menu and task list
- Week 10: test and present prototype
- Weeks 11-14: add one advanced feature after each lesson
- Week 15: final testing, README, and presentation

## Risks and fallback plans
1. If editing tasks is too complex, keep add and list only.
2. If multiple classes cause errors, use one class with focused static methods.
