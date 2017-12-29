function submit() {
	//   LOST ALL MARINE TRAFFIC API CREDITS IN THE PROCESS OF TESTING, SO I HAVE COMMENTED OUT THE API CALL METHODS, INSTEAD MADE A JSON OBJECT THAT   WOULD HAVE BEEN RETURNED FROM THE API CALLS. IN ORDER TO MAKE API CALLS, JUST UNCOMMENT
	//       VAR API_KEY
	//       VAR Days
	//       VAR adr_url
	//       $.getJSON(adr_url, function(data) {
	// AND REMOVE THE VAR data.


	//var API_KEY = "2ec27d6862ce7272d200fc70b6397a71b77e85c8";
	var Days = 45;
	//var MSSI = document.getElementById('mssi').value;
	//var adr_url = "http://services.marinetraffic.com/api/exportvesseltrack/" + API_KEY + "/v:2/period:daily/days:" + Days + "/mmsi:" + MSSI + "/protocol:jsono";

	//$.getJSON(adr_url, function(data) {
	data = [{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "130",
			"LON": "-17.113850",
			"LAT": "9.903927",
			"COURSE": "327",
			"HEADING": "328",
			"TIMESTAMP": "2017-11-22T04:29:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "130",
			"LON": "-18.384000",
			"LAT": "13.877950",
			"COURSE": "358",
			"HEADING": "359",
			"TIMESTAMP": "2017-11-23T00:30:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "128",
			"LON": "-18.450330",
			"LAT": "19.047730",
			"COURSE": "358",
			"HEADING": "359",
			"TIMESTAMP": "2017-11-24T00:32:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "128",
			"LON": "-17.473710",
			"LAT": "23.899820",
			"COURSE": "31",
			"HEADING": "33",
			"TIMESTAMP": "2017-11-25T00:10:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "121",
			"LON": "-15.151100",
			"LAT": "28.283170",
			"COURSE": "43",
			"HEADING": "41",
			"TIMESTAMP": "2017-11-26T00:58:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "122",
			"LON": "-11.239460",
			"LAT": "31.762110",
			"COURSE": "45",
			"HEADING": "50",
			"TIMESTAMP": "2017-11-27T00:29:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "127",
			"LON": "-7.020110",
			"LAT": "35.304650",
			"COURSE": "45",
			"HEADING": "46",
			"TIMESTAMP": "2017-11-28T00:38:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "120",
			"LON": "-0.981698",
			"LAT": "37.221030",
			"COURSE": "49",
			"HEADING": "48",
			"TIMESTAMP": "2017-11-29T02:20:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "84",
			"LON": "1.060345",
			"LAT": "40.527960",
			"COURSE": "12",
			"HEADING": "11",
			"TIMESTAMP": "2017-11-30T00:55:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "5",
			"SPEED": "1",
			"LON": "1.219565",
			"LAT": "41.064660",
			"COURSE": "196",
			"HEADING": "14",
			"TIMESTAMP": "2017-12-01T00:54:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "146",
			"LON": "1.118523",
			"LAT": "40.738660",
			"COURSE": "191",
			"HEADING": "193",
			"TIMESTAMP": "2017-12-02T00:55:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "131",
			"LON": "-2.671252",
			"LAT": "36.380560",
			"COURSE": "261",
			"HEADING": "260",
			"TIMESTAMP": "2017-12-03T00:47:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "1",
			"SPEED": "2",
			"LON": "-5.408215",
			"LAT": "36.080540",
			"COURSE": "319",
			"HEADING": "95",
			"TIMESTAMP": "2017-12-04T00:55:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "20",
			"LON": "-4.924090",
			"LAT": "36.192950",
			"COURSE": "254",
			"HEADING": "189",
			"TIMESTAMP": "2017-12-05T00:51:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "14",
			"LON": "-4.924087",
			"LAT": "36.199520",
			"COURSE": "268",
			"HEADING": "207",
			"TIMESTAMP": "2017-12-06T00:50:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "12",
			"LON": "-4.918093",
			"LAT": "36.195590",
			"COURSE": "237",
			"HEADING": "184",
			"TIMESTAMP": "2017-12-07T00:12:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "4",
			"LON": "-4.793155",
			"LAT": "36.197080",
			"COURSE": "231",
			"HEADING": "212",
			"TIMESTAMP": "2017-12-08T00:12:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "21",
			"LON": "-4.766997",
			"LAT": "36.211910",
			"COURSE": "108",
			"HEADING": "173",
			"TIMESTAMP": "2017-12-09T00:06:00",
			"SHIP_ID": "4910653"
		},
		{
			"MMSI": "241486000",
			"STATUS": "0",
			"SPEED": "99",
			"LON": "-10.326350",
			"LAT": "32.139540",
			"COURSE": "221",
			"HEADING": "220",
			"TIMESTAMP": "2017-12-11T00:10:00",
			"SHIP_ID": "4910653"
		}
	]
	if (data.errors) {
		var Error = JSON.stringify(data.errors[0].detail).replace(/["]/g, "");
		document.getElementById('details').innerHTML = '<div class="text-center"><i class="fa fa-close" style="font-size:7em;color:red" aria-hidden="true"></i><br><br>' + "<h>" + Error + "</h></div>";
	} else {

		var address_components = "";
		var geocode_lat = JSON.stringify(data[data.length - 1].LAT).replace(/["]/g, "");
		var geocode_lon = JSON.stringify(data[data.length - 1].LON).replace(/["]/g, "");
    var bounds = new google.maps.LatLngBounds();
    var marker, each;
		var flightPlanCoordinates = [];
    var icon_anchor = {
      url: './img/anchor.png'
    };

    var icon_blob = {
      url: './img/dot.png'
    };
    var count = data.length - 1;
    var map = new google.maps.Map(document.getElementById('details'), {
      zoom: 8,
      center: new google.maps.LatLng(geocode_lat, geocode_lon),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (var each in data) {
      var time = data[each].TIMESTAMP.replace(/[T]/g, " ");
			var time = time.split(' ');
      var icn;
			address_components = "<tr>" +
				"<th scope='row'>" + time[0].replace(/[-]/g, "/") + "</th>" +
				"<td>" + time[1] + "</td>" +
				"<td>" + JSON.stringify(data[each].LAT).replace(/["]/g, "") + "</td>" +
				"<td>" + JSON.stringify(data[each].LON).replace(/["]/g, "") + "</td>" +
				"</tr>" + address_components;
        bounds.extend(new google.maps.LatLng(JSON.stringify(data[each].LAT).replace(/["_]/g, ""), JSON.stringify(data[each].LON).replace(/["]/g, "")));
  			flightPlanCoordinates.push({
  				lat: Number(JSON.stringify(data[each].LAT).replace(/["]/g, "")),
  				lng: Number(JSON.stringify(data[each].LON).replace(/["]/g, ""))
  			});
  			if (each == count) {
  				console.log("Executes")
  				icn = icon_anchor;
  			} else {
  				console.log("Executes2")
  				icn = icon_blob;
  			}
  			var marker = new google.maps.Marker({
  				position: new google.maps.LatLng(JSON.stringify(data[each].LAT).replace(/["_]/g, ""), JSON.stringify(data[each].LON).replace(/["]/g, "")),
  				map: map,
  				icon: icn
  			})
		}
    map.fitBounds(bounds);
    var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
    flightPath.setMap(map);
    document.getElementById('checkpoints').innerHTML = address_components;
	}
};

$(document).ready(function() {
	$('.search').click(function() {
		submit();
	});
});

document.onkeydown = function() {
	if (window.event.keyCode == '13') {
		submit();
	}
};
