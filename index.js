import { Ableton } from "ableton-js";
import express from 'express';
import * as fs from 'fs';


const track_number = 3
const ableton = new Ableton();
const app = express()
const port = 3000
var playing_song = ""


app.get('/json', (req, res) => {
        
    res.send({
        "playing_song": playing_song
    })    

})

app.get('/name', (req, res) => {
        
    res.send(playing_song)    

})


app.listen(port, () => {
  console.log(`Trackname is available on ${port}/name and as json on ${port}/json`)
})




const getPlayingClipTrack = async () => {
  
const tracks = await ableton.song.get("tracks");


  let clip_slots = await tracks[track_number - 1].get("clip_slots")
  
  clip_slots.forEach(async (slot) => {
    if(slot.raw.is_playing === true){
        let clip = await slot.get("clip")
        const name = await clip.get("name");
        playing_song = name
        fs.writeFile('song.txt', name, function (err) {
            if (err) return console.log(err);
          });
    }

  });
  };

function run(){
    setInterval(getPlayingClipTrack, 5000)
}
run();