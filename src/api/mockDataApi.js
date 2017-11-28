const employees = [   
    {
        "gender": "female",
        "name": {"title": "miss", "first": "Sara", "last": "Collins"},
        "location": {"street": "9940 edwards rd", "city": "London", "state": "south australia", "postcode": 6839},
        "email": "sara.collins@skyblue.com",
        "login": {
            "username": "goldenduck764",
            "password": "vbnm",
            "salt": "U53luUPM",
            "md5": "790383cb4412f03a2298adc64c7c673a",
            "sha1": "5f1c832ebfa0bde0635d25e670a81735789efb23",
            "sha256": "94252dffcc7415b99edcda84a657288240e73b93f2217483777ecb4be081b2ce"
        },
        "dob": "1985-05-25 17:11:41",
        "registered": "2011-05-18 11:10:06",
        "phone": "03-2538-0116",
        "cell": "0413-877-758",
        "id": {"name": "TFN", "value": "334138079"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/81.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "male",
        "name": {"title": "mr", "first": "James", "last": "Steven"},
        "location": {"street": "432 3rd st", "city": "San Fransisco", "state": "Italy", "postcode": 223},
        "email": "james_steven@gmail.se",
        "login": {
            "username": "purplebear118",
            "password": "locks",
            "salt": "d7sPy7Wz",
            "md5": "da16d9a173bc68c1654d6f2b52f8ece8",
            "sha1": "35efd3dab77c5e80467020072218d60532754a4e",
            "sha256": "805edff32406074e576dfcdeae2f31039815c1ff4949adc3a3354806d085ff16"
        },
        "dob": "1965-10-11 02:58:44",
        "registered": "2013-03-08 10:11:05",
        "phone": "05-5832-3605",
        "cell": "0756437821",
        "id": {"name": "TFN", "value": "250940479"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "female",
        "name": {"title": "ms", "first": "ashley", "last": "jenkins"},
        "location": {"street": "3968 ormond quay", "city": "Göteborg", "state": "carlow", "postcode": 39076},
        "email": "ash_jen@example.com",
        "login": {
            "username": "blacksnake631",
            "password": "schalke",
            "salt": "j8ZXHXcj",
            "md5": "5c826a2ccc0cc4fe527fb71c4cf8c5f3",
            "sha1": "1eba9897331f67afe18f1c181f1cb2218b1ff99f",
            "sha256": "471150dc824afdd0d1a0012e68f5f1dbf4e4938c17d83071d6597f26c6c5427d"
        },
        "dob": "1990-06-09 06:38:51",
        "registered": "2007-07-11 06:26:31",
        "phone": "061-987-6762",
        "cell": "081-438-7110",
        "id": {"name": "PPS", "value": "5513254T"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/29.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "male",
        "name": {"title": "mr", "first": "mike", "last": "darker"},
        "location": {"street": "1708 broadway", "city": "Rome", "state": "west midlands", "postcode": "W9C 4DQ"},
        "email": "mike.darker@skyblue.com",
        "login": {
            "username": "brownbird818",
            "password": "glennwei",
            "salt": "22A1C6zA",
            "md5": "f147f245fd968f4f0640b4d0f61c6854",
            "sha1": "f6b969e9939ffbc912f18b4492d05b74c26e56cf",
            "sha256": "9fe9c908a89f727388f721c119678e0021ea8fe0830658612b131d3181b37a3e"
        },
        "dob": "1968-04-09 22:32:04",
        "registered": "2008-02-26 14:33:53",
        "phone": "0151 612 5202",
        "cell": "0764-137-173",
        "id": {"name": "NINO", "value": "XP 33 50 71 B"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/74.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
        },
        "nat": "GB"
    },
    {
        "gender": "male",
        "name": {"title": "mr", "first": "James", "last": "Steven"},
        "location": {"street": "432 3rd st", "city": "San Fransisco", "state": "Italy", "postcode": 223},
        "email": "james_steven@gmail.se",
        "login": {
            "username": "purplebear118",
            "password": "locks",
            "salt": "d7sPy7Wz",
            "md5": "da16d9a173bc68c1654d6f2b52f8ece8",
            "sha1": "35efd3dab77c5e80467020072218d60532754a4e",
            "sha256": "805edff32406074e576dfcdeae2f31039815c1ff4949adc3a3354806d085ff16"
        },
        "dob": "1965-10-11 02:58:44",
        "registered": "2013-03-08 10:11:05",
        "phone": "05-5832-3605",
        "cell": "0756437821",
        "id": {"name": "TFN", "value": "250940479"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat": "AU"
    }, 
    {
        "gender": "male",
        "name": {"title": "mr", "first": "albert", "last": "roy"},
        "location": {"street": "4203 concession road 23", "city": "Munich", "state": "alberta", "postcode": 34971},
        "email": "albert@user.com",
        "login": {
            "username": "whitelion200",
            "password": "plum",
            "salt": "QIIoZdfA",
            "md5": "92625c00dd84051587cd9d2f8398a337",
            "sha1": "0f221ad499ecde1a9e70cdede749155aedfc8993",
            "sha256": "e23f94aa261ab311f5ed0d8ece7e5fb1cafc81dd0a88a23b3bbc02c15027aaa3"
        },
        "dob": "1949-07-07 04:41:44",
        "registered": "2015-10-29 13:29:18",
        "phone": "950-526-0014",
        "cell": "071-857-6132",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/71.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
        },
        "nat": "CA"
    }, {
        "gender": "female",
        "name": {"title": "mrs", "first": "amanda", "last": "tallson"},
        "location": {
            "street": "2499 spring hill rd",
            "city": "Tehran",
            "state": "australian capital territory",
            "postcode": 9731
        },
        "email": "tallson@skublue.com",
        "login": {
            "username": "heavybutterfly615",
            "password": "chillin",
            "salt": "J9Q2SmKx",
            "md5": "b7e2fc228794aef987a03c8c3ee66005",
            "sha1": "8cb1b9bb6b7ea0b0acb9800a007578e4777970fc",
            "sha256": "4775fe68ed48fd583f4ffdba521c9e47ea954a4bd0dfdbe90f41a1746d9b5abe"
        },
        "dob": "1948-05-07 15:39:29",
        "registered": "2012-08-15 15:50:04",
        "phone": "00-3183-3334",
        "cell": "0433-854-412",
        "id": {"name": "TFN", "value": "344843469"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
        },
        "nat": "AU"
    }, 
    {
        "gender": "female",
        "name": {"title": "mrs", "first": "lily", "last": "smith"},
        "location": {
            "street": "2499 spring hill rd",
            "city": "Los Angeles",
            "state": "australian capital territory",
            "postcode": 9731
        },
        "email": "smith78@user.com",
        "login": {
            "username": "heavybutterfly615",
            "password": "chillin",
            "salt": "J9Q2SmKx",
            "md5": "b7e2fc228794aef987a03c8c3ee66005",
            "sha1": "8cb1b9bb6b7ea0b0acb9800a007578e4777970fc",
            "sha256": "4775fe68ed48fd583f4ffdba521c9e47ea954a4bd0dfdbe90f41a1746d9b5abe"
        },
        "dob": "1948-05-07 15:39:29",
        "registered": "2012-08-15 15:50:04",
        "phone": "00-3183-3334",
        "cell": "0433-854-412",
        "id": {"name": "TFN", "value": "344843469"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/52.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "male",
        "name": {"title": "mr", "first": "edward", "last": "blackbail"},
        "location": {"street": "5427 mcclellan rd", "city": "Kyoto", "state": "new south wales", "postcode": 607},
        "email": "ed_black@user.com",
        "login": {
            "username": "purplebear118",
            "password": "locks",
            "salt": "d7sPy7Wz",
            "md5": "da16d9a173bc68c1654d6f2b52f8ece8",
            "sha1": "35efd3dab77c5e80467020072218d60532754a4e",
            "sha256": "805edff32406074e576dfcdeae2f31039815c1ff4949adc3a3354806d085ff16"
        },
        "dob": "1965-10-11 02:58:44",
        "registered": "2013-03-08 10:11:05",
        "phone": "05-5832-3605",
        "cell": "0478-848-012",
        "id": {"name": "TFN", "value": "250940479"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat": "AU"
    }, 
    {
        "gender": "male",
        "name": {"title": "mr", "first": "robert", "last": "mcnil"},
        "location": {"street": "5427 mcclellan rd", "city": "Paris", "state": "new south wales", "postcode": 607},
        "email": "robert22@user.com",
        "login": {
            "username": "purplebear118",
            "password": "locks",
            "salt": "d7sPy7Wz",
            "md5": "da16d9a173bc68c1654d6f2b52f8ece8",
            "sha1": "35efd3dab77c5e80467020072218d60532754a4e",
            "sha256": "805edff32406074e576dfcdeae2f31039815c1ff4949adc3a3354806d085ff16"
        },
        "dob": "1965-10-11 02:58:44",
        "registered": "2013-03-08 10:11:05",
        "phone": "05-5832-3605",
        "cell": "0478-848-012",
        "id": {"name": "TFN", "value": "250940479"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/37.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "female",
        "name": {"title": "ms", "first": "Sara", "last": "Mccoy"},
        "location": {"street": "dark Ave ", "city": "Gotham", "state": "Chicago", "postcode": 4567},
        "email": "_mccoy_sara@user.com",
        "login": {
            "username": "purplebear118",
            "password": "locks",
            "salt": "d7sPy7Wz",
            "md5": "da16d9a173bc68c1654d6f2b52f8ece8",
            "sha1": "35efd3dab77c5e80467020072218d60532754a4e",
            "sha256": "805edff32406074e576dfcdeae2f31039815c1ff4949adc3a3354806d085ff16"
        },
        "dob": "1965-10-11 02:58:44",
        "registered": "2013-03-08 10:11:05",
        "phone": "05-5832-3605",
        "cell": "0478-848-012",
        "id": {"name": "TFN", "value": "250940479"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/44.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
        },
        "nat": "AU"
    },
    {
        "gender": "female",
        "name": {"title": "ms", "first": "goerge", "last": "andersson"},
        "location": {"street": "6135 danziger straße", "city": "Borås", "state": "bremen", "postcode": 61028},
        "email": "goerge_andersson12@aol.se",
        "login": {
            "username": "lazylion466",
            "password": "jensen",
            "salt": "o52oXhZ8",
            "md5": "4233ff1e12295a3081f22f8e5d214cb8",
            "sha1": "0f15d1f52ff6a5c72a836df0e66513d7ad7917c9",
            "sha256": "5c6e3de5cdd44b8a64731ca22c77335eec9868b0f4c85d465c6844160c45d42c"
        },
        "dob": "1959-03-16 23:49:36",
        "registered": "2008-03-25 23:41:18",
        "phone": "0330-2939877",
        "cell": "0173-5801413",
        "id": {"name": "", "value": null},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/37.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/37.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
        },
        "nat": "DE"
    }];

class EmployeesApi {
    static getAllEmployees() {
        return new Promise((resolve, reject) => setTimeout(() => resolve(employees)), 1200);
    }
    
    static searchEmployeeByName(qs) {
        return new Promise((resolve, reject) => {
            let result = employees.filter(employee => {
                const fullName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()} ${employee.location.city.toLowerCase()}`;
                return fullName.indexOf(qs.toLowerCase()) > -1;
            });
            
            resolve(result);
        })
    }
}

export default EmployeesApi;