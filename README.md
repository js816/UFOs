# Overview of the UFOs project 


## Purpose


The purpose of this project was to develop a website using JavaScript that allows users to filter the UFO data to find those specific sightings they’re interested in.  The original data contained 111 records and for most users, this would be overwhelming to try to sort through.  

With the addition of filters for a variety of the columns, users are able to quickly dig into the specific data wanted.

![Sightings_site](https://user-images.githubusercontent.com/82730954/125177532-35e3b880-e1a2-11eb-8cec-b69190ccd973.PNG)

# Results


## Website


The resulting website is intuitive and user friendly.  The various provided text, images, etc., were included in ways that will appeal to those who visit the site.  As the site evolves, the data, framework, and styling can also evolve to help meet the desires of the users.


## Filtering


When the page initially loads, each of the 111 sightings are shown.  When visitors want to filter for specific sightings, they can simply fill in the search criteria in one or more of the filter boxes (date, city, state, country, and shape).  The filter boxes, shown in the image below, are prefilled with sample searches.  These show the user exactly how the information should be entered thus helping prevent errors.

![Filter_boxes](https://user-images.githubusercontent.com/82730954/125177537-409e4d80-e1a2-11eb-952d-20bfc6792396.PNG)


For example, to see only those sightings in Missouri, the user simply enters “mo” in the state box and then presses enter.  The table is then filtered to show only those sightings from Missouri.  

![mo](https://user-images.githubusercontent.com/82730954/125177579-94109b80-e1a2-11eb-94be-9e03b7194e88.PNG)


There may be instances where visitors find it useful to filter on multiple columns and this is easy and intuitive.  Perhaps someone filters for the shape of “triangle” and finds that there are still more results than desired.  Further filtering, perhaps by state, would pare the results down further.  

The screenshot below shows triangular sightings in California.

![triangle_ca](https://user-images.githubusercontent.com/82730954/125177592-a12d8a80-e1a2-11eb-9ec4-32a127bb8feb.PNG)

## Resetting the table


To reset the table and again show all of the sightings, a user has multiple options.   This can be accomplished by clearing out each of the filter search boxes, reloading the page through their browser, or clicking the UFO Sightings button at the very top left corner of the webpage. 


# Summary


In closing, there are some additional enhancements that could be made to the site in the future based upon your desires and those of your visitors.  Potential developments include:

- Adding a more robust dataset for visitors to enjoy and investigate

- Allowing filtering based upon proximity to a certain location (for example, within 50 miles of a zip code)

- Allowing users to filter based upon certain words in the comments column.  (Currently users can search the comments and other columns using the Find feature of their browser.  Perhaps a note on the page informing visitors of this might be helpful.)

- Adding the ability for users to see a map of the sightings and click on a marker to see the details of each sighting

- Also, the provided dataset has some code that could be cleaned up.  For example, some comments show such as "i&#39m in naples park." Cleaning up some of these ASCII code would polish the data a bit and allow users to see "i’m in naples park"

There are also some drawbacks to the filtering.  For example, currently only one state a time can be searched.  If a visitor wanted to search for sightings in the Kansas City area, which encompasses both Kansas and Missouri, two separate searches would be needed.  Additionally, searches must be exact so any future data should be cleaned to ensure that it matches.  For example, if a shape is listed as triangular, it wouldn’t match a search for triangle.  

It was a pleasure and delight to work on this project.  Thank you for allowing me to be involved.

