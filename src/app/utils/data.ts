export let data = {
    "start_date": "30 May 2018",
    "position": "Train arrived at KANPUR CENTRAL(CNB) and late by 12 minutes.",
    "train": {
        "number": "12302",
        "name": "KOLKATA RAJDHANI EXPRESS",
        "classes": [
            {
                "name": "FIRST AC",
                "available": "Y",
                "code": "1A"
            },
            {
                "name": "SECOND AC",
                "available": "Y",
                "code": "2A"
            },
            {
                "name": "3rd AC ECONOMY",
                "available": "N",
                "code": "3E"
            },
            {
                "name": "FIRST CLASS",
                "available": "N",
                "code": "FC"
            },
            {
                "name": "SLEEPER CLASS",
                "available": "N",
                "code": "SL"
            },
            {
                "name": "AC CHAIR CAR",
                "available": "N",
                "code": "CC"
            },
            {
                "name": "SECOND SEATING",
                "available": "N",
                "code": "2S"
            },
            {
                "name": "THIRD AC",
                "available": "Y",
                "code": "3A"
            }
        ],
        "days": [
            {
                "runs": "Y",
                "code": "MON"
            },
            {
                "runs": "Y",
                "code": "TUE"
            },
            {
                "runs": "Y",
                "code": "WED"
            },
            {
                "runs": "Y",
                "code": "THU"
            },
            {
                "runs": "N",
                "code": "FRI"
            },
            {
                "runs": "Y",
                "code": "SAT"
            },
            {
                "runs": "Y",
                "code": "SUN"
            }
        ]
    },
    "current_station": {
        "name": "KANPUR CENTRAL",
        "code": "CNB",
        "lng": 80.3506961,
        "lat": 26.4547354
    },
    "debit": 2,
    "response_code": 200,
    "route": [
        {
            "station": {
                "name": "NEW DELHI",
                "code": "NDLS",
                "lng": -90.2612233,
                "lat": 39.0317139
            },
            "has_departed": true,
            "day": 0,
            "distance": 0,
            "actdep": "16:55",
            "has_arrived": true,
            "scharr": "Source",
            "actarr_date": "30 May 2018",
            "schdep": "16:55",
            "latemin": 0,
            "scharr_date": "30 May 2018",
            "actarr": "00:00",
            "status": "0 mins late"
        },
        {
            "station": {
                "name": "KANPUR CENTRAL",
                "code": "CNB",
                "lng": 80.3506961,
                "lat": 26.4547354
            },
            "has_departed": false,
            "day": 0,
            "distance": 447,
            "actdep": "21:52",
            "has_arrived": true,
            "scharr": "21:35",
            "actarr_date": "30 May 2018",
            "schdep": "21:40",
            "latemin": 16,
            "scharr_date": "30 May 2018",
            "actarr": "21:51",
            "status": "16 mins late"
        },
        {
            "station": {
                "name": "ALLAHABAD JN",
                "code": "ALD",
                "lng": 81.896732069544,
                "lat": 25.2859603
            },
            "has_departed": false,
            "day": 0,
            "distance": 641,
            "actdep": "23:43",
            "has_arrived": false,
            "scharr": "23:40",
            "actarr_date": "30 May 2018",
            "schdep": "23:43",
            "latemin": 0,
            "scharr_date": "30 May 2018",
            "actarr": "23:40",
            "status": "0 mins late"
        },
        {
            "station": {
                "name": "MUGHAL SARAI JN",
                "code": "MGS",
                "lng": 83.1251282,
                "lat": 25.2807327
            },
            "has_departed": false,
            "day": 1,
            "distance": 790,
            "actdep": "01:54",
            "has_arrived": false,
            "scharr": "01:44",
            "actarr_date": "31 May 2018",
            "schdep": "01:54",
            "latemin": 0,
            "scharr_date": "31 May 2018",
            "actarr": "01:44",
            "status": "0 mins late"
        },
        {
            "station": {
                "name": "GAYA JN",
                "code": "GAYA",
                "lng": 85.0079563,
                "lat": 24.7964355
            },
            "has_departed": false,
            "day": 1,
            "distance": 994,
            "actdep": "03:50",
            "has_arrived": false,
            "scharr": "03:47",
            "actarr_date": "31 May 2018",
            "schdep": "03:50",
            "latemin": 0,
            "scharr_date": "31 May 2018",
            "actarr": "03:47",
            "status": "0 mins late"
        },
        {
            "station": {
                "name": "PARASNATH",
                "code": "PNME",
                "lng": 86.0377584,
                "lat": 23.987738
            },
            "has_departed": false,
            "day": 1,
            "distance": 1146,
            "actdep": "05:47",
            "has_arrived": false,
            "scharr": "05:45",
            "actarr_date": "31 May 2018",
            "schdep": "05:47",
            "latemin": 0,
            "scharr_date": "31 May 2018",
            "actarr": "05:45",
            "status": "0 mins late"
        },
        {
            "station": {
                "name": "DHANBAD JN",
                "code": "DHN",
                "lng": 86.4309638,
                "lat": 23.7952809
            },
            "has_departed": false,
            "day": 1,
            "distance": 1193,
            "actdep": "06:40",
            "has_arrived": false,
            "scharr": "06:35",
            "actarr_date": "31 May 2018",
            "schdep": "06:40",
            "latemin": 0,
            "scharr_date": "31 May 2018",
            "actarr": "06:35",
            "status": "0 mins late"
        },
        {
            "station": {
                "name": "HOWRAH JN",
                "code": "HWH",
                "lng": 88.323139,
                "lat": 22.5882216
            },
            "has_departed": false,
            "day": 1,
            "distance": 1452,
            "actdep": "00:00",
            "has_arrived": false,
            "scharr": "09:50",
            "actarr_date": "31 May 2018",
            "schdep": "Destination",
            "latemin": 0,
            "scharr_date": "31 May 2018",
            "actarr": "09:50",
            "status": "0 mins late"
        }
    ]
}