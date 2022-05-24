## Ableton Live Track Clip Name

Using Ableton-JS (https://github.com/leolabs/ableton-js) to expose the clipname of that is playing on a track for usage in broadcast or other applications. 

## Installation
Clone this repository and in the folder do:

```typescript
npm install
```

## Prerequisites

Copy the `midi-script` folder of from node_modules/ableton-js to
Ableton's Remote Scripts folder and rename it to `AbletonJS`. The MIDI Remote Scripts folder is
usually located at:

- **Windows:** {path to Ableton}\Resources\MIDI\Remote Scripts
- **macOS:** /Applications/Ableton Live {version}/Contents/App-Resources/MIDI
  Remote Scripts

After starting Ableton Live, add the script to your list of control surfaces:

![Ableton Live Settings](https://i.imgur.com/a34zJca.png)

## Running the scipt

Fill the tracknumber in at line 6 of index.js (for example ```const track_number = 3 ```) for the script to start listening to what clip is currently playing on that track.

Run the script on the same computer as Ableton is running:

```typescript
node index.js
```

## Usage

When the script is running you have access to the name in either json or plaintext by going to the following addresses:

http://localhost:3000/json

http://localhost:3000/name

If you are using for example OBS you can simply open the song.txt file as text and it will automatically update. 