# Work In Progress

## Installing

To install this application enter the following into your terminal:

```bash
git clone https://github.com/RobinStut/FestiVibe-Dating

cd FestiVibe-Dating

npm install

npm run dev
```

## .env example

```bash
MONGO_URI= e.g. mongodb+srv://<username>:<password>@cluster0-v0ywb.mongodb.net/test
SESSION= e.g session storage
PORT= e.g. 8080

```

## Feature

When I see a potential match, I want to know how far they are relative to my position, so I can decide if this potential match is between my personal preverences.

Things to have in mind

* Some people don't want to share their exact location
* Some devices may not be compatible with the Geolocation API

### MVP

* get a location of the user
* get location of potential match out of the DB
* compare those locations
* return distance between locations

Improvements of the **MVP**

* alternative to GEO API

To give an alternative way to enter your location, I want ask the user to fill in the place were they are at that moment.
With this data, I would like to fetch an geo location for their specific city.
This way I can provide older devices to use this feature and can people decide if they want to share their mobile location or a general location.

## How it works

### Previous situation without location

1. 👤 _User_ visits  **/matches** route
2. 💾 _Session_ _id is saved
3. 🗄️ _MongoDB_ data will be retreived, excluding your 💾 _Session_ _id
4. 💞 _Matches_ are rendered with **unordered** 🗄️ _MongoDB_ data

### Current situation with location

1. 👤 _User_ visits  **/matches** route
2. 💾 _Session_ _id is saved
3. 🗄️ _MongoDB_ data will be retreived, excluding your 💾 _Session_ _id
4. 📡 _Server_ calculates 🧭 _location_ distances between 👤 _User_ & 💞 _Matches_
5. 📡 _Server_ sorts distances ascending to 🧭 _location_
6. 💞 _Matches_ are rendered with **ordered** 🗄️ _MongoDB_ data

### How location works

#### without client side Javascript

1. 👤 _User_ enters living place in **input field**

2. On POST, the 📡 _Server_ will search for a match in 🏢 _CityJSONData_
3. Outcomes

❓ _if_ (exact match){

   1. Get 💾 _Session_ _id,
   2. Update 🧭 _location_ in 🗄️ _MongoDB_ for 👤 _User_ with their 💾 _Session_ _id

❓ _if_ (partially match){

   1. Get first 5 results matching 🏢 _CityJSONData_
   2. Render suggestions as feedback for 👤 _User_

❓ _if_ (no match){

   1. Render usefull feedback for  👤 _User_

#### with client side Javascript

##### Using the GEO Location API

1. 📟 _JavaScript_ injects "GEO location" button in **DOM**
2. 👤 _User_ clicks on "GEO location" button
3. 📟 _JavaScript_ **disables** submit button
4. 📟 _JavaScript_ receives 🧭 _location_
5. 📟 _JavaScript_ injects 🧭 _location_ in **input hidden** form element
6. 📟 _JavaScript_ **enables** submit button
7. 👤 _User_ submits form
8. 📡 _Server_ receives 🧭 _location_ from "GEO location"
9. Update 🧭 location in 🗄️ MongoDB for 👤 User with their 💾 Session _id

##### Progressive Enhanced input field

1. 👤 _User_ enters living place in **input field**
2. 📟 _JavaScript_ listens to **keydown** event
3. 📟 _JavaScript_ compares input with 🏢 _CityJSONData_
4. 📟 _JavaScript_ injects autocomplete suggestion in DOM if available

## Database structure

The database I use is [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
In this database, we have two collections.

**fakeUsers** model (will be named users in future)

```javascript
[
    {
    "_id": {
        "$oid": "5e67a500239d946ad68fa647"
        },
    "name": "emma",
    "age": "19",
    "image": "https://imageUrl.com/images?q=tbn:ANd.png",
    "location": {
        "latitude": "52.4144806",
        "longitude": "5.0219082"
        },
    "attendingFestivals": ["5e67978bad68fa6475002398"],
    "likedUsers": ["5e67a500239dd68fa647946a", ...],
    "dislikedUsers": ["5dd68fa647946ae67a500239", ...],
    "matchedUsers": ["5dd68fa647923946ae67a500", ...]
    }, ...
]
```

**festivals** model

```javascript
[
    {
    "_id": {
        "$oid": "5e679814ad68fa6475002399"
        },
    "name": "Emporium",
    "date": "2020-05-23T12:00:00+00:00",
    "attendingUsers": ["5e67a500239d946ad68fa647", ...],
    "location": {
        "latitude": "51.8079329",
        "longitude": "5.7786437"
        }
    }, ...
]
```

## Recourses

* [Lat Long Calculation](http://www.movable-type.co.uk/scripts/latlong.html)
* [Destructuring of WesBos](https://wesbos.com/destructuring-renaming/)
* [MongoDB collection methods](https://docs.mongodb.com/manual/reference/method/js-collection/)
* [Mongo setup syntax](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)