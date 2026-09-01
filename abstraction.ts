interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log("Playing music...");
    }
    pause(): void {
        console.log("Pausing music...");
    }
    stop(): void {
        console.log("Stopping music...");
    }
}

const MezbaPlayer = new MusicPlayer();

MezbaPlayer.play();  // Output: Playing music...
MezbaPlayer.pause(); // Output: Pausing music...
MezbaPlayer.stop();  // Output: Stopping music...