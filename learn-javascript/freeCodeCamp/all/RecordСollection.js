// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    if (value !== "") {
        // If prop isn't "tracks" and value isn't empty (""),
        // update or set the value for that record album's property.
        collection[id][prop] = value;
    } else if (prop !== "track") {
        // If prop is "tracks" but the album doesn't have a "tracks"
        // property, create an empty array before adding the new value to the album's corresponding property.
        collection[id][prop]=[value];
    } else if (prop === "track" && value !== "") {
        // If prop is "tracks" and value isn't empty (""),
        // push the value onto the end of the album's existing tracks array.
        collection[id][prop].push(value);
    } else if (value === "") {
        // If value is empty (""),
        // delete the given prop property from the album.
        delete collection[id][prop]
    }
    return collection;
}

// Alter values below to test your code
/*updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");*/
updateRecords(1245, "album", "Riptide");
