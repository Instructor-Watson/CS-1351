import java.util.ArrayList;
import java.util.regex.Pattern;

class Playlist {
    private ArrayList<String> songs = new ArrayList<>();
    private Pattern validTitle = Pattern.compile("TODO");
    public void addSong(String title) {
        // TODO: Throw IllegalArgumentException unless the title matches, then add it.
    }
    public void showSongs() {
        // TODO: Print every song with an enhanced for loop.
    }
}

public class PlaylistDemo {
    public static void main(String[] args) {
        // TODO: Add the three requested songs and show them.
        // TODO: Use try/catch to demonstrate a rejected blank title.
    }
}
