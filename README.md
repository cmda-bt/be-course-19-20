# Work In Progress

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

Now that I have build the Location alternative, I will now be focussing in sending this data to the server. Also I want to provide the user to not share an location at all. In that case the user can't use this feature.
