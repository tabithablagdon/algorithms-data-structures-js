/* Exercise 12: Tree flattening 3 Levels

Retrieve id, title, and a 150x200 box art url for every video

Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different 
size and url. Create a query that selects {id, title, boxart} for every video in the movieLists. This time though, the 
boxart property in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve 
this problem with map(), concatAll(), and filter().  There's just more one thing: you can't use indexers. 

Source: http://reactivex.io/learnrx/ */

// provided dataSet movieLists

var movieLists = [
	{
		name: "Instant Queue",
		videos : [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxarts": [
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxarts": [
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	},
	{
		name: "New Releases",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxarts": [
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxarts": [
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
					{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	}
];


// function written to manipulate movieLists only - solve this specific problem - can be re-factored as a utility function
// concatAll() is a method pre-defined in exercises that concats all arrays it's invoked on

function flattenMovieList() {

  return movieLists.map(function(movieList) {
    return movieList.videos.map(function(video) {
      return video.boxarts.filter(function(box) {
        if (box.width === 150) return true;
      }).map(function(boxart) {          
        return {
          "id": video.id, 
          "title": video.title, 
          "boxarts": boxart.url
        }; 
      }); 
    }).concatAll();
  }).concatAll();
}

flattenMovieList();
