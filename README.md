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

## Getting Started with contribution
if you have liked this project, I immensly welcome you to contribute and make this even more successful. So, the getting started with the projct is quite simple. Since, it is not built on any MVC Framework, anyone can get started with just downloading this repository and running the `index.html` file in their browser.
  - popup.css : This file could be found in the `assests/css` folder. This is mainly responsible for all the layouts and designing. 
  - popup.js : This file is maily reponsible for all the API calls and rendering of the data.

If you want to get started, follow the steps given below :
- Clone the repository.
- Open the repo in your favourite text editor.
- Go through the files that I have mentioned above. 
- Follow the codes.
Now, if you have completed the above steps, you could now start contributing :
- if you wish to raise an issue, follow github instructions on how to raise them.
- if you wish to work on existing issues, just go to issue section, and check if that has been already assigned to anyone else. If not, just comment that you are interested on working on that particular issue. You would be then assigned that issue, if it has not already been taken by others.
- if you have made certain changes, just commit to your local branch and raise a PULL request  here. You could follow Github instructions on how to raise a Pull Request. Your code will then be validated and possibly merged. 

  
## BEST SUPPORTED ON CHROME ;)
