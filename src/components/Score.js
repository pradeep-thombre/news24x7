import React from 'react';
import ScoreDetails from './ScoreDetails';
import { Row, Col } from 'react-bootstrap';

export default function Score( ) {
    return (
        <div className='my-3 mx-3'>
            <Row>
                {scoreData.data.map((element, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-3">
                        <ScoreDetails matchData={element} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

var scoreData = {
    "data": [
        {
            "id": "42577362",
            "startDate": "2020-09-19T00:00:00.000Z",
            "endDate": "2020-09-19T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-19T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.2/20 ov, T:163",
                        "score": "166/5"
                    },
                    "home": {
                        "info": null,
                        "score": "162/9"
                    }
                },
                "report": "CSK won by 5 wickets (with 4 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577397",
            "startDate": "2020-09-20T00:00:00.000Z",
            "endDate": "2020-09-20T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-20T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:158",
                        "score": "157/8"
                    },
                    "home": {
                        "info": null,
                        "score": "157/8"
                    }
                },
                "report": "Match tied (DC won the one-over eliminator)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577432",
            "startDate": "2020-10-21T00:00:00.000Z",
            "endDate": "2020-10-21T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-21T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "13.3/20 ov, T:85",
                        "score": "85/2"
                    },
                    "home": {
                        "info": null,
                        "score": "84/8"
                    }
                },
                "report": "RCB won by 8 wickets (with 39 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577467",
            "startDate": "2020-11-03T00:00:00.000Z",
            "endDate": "2020-11-03T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-03T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "149/8"
                    },
                    "home": {
                        "info": "17.1/20 ov, T:150",
                        "score": "151/0"
                    }
                },
                "report": "SRH won by 10 wickets (with 17 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577502",
            "startDate": "2020-09-22T00:00:00.000Z",
            "endDate": "2020-09-22T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-22T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:217",
                        "score": "200/6"
                    },
                    "home": {
                        "info": null,
                        "score": "216/7"
                    }
                },
                "report": "RR won by 16 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577537",
            "startDate": "2020-10-24T00:00:00.000Z",
            "endDate": "2020-10-24T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-24T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:195",
                        "score": "135/9"
                    },
                    "home": {
                        "info": null,
                        "score": "194/6"
                    }
                },
                "report": "KKR won by 59 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577572",
            "startDate": "2020-10-24T00:00:00.000Z",
            "endDate": "2020-10-24T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-24T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.5/20 ov, T:127",
                        "score": "114"
                    },
                    "home": {
                        "info": null,
                        "score": "126/7"
                    }
                },
                "report": "Kings XI won by 12 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577607",
            "startDate": "2020-10-28T00:00:00.000Z",
            "endDate": "2020-10-28T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-28T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "164/6"
                    },
                    "home": {
                        "info": "19.1/20 ov, T:165",
                        "score": "166/5"
                    }
                },
                "report": "MI won by 5 wickets (with 5 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577642",
            "startDate": "2020-10-09T00:00:00.000Z",
            "endDate": "2020-10-09T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-09T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "184/8"
                    },
                    "home": {
                        "info": "19.4/20 ov, T:185",
                        "score": "138"
                    }
                },
                "report": "DC won by 46 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577677",
            "startDate": "2020-10-07T00:00:00.000Z",
            "endDate": "2020-10-07T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-07T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:168",
                        "score": "157/5"
                    },
                    "home": {
                        "info": null,
                        "score": "167"
                    }
                },
                "report": "KKR won by 10 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577712",
            "startDate": "2020-10-31T00:00:00.000Z",
            "endDate": "2020-10-31T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-31T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "14.1/20 ov, T:121",
                        "score": "121/5"
                    },
                    "home": {
                        "info": null,
                        "score": "120/7"
                    }
                },
                "report": "SRH won by 5 wickets (with 35 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577747",
            "startDate": "2020-10-01T00:00:00.000Z",
            "endDate": "2020-10-01T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-01T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "191/4"
                    },
                    "home": {
                        "info": "20 ov, T:192",
                        "score": "143/8"
                    }
                },
                "report": "MI won by 48 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577782",
            "startDate": "2020-09-30T00:00:00.000Z",
            "endDate": "2020-09-30T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-30T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "174/6"
                    },
                    "home": {
                        "info": "20 ov, T:175",
                        "score": "137/9"
                    }
                },
                "report": "KKR won by 37 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577817",
            "startDate": "2020-11-02T00:00:00.000Z",
            "endDate": "2020-11-02T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-02T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "152/7"
                    },
                    "home": {
                        "info": "19/20 ov, T:153",
                        "score": "154/4"
                    }
                },
                "report": "DC won by 6 wickets (with 6 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577852",
            "startDate": "2020-11-01T00:00:00.000Z",
            "endDate": "2020-11-01T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-01T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "153/6"
                    },
                    "home": {
                        "info": "18.5/20 ov, T:154",
                        "score": "154/1"
                    }
                },
                "report": "CSK won by 9 wickets (with 7 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577887",
            "startDate": "2020-10-11T00:00:00.000Z",
            "endDate": "2020-10-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-11T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.5/20 ov, T:159",
                        "score": "163/5"
                    },
                    "home": {
                        "info": null,
                        "score": "158/4"
                    }
                },
                "report": "RR won by 5 wickets (with 1 ball remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577922",
            "startDate": "2020-09-23T00:00:00.000Z",
            "endDate": "2020-09-23T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-23T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "195/5"
                    },
                    "home": {
                        "info": "20 ov, T:196",
                        "score": "146/9"
                    }
                },
                "report": "MI won by 49 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577957",
            "startDate": "2020-10-17T00:00:00.000Z",
            "endDate": "2020-10-17T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-17T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "179/4"
                    },
                    "home": {
                        "info": "19.5/20 ov, T:180",
                        "score": "185/5"
                    }
                },
                "report": "DC won by 5 wickets (with 1 ball remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42577992",
            "startDate": "2020-09-24T00:00:00.000Z",
            "endDate": "2020-09-24T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-24T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "17/20 ov, T:207",
                        "score": "109"
                    },
                    "home": {
                        "info": null,
                        "score": "206/3"
                    }
                },
                "report": "Kings XI won by 97 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578027",
            "startDate": "2020-10-06T00:00:00.000Z",
            "endDate": "2020-10-06T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-06T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "18.1/20 ov, T:194",
                        "score": "136"
                    },
                    "home": {
                        "info": null,
                        "score": "193/4"
                    }
                },
                "report": "MI won by 57 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578062",
            "startDate": "2020-10-18T00:00:00.000Z",
            "endDate": "2020-10-18T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-18T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "163/5"
                    },
                    "home": {
                        "info": "20 ov, T:164",
                        "score": "163/6"
                    }
                },
                "report": "Match tied (KKR won the one-over eliminator)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578097",
            "startDate": "2020-10-04T00:00:00.000Z",
            "endDate": "2020-10-04T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-04T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "17.4/20 ov, T:179",
                        "score": "181/0"
                    },
                    "home": {
                        "info": null,
                        "score": "178/4"
                    }
                },
                "report": "CSK won by 10 wickets (with 14 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578132",
            "startDate": "2020-10-03T00:00:00.000Z",
            "endDate": "2020-10-03T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-03T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "154/6"
                    },
                    "home": {
                        "info": "19.1/20 ov, T:155",
                        "score": "158/2"
                    }
                },
                "report": "RCB won by 8 wickets (with 5 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578167",
            "startDate": "2020-10-03T00:00:00.000Z",
            "endDate": "2020-10-03T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-03T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:229",
                        "score": "210/8"
                    },
                    "home": {
                        "info": null,
                        "score": "228/4"
                    }
                },
                "report": "DC won by 18 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578202",
            "startDate": "2020-10-02T00:00:00.000Z",
            "endDate": "2020-10-02T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-02T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "164/5"
                    },
                    "home": {
                        "info": "20 ov, T:165",
                        "score": "157/5"
                    }
                },
                "report": "SRH won by 7 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578237",
            "startDate": "2020-10-18T00:00:00.000Z",
            "endDate": "2020-10-18T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-18T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:177",
                        "score": "176/6"
                    },
                    "home": {
                        "info": null,
                        "score": "176/6"
                    }
                },
                "report": "Match tied (Kings XI won the 2nd Super Over)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578272",
            "startDate": "2020-10-22T00:00:00.000Z",
            "endDate": "2020-10-22T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-22T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "18.1/20 ov, T:155",
                        "score": "156/2"
                    },
                    "home": {
                        "info": null,
                        "score": "154/6"
                    }
                },
                "report": "SRH won by 8 wickets (with 11 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578307",
            "startDate": "2020-10-05T00:00:00.000Z",
            "endDate": "2020-10-05T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-05T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "196/4"
                    },
                    "home": {
                        "info": "20 ov, T:197",
                        "score": "137/9"
                    }
                },
                "report": "DC won by 59 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578342",
            "startDate": "2020-10-26T00:00:00.000Z",
            "endDate": "2020-10-26T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-26T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "18.5/20 ov, T:150",
                        "score": "150/2"
                    },
                    "home": {
                        "info": null,
                        "score": "149/9"
                    }
                },
                "report": "Kings XI won by 8 wickets (with 7 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578377",
            "startDate": "2020-10-23T00:00:00.000Z",
            "endDate": "2020-10-23T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-23T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "12.2/20 ov, T:115",
                        "score": "116/0"
                    },
                    "home": {
                        "info": null,
                        "score": "114/9"
                    }
                },
                "report": "MI won by 10 wickets (with 46 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578412",
            "startDate": "2020-10-17T00:00:00.000Z",
            "endDate": "2020-10-17T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-17T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.4/20 ov, T:178",
                        "score": "179/3"
                    },
                    "home": {
                        "info": null,
                        "score": "177/6"
                    }
                },
                "report": "RCB won by 7 wickets (with 2 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578447",
            "startDate": "2020-10-10T00:00:00.000Z",
            "endDate": "2020-10-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-10T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "164/6"
                    },
                    "home": {
                        "info": "20 ov, T:165",
                        "score": "162/5"
                    }
                },
                "report": "KKR won by 2 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578482",
            "startDate": "2020-10-27T00:00:00.000Z",
            "endDate": "2020-10-27T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-27T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19/20 ov, T:220",
                        "score": "131"
                    },
                    "home": {
                        "info": null,
                        "score": "219/2"
                    }
                },
                "report": "SRH won by 88 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578517",
            "startDate": "2020-10-10T00:00:00.000Z",
            "endDate": "2020-10-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-10T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "169/4"
                    },
                    "home": {
                        "info": "20 ov, T:170",
                        "score": "132/8"
                    }
                },
                "report": "RCB won by 37 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578552",
            "startDate": "2020-10-16T00:00:00.000Z",
            "endDate": "2020-10-16T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-16T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "148/5"
                    },
                    "home": {
                        "info": "16.5/20 ov, T:149",
                        "score": "149/2"
                    }
                },
                "report": "MI won by 8 wickets (with 19 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578587",
            "startDate": "2020-09-27T00:00:00.000Z",
            "endDate": "2020-09-27T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-27T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "223/2"
                    },
                    "home": {
                        "info": "19.3/20 ov, T:224",
                        "score": "226/6"
                    }
                },
                "report": "RR won by 4 wickets (with 3 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578622",
            "startDate": "2020-10-13T00:00:00.000Z",
            "endDate": "2020-10-13T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-13T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "167/6"
                    },
                    "home": {
                        "info": "20 ov, T:168",
                        "score": "147/8"
                    }
                },
                "report": "CSK won by 20 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578657",
            "startDate": "2020-10-11T00:00:00.000Z",
            "endDate": "2020-10-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-11T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "162/4"
                    },
                    "home": {
                        "info": "19.4/20 ov, T:163",
                        "score": "166/5"
                    }
                },
                "report": "MI won by 5 wickets (with 2 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578692",
            "startDate": "2020-11-01T00:00:00.000Z",
            "endDate": "2020-11-01T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-01T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:192",
                        "score": "131/9"
                    },
                    "home": {
                        "info": null,
                        "score": "191/7"
                    }
                },
                "report": "KKR won by 60 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578727",
            "startDate": "2020-10-15T00:00:00.000Z",
            "endDate": "2020-10-15T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-15T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:172",
                        "score": "177/2"
                    },
                    "home": {
                        "info": null,
                        "score": "171/6"
                    }
                },
                "report": "Kings XI won by 8 wickets (with 0 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578762",
            "startDate": "2020-09-29T00:00:00.000Z",
            "endDate": "2020-09-29T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-29T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "162/4"
                    },
                    "home": {
                        "info": "20 ov, T:163",
                        "score": "147/7"
                    }
                },
                "report": "SRH won by 15 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578797",
            "startDate": "2020-10-19T00:00:00.000Z",
            "endDate": "2020-10-19T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-19T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "17.3/20 ov, T:126",
                        "score": "126/3"
                    },
                    "home": {
                        "info": null,
                        "score": "125/5"
                    }
                },
                "report": "RR won by 7 wickets (with 15 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578832",
            "startDate": "2020-09-21T00:00:00.000Z",
            "endDate": "2020-09-21T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-21T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "163/5"
                    },
                    "home": {
                        "info": "19.4/20 ov, T:164",
                        "score": "153"
                    }
                },
                "report": "RCB won by 10 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578867",
            "startDate": "2020-10-31T00:00:00.000Z",
            "endDate": "2020-10-31T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-31T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "14.2/20 ov, T:111",
                        "score": "111/1"
                    },
                    "home": {
                        "info": null,
                        "score": "110/9"
                    }
                },
                "report": "MI won by 9 wickets (with 34 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578902",
            "startDate": "2020-10-29T00:00:00.000Z",
            "endDate": "2020-10-29T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-29T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "172/5"
                    },
                    "home": {
                        "info": "20 ov, T:173",
                        "score": "178/4"
                    }
                },
                "report": "CSK won by 6 wickets (with 0 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578937",
            "startDate": "2020-10-30T00:00:00.000Z",
            "endDate": "2020-10-30T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-30T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "17.3/20 ov, T:186",
                        "score": "186/3"
                    },
                    "home": {
                        "info": null,
                        "score": "185/4"
                    }
                },
                "report": "RR won by 7 wickets (with 15 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42578972",
            "startDate": "2020-10-04T00:00:00.000Z",
            "endDate": "2020-10-04T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-04T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:209",
                        "score": "174/7"
                    },
                    "home": {
                        "info": null,
                        "score": "208/5"
                    }
                },
                "report": "MI won by 34 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579007",
            "startDate": "2020-09-25T00:00:00.000Z",
            "endDate": "2020-09-25T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-25T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "175/3"
                    },
                    "home": {
                        "info": "20 ov, T:176",
                        "score": "131/7"
                    }
                },
                "report": "DC won by 44 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579042",
            "startDate": "2020-10-12T00:00:00.000Z",
            "endDate": "2020-10-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-12T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:195",
                        "score": "112/9"
                    },
                    "home": {
                        "info": null,
                        "score": "194/2"
                    }
                },
                "report": "RCB won by 82 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579077",
            "startDate": "2020-10-25T00:00:00.000Z",
            "endDate": "2020-10-25T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-25T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "195/5"
                    },
                    "home": {
                        "info": "18.2/20 ov, T:196",
                        "score": "196/2"
                    }
                },
                "report": "RR won by 8 wickets (with 10 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579112",
            "startDate": "2020-10-08T00:00:00.000Z",
            "endDate": "2020-10-08T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-08T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "16.5/20 ov, T:202",
                        "score": "132"
                    },
                    "home": {
                        "info": null,
                        "score": "201/6"
                    }
                },
                "report": "SRH won by 69 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "homeTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579147",
            "startDate": "2020-10-14T00:00:00.000Z",
            "endDate": "2020-10-14T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-14T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:162",
                        "score": "148/8"
                    },
                    "home": {
                        "info": null,
                        "score": "161/7"
                    }
                },
                "report": "DC won by 13 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759337",
                "logo": "https://highlightly.net/cricket/images/teams/11759337.png",
                "name": "Rajasthan Royals",
                "abbreviation": "RR"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579182",
            "startDate": "2020-10-25T00:00:00.000Z",
            "endDate": "2020-10-25T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-25T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "18.4/20 ov, T:146",
                        "score": "150/2"
                    },
                    "home": {
                        "info": null,
                        "score": "145/6"
                    }
                },
                "report": "CSK won by 8 wickets (with 8 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759232",
                "logo": "https://highlightly.net/cricket/images/teams/11759232.png",
                "name": "Chennai Super Kings",
                "abbreviation": "CSK"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579217",
            "startDate": "2020-09-26T00:00:00.000Z",
            "endDate": "2020-09-26T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-26T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "142/4"
                    },
                    "home": {
                        "info": "18/20 ov, T:143",
                        "score": "145/3"
                    }
                },
                "report": "KKR won by 7 wickets (with 12 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759127",
                "logo": "https://highlightly.net/cricket/images/teams/11759127.png",
                "name": "Kolkata Knight Riders",
                "abbreviation": "KKR"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579252",
            "startDate": "2020-10-20T00:00:00.000Z",
            "endDate": "2020-10-20T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-10-20T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "164/5"
                    },
                    "home": {
                        "info": "19/20 ov, T:165",
                        "score": "167/5"
                    }
                },
                "report": "Kings XI won by 5 wickets (with 6 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "homeTeam": {
                "id": "11759197",
                "logo": "https://highlightly.net/cricket/images/teams/11759197.png",
                "name": "Punjab Kings",
                "abbreviation": "PBKS"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42579287",
            "startDate": "2020-09-28T00:00:00.000Z",
            "endDate": "2020-09-28T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-09-28T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:202",
                        "score": "201/5"
                    },
                    "home": {
                        "info": null,
                        "score": "201/3"
                    }
                },
                "report": "Match tied (RCB won the one-over eliminator)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "42600112",
            "startDate": "2021-03-21T00:00:00.000Z",
            "endDate": "2021-03-21T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-03-21T13:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:182",
                        "score": "167/7"
                    },
                    "home": {
                        "info": null,
                        "score": "181/4"
                    }
                },
                "report": "IND Legends won by 14 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "42599447",
                "logo": "https://highlightly.net/cricket/images/teams/42599447.png",
                "name": "Sri Lanka Legends",
                "abbreviation": "SL-L"
            },
            "homeTeam": {
                "id": "42599307",
                "logo": "https://highlightly.net/cricket/images/teams/42599307.png",
                "name": "India Legends",
                "abbreviation": "IND-L"
            },
            "league": {
                "id": "42599272",
                "logo": null,
                "name": "Road Safety World Series",
                "season": 2020
            }
        },
        {
            "id": "43245652",
            "startDate": "2020-11-04T00:00:00.000Z",
            "endDate": "2020-11-04T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-04T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.5/20 ov, T:127",
                        "score": "129/5"
                    },
                    "home": {
                        "info": null,
                        "score": "126/8"
                    }
                },
                "report": "Velocity won by 5 wickets (with 1 ball remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "41366257",
                "logo": "https://highlightly.net/cricket/images/teams/41366257.png",
                "name": "Velocity",
                "abbreviation": "VEL"
            },
            "homeTeam": {
                "id": "40137722",
                "logo": "https://highlightly.net/cricket/images/teams/40137722.png",
                "name": "Supernovas",
                "abbreviation": "SNO"
            },
            "league": {
                "id": "42991027",
                "logo": "https://highlightly.net/cricket/images/leagues/42991027.png",
                "name": "Women's T20 Challenge",
                "season": 2020
            }
        },
        {
            "id": "43245687",
            "startDate": "2020-11-05T00:00:00.000Z",
            "endDate": "2020-11-05T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-05T10:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "7.5/20 ov, T:48",
                        "score": "49/1"
                    },
                    "home": {
                        "info": null,
                        "score": "47"
                    }
                },
                "report": "Trailblazers won by 9 wickets (with 73 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40137687",
                "logo": "https://highlightly.net/cricket/images/teams/40137687.png",
                "name": "Trailblazers",
                "abbreviation": "TBL"
            },
            "homeTeam": {
                "id": "41366257",
                "logo": "https://highlightly.net/cricket/images/teams/41366257.png",
                "name": "Velocity",
                "abbreviation": "VEL"
            },
            "league": {
                "id": "42991027",
                "logo": "https://highlightly.net/cricket/images/leagues/42991027.png",
                "name": "Women's T20 Challenge",
                "season": 2020
            }
        },
        {
            "id": "43245722",
            "startDate": "2020-11-07T00:00:00.000Z",
            "endDate": "2020-11-07T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-07T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "146/6"
                    },
                    "home": {
                        "info": "20 ov, T:147",
                        "score": "144/5"
                    }
                },
                "report": "Supernovas won by 2 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40137722",
                "logo": "https://highlightly.net/cricket/images/teams/40137722.png",
                "name": "Supernovas",
                "abbreviation": "SNO"
            },
            "homeTeam": {
                "id": "40137687",
                "logo": "https://highlightly.net/cricket/images/teams/40137687.png",
                "name": "Trailblazers",
                "abbreviation": "TBL"
            },
            "league": {
                "id": "42991027",
                "logo": "https://highlightly.net/cricket/images/leagues/42991027.png",
                "name": "Women's T20 Challenge",
                "season": 2020
            }
        },
        {
            "id": "43245757",
            "startDate": "2020-11-09T00:00:00.000Z",
            "endDate": "2020-11-09T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-09T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:119",
                        "score": "102/7"
                    },
                    "home": {
                        "info": null,
                        "score": "118/8"
                    }
                },
                "report": "Trailblazers won by 16 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40137722",
                "logo": "https://highlightly.net/cricket/images/teams/40137722.png",
                "name": "Supernovas",
                "abbreviation": "SNO"
            },
            "homeTeam": {
                "id": "40137687",
                "logo": "https://highlightly.net/cricket/images/teams/40137687.png",
                "name": "Trailblazers",
                "abbreviation": "TBL"
            },
            "league": {
                "id": "42991027",
                "logo": "https://highlightly.net/cricket/images/leagues/42991027.png",
                "name": "Women's T20 Challenge",
                "season": 2020
            }
        },
        {
            "id": "43301337",
            "startDate": "2020-11-05T00:00:00.000Z",
            "endDate": "2020-11-05T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-05T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "200/5"
                    },
                    "home": {
                        "info": "20 ov, T:201",
                        "score": "143/8"
                    }
                },
                "report": "MI won by 57 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "43301372",
            "startDate": "2020-11-06T00:00:00.000Z",
            "endDate": "2020-11-06T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-06T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.4/20 ov, T:132",
                        "score": "132/4"
                    },
                    "home": {
                        "info": null,
                        "score": "131/7"
                    }
                },
                "report": "SRH won by 6 wickets (with 2 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759092",
                "logo": "https://highlightly.net/cricket/images/teams/11759092.png",
                "name": "Royal Challengers Bangalore",
                "abbreviation": "RCB"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "43301442",
            "startDate": "2020-11-08T00:00:00.000Z",
            "endDate": "2020-11-08T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-08T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:190",
                        "score": "172/8"
                    },
                    "home": {
                        "info": null,
                        "score": "189/3"
                    }
                },
                "report": "DC won by 17 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "21991797",
                "logo": "https://highlightly.net/cricket/images/teams/21991797.png",
                "name": "Sunrisers Hyderabad",
                "abbreviation": "SRH"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "43301477",
            "startDate": "2020-11-10T00:00:00.000Z",
            "endDate": "2020-11-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2020-11-10T14:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "18.4/20 ov, T:157",
                        "score": "157/5"
                    },
                    "home": {
                        "info": null,
                        "score": "156/7"
                    }
                },
                "report": "MI won by 5 wickets (with 8 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "11759372",
                "logo": "https://highlightly.net/cricket/images/teams/11759372.png",
                "name": "Mumbai Indians",
                "abbreviation": "MI"
            },
            "homeTeam": {
                "id": "11759267",
                "logo": "https://highlightly.net/cricket/images/teams/11759267.png",
                "name": "Delhi Capitals",
                "abbreviation": "DC"
            },
            "league": {
                "id": "42370967",
                "logo": null,
                "name": "IPL",
                "season": 2020
            }
        },
        {
            "id": "43537027",
            "startDate": "2022-03-06T00:00:00.000Z",
            "endDate": "2022-03-06T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "ODI",
            "startTime": "2022-03-06T01:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "43/50 ov, T:245",
                        "score": "137"
                    },
                    "home": {
                        "info": null,
                        "score": "244/7"
                    }
                },
                "report": "IND Women won by 107 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "104127",
                "logo": "https://highlightly.net/cricket/images/teams/104127.png",
                "name": "Pakistan Women",
                "abbreviation": "PAK-W"
            },
            "homeTeam": {
                "id": "63562",
                "logo": "https://highlightly.net/cricket/images/teams/63562.png",
                "name": "India Women",
                "abbreviation": "IND-W"
            },
            "league": {
                "id": "42666122",
                "logo": "https://highlightly.net/cricket/images/leagues/42666122.png",
                "name": "ICC Women's World Cup",
                "season": 2021
            }
        },
        {
            "id": "43537237",
            "startDate": "2022-03-12T00:00:00.000Z",
            "endDate": "2022-03-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "ODI",
            "startTime": "2022-03-12T01:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "40.3/50 ov, T:318",
                        "score": "162"
                    },
                    "home": {
                        "info": null,
                        "score": "317/8"
                    }
                },
                "report": "IND Women won by 155 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "133702",
                "logo": "https://highlightly.net/cricket/images/teams/133702.png",
                "name": "West Indies Women",
                "abbreviation": "WI-W"
            },
            "homeTeam": {
                "id": "63562",
                "logo": "https://highlightly.net/cricket/images/teams/63562.png",
                "name": "India Women",
                "abbreviation": "IND-W"
            },
            "league": {
                "id": "42666122",
                "logo": "https://highlightly.net/cricket/images/leagues/42666122.png",
                "name": "ICC Women's World Cup",
                "season": 2021
            }
        },
        {
            "id": "43537412",
            "startDate": "2022-03-16T00:00:00.000Z",
            "endDate": "2022-03-16T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "ODI",
            "startTime": "2022-03-16T01:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "134"
                    },
                    "home": {
                        "info": "31.2/50 ov, T:135",
                        "score": "136/6"
                    }
                },
                "report": "ENG Women won by 4 wickets (with 112 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "63562",
                "logo": "https://highlightly.net/cricket/images/teams/63562.png",
                "name": "India Women",
                "abbreviation": "IND-W"
            },
            "homeTeam": {
                "id": "34267",
                "logo": "https://highlightly.net/cricket/images/teams/34267.png",
                "name": "England Women",
                "abbreviation": "ENG-W"
            },
            "league": {
                "id": "42666122",
                "logo": "https://highlightly.net/cricket/images/leagues/42666122.png",
                "name": "ICC Women's World Cup",
                "season": 2021
            }
        },
        {
            "id": "43537517",
            "startDate": "2022-03-19T00:00:00.000Z",
            "endDate": "2022-03-19T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "ODI",
            "startTime": "2022-03-19T01:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "277/7"
                    },
                    "home": {
                        "info": "49.3/50 ov, T:278",
                        "score": "280/4"
                    }
                },
                "report": "AUS Women won by 6 wickets (with 3 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "63562",
                "logo": "https://highlightly.net/cricket/images/teams/63562.png",
                "name": "India Women",
                "abbreviation": "IND-W"
            },
            "homeTeam": {
                "id": "8472",
                "logo": "https://highlightly.net/cricket/images/teams/8472.png",
                "name": "Australia Women",
                "abbreviation": "AUS-W"
            },
            "league": {
                "id": "42666122",
                "logo": "https://highlightly.net/cricket/images/leagues/42666122.png",
                "name": "ICC Women's World Cup",
                "season": 2021
            }
        },
        {
            "id": "43537657",
            "startDate": "2022-03-22T00:00:00.000Z",
            "endDate": "2022-03-22T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "ODI",
            "startTime": "2022-03-22T01:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "229/7"
                    },
                    "home": {
                        "info": "40.3/50 ov, T:230",
                        "score": "119"
                    }
                },
                "report": "IND Women won by 110 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "63562",
                "logo": "https://highlightly.net/cricket/images/teams/63562.png",
                "name": "India Women",
                "abbreviation": "IND-W"
            },
            "homeTeam": {
                "id": "10466437",
                "logo": "https://highlightly.net/cricket/images/teams/10466437.png",
                "name": "Bangladesh Women",
                "abbreviation": "BAN-W"
            },
            "league": {
                "id": "42666122",
                "logo": "https://highlightly.net/cricket/images/leagues/42666122.png",
                "name": "ICC Women's World Cup",
                "season": 2021
            }
        },
        {
            "id": "43537867",
            "startDate": "2022-03-27T00:00:00.000Z",
            "endDate": "2022-03-27T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "ODI",
            "startTime": "2022-03-27T01:00:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "50 ov, T:275",
                        "score": "275/7"
                    },
                    "home": {
                        "info": null,
                        "score": "274/7"
                    }
                },
                "report": "SA Women won by 3 wickets (with 0 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "116622",
                "logo": "https://highlightly.net/cricket/images/teams/116622.png",
                "name": "South Africa Women",
                "abbreviation": "SA-W"
            },
            "homeTeam": {
                "id": "63562",
                "logo": "https://highlightly.net/cricket/images/teams/63562.png",
                "name": "India Women",
                "abbreviation": "IND-W"
            },
            "league": {
                "id": "42666122",
                "logo": "https://highlightly.net/cricket/images/leagues/42666122.png",
                "name": "ICC Women's World Cup",
                "season": 2021
            }
        },
        {
            "id": "43550852",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "18.4/20 ov, T:151",
                        "score": "107"
                    },
                    "home": {
                        "info": null,
                        "score": "150/5"
                    }
                },
                "report": "Karnataka won by 43 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "64122",
                "logo": "https://highlightly.net/cricket/images/teams/64122.png",
                "name": "Jammu & Kashmir",
                "abbreviation": "J + K"
            },
            "homeTeam": {
                "id": "65662",
                "logo": "https://highlightly.net/cricket/images/teams/65662.png",
                "name": "Karnataka",
                "abbreviation": "KNTKA"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43550887",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:135",
                        "score": "123/5"
                    },
                    "home": {
                        "info": null,
                        "score": "134/7"
                    }
                },
                "report": "Punjab won by 11 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "75777",
                "logo": "https://highlightly.net/cricket/images/teams/75777.png",
                "name": "Uttar Pradesh",
                "abbreviation": "UP"
            },
            "homeTeam": {
                "id": "70562",
                "logo": "https://highlightly.net/cricket/images/teams/70562.png",
                "name": "Punjab",
                "abbreviation": "PNJB"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43550922",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "170/3"
                    },
                    "home": {
                        "info": "19.3/20 ov, T:171",
                        "score": "173/4"
                    }
                },
                "report": "Railways won by 6 wickets (with 3 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "75357",
                "logo": "https://highlightly.net/cricket/images/teams/75357.png",
                "name": "Tripura",
                "abbreviation": "TPURA"
            },
            "homeTeam": {
                "id": "63947",
                "logo": "https://highlightly.net/cricket/images/teams/63947.png",
                "name": "Railways",
                "abbreviation": "RLYS"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43550957",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "113"
                    },
                    "home": {
                        "info": "12.2/20 ov, T:114",
                        "score": "114/1"
                    }
                },
                "report": "Bengal won by 9 wickets (with 46 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "69722",
                "logo": "https://highlightly.net/cricket/images/teams/69722.png",
                "name": "Odisha",
                "abbreviation": "ODSA"
            },
            "homeTeam": {
                "id": "55162",
                "logo": "https://highlightly.net/cricket/images/teams/55162.png",
                "name": "Bengal",
                "abbreviation": "BENG"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43550992",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "189/5"
                    },
                    "home": {
                        "info": "20 ov, T:190",
                        "score": "123/7"
                    }
                },
                "report": "Tamil Nadu won by 66 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "74797",
                "logo": "https://highlightly.net/cricket/images/teams/74797.png",
                "name": "Tamil Nadu",
                "abbreviation": "TN"
            },
            "homeTeam": {
                "id": "40487372",
                "logo": "https://highlightly.net/cricket/images/teams/40487372.png",
                "name": "Jharkhand",
                "abbreviation": "JHK"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551027",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T13:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:160",
                        "score": "157/8"
                    },
                    "home": {
                        "info": null,
                        "score": "159/5"
                    }
                },
                "report": "Assam won by 2 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "61882",
                "logo": "https://highlightly.net/cricket/images/teams/61882.png",
                "name": "Hyderabad (India)",
                "abbreviation": "HYD"
            },
            "homeTeam": {
                "id": "54392",
                "logo": "https://highlightly.net/cricket/images/teams/54392.png",
                "name": "Assam",
                "abbreviation": "ASSAM"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551062",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "19.3/20 ov, T:158",
                        "score": "128"
                    },
                    "home": {
                        "info": null,
                        "score": "157/8"
                    }
                },
                "report": "Gujarat won by 29 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "66817",
                "logo": "https://highlightly.net/cricket/images/teams/66817.png",
                "name": "Maharashtra",
                "abbreviation": "MAHA"
            },
            "homeTeam": {
                "id": "60657",
                "logo": "https://highlightly.net/cricket/images/teams/60657.png",
                "name": "Gujarat",
                "abbreviation": "GUJ"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551097",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "173/5"
                    },
                    "home": {
                        "info": "20 ov, T:174",
                        "score": "141/8"
                    }
                },
                "report": "Himachal won by 32 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "61462",
                "logo": "https://highlightly.net/cricket/images/teams/61462.png",
                "name": "Himachal Pradesh",
                "abbreviation": "HP"
            },
            "homeTeam": {
                "id": "14959982",
                "logo": "https://highlightly.net/cricket/images/teams/14959982.png",
                "name": "Chhattisgarh",
                "abbreviation": "CGARH"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551132",
            "startDate": "2021-01-10T00:00:00.000Z",
            "endDate": "2021-01-10T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-10T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:169",
                        "score": "163/6"
                    },
                    "home": {
                        "info": null,
                        "score": "168/7"
                    }
                },
                "report": "Baroda won by 5 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40487582",
                "logo": "https://highlightly.net/cricket/images/teams/40487582.png",
                "name": "Uttarakhand",
                "abbreviation": "UKHND"
            },
            "homeTeam": {
                "id": "54707",
                "logo": "https://highlightly.net/cricket/images/teams/54707.png",
                "name": "Baroda",
                "abbreviation": "BRODA"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551167",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "163/4"
                    },
                    "home": {
                        "info": "19.1/20 ov, T:164",
                        "score": "166/7"
                    }
                },
                "report": "Saurashtra won by 3 wickets (with 5 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "74307",
                "logo": "https://highlightly.net/cricket/images/teams/74307.png",
                "name": "Services",
                "abbreviation": "SVCS"
            },
            "homeTeam": {
                "id": "72592",
                "logo": "https://highlightly.net/cricket/images/teams/72592.png",
                "name": "Saurashtra",
                "abbreviation": "SAU"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551202",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "104"
                    },
                    "home": {
                        "info": "14.3/20 ov, T:105",
                        "score": "106/7"
                    }
                },
                "report": "Rajasthan won by 3 wickets (with 33 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "76407",
                "logo": "https://highlightly.net/cricket/images/teams/76407.png",
                "name": "Vidarbha",
                "abbreviation": "VIDAR"
            },
            "homeTeam": {
                "id": "71437",
                "logo": "https://highlightly.net/cricket/images/teams/71437.png",
                "name": "Rajasthan",
                "abbreviation": "RAJ"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551237",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T13:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:215",
                        "score": "208/7"
                    },
                    "home": {
                        "info": null,
                        "score": "214/3"
                    }
                },
                "report": "M. Pradesh won by 6 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "60237",
                "logo": "https://highlightly.net/cricket/images/teams/60237.png",
                "name": "Goa",
                "abbreviation": "GOA"
            },
            "homeTeam": {
                "id": "68077",
                "logo": "https://highlightly.net/cricket/images/teams/68077.png",
                "name": "Madhya Pradesh",
                "abbreviation": "MP"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551272",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "15.5/20 ov, T:108",
                        "score": "108/4"
                    },
                    "home": {
                        "info": null,
                        "score": "107/6"
                    }
                },
                "report": "Haryana won by 6 wickets (with 25 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "61637",
                "logo": "https://highlightly.net/cricket/images/teams/61637.png",
                "name": "Haryana",
                "abbreviation": "HRYNA"
            },
            "homeTeam": {
                "id": "54077",
                "logo": "https://highlightly.net/cricket/images/teams/54077.png",
                "name": "Andhra",
                "abbreviation": "AP"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551307",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "206/4"
                    },
                    "home": {
                        "info": "18.1/20 ov, T:207",
                        "score": "130"
                    }
                },
                "report": "Delhi won by 76 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "58522",
                "logo": "https://highlightly.net/cricket/images/teams/58522.png",
                "name": "Delhi",
                "abbreviation": "DELHI"
            },
            "homeTeam": {
                "id": "56247",
                "logo": "https://highlightly.net/cricket/images/teams/56247.png",
                "name": "Mumbai",
                "abbreviation": "MUM"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551342",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T13:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "138/6"
                    },
                    "home": {
                        "info": "18.2/20 ov, T:139",
                        "score": "139/4"
                    }
                },
                "report": "Kerala won by 6 wickets (with 10 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40487512",
                "logo": "https://highlightly.net/cricket/images/teams/40487512.png",
                "name": "Puducherry",
                "abbreviation": "PONDI"
            },
            "homeTeam": {
                "id": "65277",
                "logo": "https://highlightly.net/cricket/images/teams/65277.png",
                "name": "Kerala",
                "abbreviation": "KER"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551377",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": null
                    },
                    "home": {
                        "info": null,
                        "score": null
                    }
                },
                "report": "Match abandoned without a ball bowled",
                "description": "Abandoned"
            },
            "awayTeam": {
                "id": "40487477",
                "logo": "https://highlightly.net/cricket/images/teams/40487477.png",
                "name": "Nagaland",
                "abbreviation": "NAGA"
            },
            "homeTeam": {
                "id": "57577",
                "logo": "https://highlightly.net/cricket/images/teams/57577.png",
                "name": "Chandigarh",
                "abbreviation": "CHD"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551412",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "12.1/13 ov, T:63",
                        "score": "66/4"
                    },
                    "home": {
                        "info": "13/13 ov",
                        "score": "62"
                    }
                },
                "report": "Manipur won by 6 wickets (with 5 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "68147",
                "logo": "https://highlightly.net/cricket/images/teams/68147.png",
                "name": "Manipur",
                "abbreviation": "MNPR"
            },
            "homeTeam": {
                "id": "40487547",
                "logo": "https://highlightly.net/cricket/images/teams/40487547.png",
                "name": "Meghalaya",
                "abbreviation": "MEGHA"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551447",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:123",
                        "score": "104/9"
                    },
                    "home": {
                        "info": null,
                        "score": "122"
                    }
                },
                "report": "Bihar won by 18 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40487407",
                "logo": "https://highlightly.net/cricket/images/teams/40487407.png",
                "name": "Arunachal Pradesh",
                "abbreviation": "AP"
            },
            "homeTeam": {
                "id": "55617",
                "logo": "https://highlightly.net/cricket/images/teams/55617.png",
                "name": "Bihar",
                "abbreviation": "BIHAR"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551482",
            "startDate": "2021-01-11T00:00:00.000Z",
            "endDate": "2021-01-11T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-11T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "3.4/5 ov, T:48",
                        "score": "50/0"
                    },
                    "home": {
                        "info": "5/5 ov",
                        "score": "47/3"
                    }
                },
                "report": "Sikkim won by 10 wickets (with 8 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "73117",
                "logo": "https://highlightly.net/cricket/images/teams/73117.png",
                "name": "Sikkim",
                "abbreviation": "SIKM"
            },
            "homeTeam": {
                "id": "40487442",
                "logo": "https://highlightly.net/cricket/images/teams/40487442.png",
                "name": "Mizoram",
                "abbreviation": "MIZO"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551517",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "14.4/20 ov, T:126",
                        "score": "127/1"
                    },
                    "home": {
                        "info": null,
                        "score": "125/8"
                    }
                },
                "report": "Punjab won by 9 wickets (with 32 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "70562",
                "logo": "https://highlightly.net/cricket/images/teams/70562.png",
                "name": "Punjab",
                "abbreviation": "PNJB"
            },
            "homeTeam": {
                "id": "65662",
                "logo": "https://highlightly.net/cricket/images/teams/65662.png",
                "name": "Karnataka",
                "abbreviation": "KNTKA"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551552",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "93"
                    },
                    "home": {
                        "info": "14.5/20 ov, T:94",
                        "score": "94/3"
                    }
                },
                "report": "J + K won by 7 wickets (with 31 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "75357",
                "logo": "https://highlightly.net/cricket/images/teams/75357.png",
                "name": "Tripura",
                "abbreviation": "TPURA"
            },
            "homeTeam": {
                "id": "64122",
                "logo": "https://highlightly.net/cricket/images/teams/64122.png",
                "name": "Jammu & Kashmir",
                "abbreviation": "J + K"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551587",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "133/9"
                    },
                    "home": {
                        "info": "17.4/20 ov, T:134",
                        "score": "137/2"
                    }
                },
                "report": "Railways won by 8 wickets (with 14 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "75777",
                "logo": "https://highlightly.net/cricket/images/teams/75777.png",
                "name": "Uttar Pradesh",
                "abbreviation": "UP"
            },
            "homeTeam": {
                "id": "63947",
                "logo": "https://highlightly.net/cricket/images/teams/63947.png",
                "name": "Railways",
                "abbreviation": "RLYS"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551622",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:162",
                        "score": "145/9"
                    },
                    "home": {
                        "info": null,
                        "score": "161/6"
                    }
                },
                "report": "Bengal won by 16 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40487372",
                "logo": "https://highlightly.net/cricket/images/teams/40487372.png",
                "name": "Jharkhand",
                "abbreviation": "JHK"
            },
            "homeTeam": {
                "id": "55162",
                "logo": "https://highlightly.net/cricket/images/teams/55162.png",
                "name": "Bengal",
                "abbreviation": "BENG"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551657",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:154",
                        "score": "147/4"
                    },
                    "home": {
                        "info": null,
                        "score": "153/8"
                    }
                },
                "report": "Hyderabad won by 6 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "69722",
                "logo": "https://highlightly.net/cricket/images/teams/69722.png",
                "name": "Odisha",
                "abbreviation": "ODSA"
            },
            "homeTeam": {
                "id": "61882",
                "logo": "https://highlightly.net/cricket/images/teams/61882.png",
                "name": "Hyderabad (India)",
                "abbreviation": "HYD"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551692",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T13:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "15/20 ov, T:127",
                        "score": "128/0"
                    },
                    "home": {
                        "info": null,
                        "score": "126/7"
                    }
                },
                "report": "Tamil Nadu won by 10 wickets (with 30 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "74797",
                "logo": "https://highlightly.net/cricket/images/teams/74797.png",
                "name": "Tamil Nadu",
                "abbreviation": "TN"
            },
            "homeTeam": {
                "id": "54392",
                "logo": "https://highlightly.net/cricket/images/teams/54392.png",
                "name": "Assam",
                "abbreviation": "ASSAM"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551727",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:193",
                        "score": "196/2"
                    },
                    "home": {
                        "info": null,
                        "score": "192/5"
                    }
                },
                "report": "Maharashtra won by 8 wickets (with 0 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "66817",
                "logo": "https://highlightly.net/cricket/images/teams/66817.png",
                "name": "Maharashtra",
                "abbreviation": "MAHA"
            },
            "homeTeam": {
                "id": "14959982",
                "logo": "https://highlightly.net/cricket/images/teams/14959982.png",
                "name": "Chhattisgarh",
                "abbreviation": "CGARH"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551762",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "20 ov, T:173",
                        "score": "99/8"
                    },
                    "home": {
                        "info": null,
                        "score": "172/5"
                    }
                },
                "report": "Gujarat won by 73 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "40487582",
                "logo": "https://highlightly.net/cricket/images/teams/40487582.png",
                "name": "Uttarakhand",
                "abbreviation": "UKHND"
            },
            "homeTeam": {
                "id": "60657",
                "logo": "https://highlightly.net/cricket/images/teams/60657.png",
                "name": "Gujarat",
                "abbreviation": "GUJ"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551797",
            "startDate": "2021-01-12T00:00:00.000Z",
            "endDate": "2021-01-12T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-12T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": null,
                        "score": "109"
                    },
                    "home": {
                        "info": "19/20 ov, T:110",
                        "score": "112/6"
                    }
                },
                "report": "Baroda won by 4 wickets (with 6 balls remaining)",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "61462",
                "logo": "https://highlightly.net/cricket/images/teams/61462.png",
                "name": "Himachal Pradesh",
                "abbreviation": "HP"
            },
            "homeTeam": {
                "id": "54707",
                "logo": "https://highlightly.net/cricket/images/teams/54707.png",
                "name": "Baroda",
                "abbreviation": "BRODA"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        },
        {
            "id": "43551832",
            "startDate": "2021-01-13T00:00:00.000Z",
            "endDate": "2021-01-13T00:00:00.000Z",
            "country": {
                "code": "IN",
                "name": "India",
                "logo": "http://highlightly.net/cricket/images/countries/IN.svg"
            },
            "dayType": "SINGLE",
            "format": "T20",
            "startTime": "2021-01-13T06:30:00.000Z",
            "state": {
                "teams": {
                    "away": {
                        "info": "17.2/20 ov, T:234",
                        "score": "154"
                    },
                    "home": {
                        "info": null,
                        "score": "233/7"
                    }
                },
                "report": "Saurashtra won by 79 runs",
                "description": "Finished"
            },
            "awayTeam": {
                "id": "76407",
                "logo": "https://highlightly.net/cricket/images/teams/76407.png",
                "name": "Vidarbha",
                "abbreviation": "VIDAR"
            },
            "homeTeam": {
                "id": "72592",
                "logo": "https://highlightly.net/cricket/images/teams/72592.png",
                "name": "Saurashtra",
                "abbreviation": "SAU"
            },
            "league": {
                "id": "43546722",
                "logo": "https://highlightly.net/cricket/images/leagues/43546722.png",
                "name": "Syed Mushtaq Ali Trophy",
                "season": 2020
            }
        }
    ],
    "plan": {
        "tier": "BASIC",
        "message": "All data available with current plan."
    },
    "pagination": {
        "totalCount": 2736,
        "offset": 0,
        "limit": 100
    }
}

// Sample usage
const matchData = {
    "id": "48514657",
    "startDate": "2024-01-13T00:00:00.000Z",
    "endDate": "2024-01-13T00:00:00.000Z",
    "country": {
        "code": "AU",
        "name": "Australia",
        "logo": "http://highlightly.net/cricket/images/countries/AU.svg"
    },
    "dayType": "SINGLE",
    "format": "T20",
    "startTime": "2024-01-13T08:30:00.000Z",
    "state": {
        "teams": {
            "away": {
                "info": null,
                "score": "137/8"
            },
            "home": {
                "info": "17.2/20 ov, T:138",
                "score": "139/4"
            }
        },
        "report": "Renegades won by 6 wickets (with 16 balls remaining)",
        "description": "Finished"
    },
    "awayTeam": {
        "id": "17838662",
        "logo": "https://highlightly.net/cricket/images/teams/17838662.png",
        "name": "Melbourne Stars",
        "abbreviation": "MS"
    },
    "homeTeam": {
        "id": "17838627",
        "logo": "https://highlightly.net/cricket/images/teams/17838627.png",
        "name": "Melbourne Renegades",
        "abbreviation": "MR"
    },
    "league": {
        "id": "48513362",
        "logo": "https://highlightly.net/cricket/images/leagues/48513362.png",
        "name": "Big Bash League",
        "season": 2023
    },
    "status": "Completed", // Match status
    onViewDetails: () => alert('Match details will be shown here.'),
};
