# Tracking Consignment
Ships, carrying thousands of shipments around the world, are attached with a GPS tracker which updates the GPS location. This task is to create a ship tracking system. Users enter the ship details or tracking number (airway bill) to find the location of the ship. They have multiple journeys from A to B and so on.

![Prototype](https://github.com/himanshukumar660/Vessel-Tracking/blob/master/Screenshots/intro.png)

## Features
- Implemented Real Time vessel tracking through MSSI number
- History Tracking of 45 days
- Customized Google Marker

![Working Example](https://github.com/himanshukumar660/Vessel-Tracking/blob/master/Screenshots/working.png)

## Language
- Javascript, CSS, HTML
- Materaial Design Bootstrap

## APIS
- Marine Tracffic
- Google Maps APIs

## Approach
- The user enters the MSSI number of corresponding vessel.
- Using API call to Marine traffic Database, the History of the vessel is tracked and is stored in a JSON Object.
- Iterating through the JSONO, the Checkpoints are filled in the Checkpoints Table.
- The Geocodes of the vessels are stored in an array.
- Google Maps APIs are used for plottting all the Geocodes over the course of all the history tracks.
- Using Polylines, these geocodes are connected to each other to make the trajectory of the vessel visible.

## BEST SUPPORTED ON CHROME ;)
