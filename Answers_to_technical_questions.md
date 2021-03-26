1. How long did you spend on the coding assignment? What would you add to your solution if you had
more time? If you didn't spend much time on the coding assignment then use this as an opportunity to
explain what you would add. \
=== 1 week. I could have finished it earlier but adding the feature of visualizing the rates of different Crypto-currencies was my idea to introduce. I would like to add features of the dynamic trends of the rise/fall of rates using the time series data. 

2. What was the most useful feature that was added to the latest version of your language of choice?
Please include a snippet of code that shows how you've used it. \
=== I have used a visualization tool of react module, known as react-charts. It is used to display the rates of selected crypto-currency in different denominations. 

		import {HoriozontalBar} from 'react-chartjs-2';
		<HorizontalBar
                    data={data}
                    width={100}
                    height={100}
                    options={{ maintainAspectRatio: true }}
                    className="chart"
		/> 

3. How would you track down a performance issue in production? Have you ever had to do this? \
=== I do not have to do this on a production scale for my current role. But exploring this opprtunity will be exciting and am eager to work on it. 

But to dig down into the performance issues of the requests from the client, a proper log statement for each successful request either in Front End/Back end is very helpful. So that, I can trace which request go fired and after that how much time it took to fire another one. And from ther we can scale our performance.

4. What was the latest technical book you have read or tech conference you have been to? What did you
learn? \
=== Since, I am looking out for opportunitites, I have been into Cracking the Code Interview book. And I have been referring http://highscalability.com/ for getting ideas on scalable systems and getting fmailiar with the buzzwords and latest trends.
In February, I attended the JS Love conference online, and it was meant to be a good webinar on JS concepts regarding the asynchronity, the expansion towards the object orientations in JS and a lot more discussion. \

5. What do you think about this technical assessment?\
=== It is challenging and a good test to learn more about the use of JSON objects, the different API access methods like public api, subscribed api / tokenised api; for example - the coinmarket api. Also, for a person like me, I like it because of the concept of crytptocurrency in it. \

6. Please, describe yourself using JSON. \
=== {
	"status": {
		"timestamp": "2021-03-25T07:15:06.583Z",
		"error_code": 0,
		"error_message": null,
		"message": "You are accessing details of Amit Sagar."
	},
	"data": [{
		"id": 1,
		"name": "Amit Sagar",
		"gender": "M",
		"age": 29,
		"date_of_birth": "xxxx-xx-xx",
		"education": "B-Tech",
		"specification_highest_degree": "Information Technology",
		"graduated": true,
		"gpa": 7.74,
		"passout_year": 2013,
		"linkedIn": "https://www.linkedin.com/in/amit-sagar-he-him-59286768/",
		"github": "https://www.github.com/307sagar",
		"tags": [
			"outdoor person",
			"soccer player",
			"cricket player",
			"internet surfer",
			"blockChain enthusiast",
			"love to be enterpereneur"
		],
		"residence_country": "India",
		"currently_wroking": true,
		"open_to_opportunities": "Open for immediate opportunities",
		"preferable_work_location": ["remote", "EU"],
		"last_updated": "2021-03-25T07:14:02.000Z"
	}]
}
