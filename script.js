import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// declaring variable
const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"

// d3 url role playing
d3.json(url).then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))