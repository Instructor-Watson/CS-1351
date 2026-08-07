import java.util.ArrayList;

class Playlist {
    private ArrayList<String> songs;

    public Playlist() {
        // TODO: Initialize songs as an empty ArrayList.
    }

    public void addSong(String title) {
        // TODO: Add title to the end of songs.
    }

    public String playNext() {
        // TODO: Return null when empty; otherwise remove and return the first song.
        return null;
    }

    public boolean isEmpty() {
        return false; // TODO: Wrap the ArrayList isEmpty method.
    }

    public void showSongs() {
        // TODO: Print every song with an enhanced for loop.
    }

    private void swapSongs(int i, int j) {
        // TODO: Exchange the songs at indexes i and j.
    }

    private int indexLowest(int low) {
        // TODO: Return the index of the alphabetically lowest song from low onward.
        return low;
    }

    public void selectionSort() {
        // TODO: For each position, find the lowest remaining song and swap it here.
    }
}

public class PlaylistDemo {
    public static void main(String[] args) {
        Playlist playlist = new Playlist();
        // TODO: Add Imagine, Happy, and Here Comes the Sun in that order.

        System.out.println("Original playlist:");
        playlist.showSongs();

        // TODO: Sort the playlist.
        System.out.println("Sorted playlist:");
        playlist.showSongs();

        System.out.println("Playing next: " + playlist.playNext());
        System.out.println("Playlist empty: " + playlist.isEmpty());
    }
}
