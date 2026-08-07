# Week 14: Organized Playlist

## Overview

This assignment turns Week 14 concepts into a small, finishable Java program or project milestone. Start from the provided template, preserve the public class filename, and run the program in IntelliJ before submitting.

## Objectives

- Encapsulate an ArrayList inside an object.
- Use wrapper and private helper methods to manage the collection.
- Implement selection sort by repeatedly locating and swapping the lowest remaining song.

## Required reading - one new chapter

- [Think Java Chapter 13 - Objects of Arrays](https://chrismayfield.github.io/ThinkJava2/ch13.html)

## Optional supplemental reading - previously covered chapters

- [Chapter 12 - Arrays of Objects](https://chrismayfield.github.io/ThinkJava2/ch12.html)

## Interactive practice

- [Runestone: ArrayList coding practice](https://runestone.academy/ns/books/published/csjava/Unit8-ArrayList/listPractice.html)

## Supplemental videos

- [ArrayLists](https://www.youtube.com/watch?v=wsTSREgCE5E)

## Complete these steps

- Create Week14Playlist and a class named PlaylistDemo.
- Copy the starter into PlaylistDemo.java.
- Complete the Playlist constructor so songs refers to an empty ArrayList<String>.
- Complete addSong so it adds a title to the end of the collection.
- Complete playNext so it returns null when the playlist is empty; otherwise it removes and returns the first song.
- Complete isEmpty as a wrapper for the ArrayList isEmpty method.
- Use an enhanced for loop in showSongs to print every title.
- Complete the private swapSongs helper so it exchanges two song positions.
- Complete the private indexLowest helper so it returns the index of the alphabetically lowest title from low through the end of the list.
- Complete selectionSort so it calls indexLowest and swapSongs for each position in the playlist.
- In main, add Imagine, Happy, and Here Comes the Sun in that order.
- Display the original playlist, sort it, display the sorted playlist, play the next song, and report whether the playlist is empty.
- Run and confirm Happy is the first song played after sorting and the playlist is not empty.
- Submit PlaylistDemo.java.

## What will be checked

Use this list as your final review before submitting.

- Playlist owns and initializes an ArrayList<String>.
- Wrapper methods add, remove, inspect, and display songs.
- Private helper methods locate and swap songs.
- selectionSort alphabetizes the collection by calling the helper methods.
- The program displays the original and sorted playlists, plays Happy first, and reports that songs remain.
- The submitted file contains no unfinished TODO marker from the starter template.
