# Weather API Activity

Welcome to the Weather API Activity!
This activity is an **OPTIONAL** activity for those who want to strengthen their skills on APIs & Postman.
This activity will help you practice creating a simple API endpoint and testing it with Postman.

## Objective

You will edit the `server.js` file to create a route that fetches **real weather data** for a given city using the [Open-Meteo API](https://open-meteo.com/). You **do not** need to edit `index.html` or `script.js`.

---

## Steps

### 0. If you ALREADY forked:

1. Go to VS Code Terminal
2. Open your folder where the repo lives
3. Navigate to the folder:
```bash
cd path-to-your-folder
```

4. Pull the latest updates:
```bash
git pull
```

5. Switch to the required branch:
```bash
git checkout Day5
```

6. Continue from **Step 2**

---

### 1. Fork and Clone the Repository

- Fork this repository to your GitHub account.
- Clone your fork to your local machine.

---

### 2. Install Dependencies

> Even if Express is already listed in `package.json`, you still need to run this command after cloning. Forking/cloning does **not** copy the `node_modules` folder.
```bash
npm install
```

---

### 3. Edit `server.js`

Your goal is to complete the route below inside `server.js`. The route is already started for you — **fill in the missing parts** using the hints in the comments.
```js
app.get("/weather/:city", async (req, res) => {
  // Your code goes here!
});
```

Here is what your route needs to do, step by step:

#### Step 3.1 — Get the city from the URL
- The city name comes from the URL (e.g. `/weather/London`)
- Use `req.params.city` to grab it

#### Step 3.2 — Get the coordinates (latitude & longitude)
- Use the **Open-Meteo Geocoding API** to convert the city name into coordinates
- API URL: `https://geocoding-api.open-meteo.com/v1/search?name=<city>`

#### Step 3.3 — Handle city not found
- If the API returns no results, send back a `404` response:
```json
{ "message": "City not found" }
```

#### Step 3.4 — Get the weather using coordinates
- Use the **Open-Meteo Weather API** with the latitude and longitude from Step 3.2
- API URL: `https://api.open-meteo.com/v1/forecast?latitude=<lat>&longitude=<lon>&current_weather=true&temperature_unit=fahrenheit`

#### Step 3.5 — Send the weather back
- Send `weatherData.current_weather` as a JSON response to the frontend

---

### 4. Test Your API in Postman

- Open Postman (or another API testing tool)
- Start your server first:
```bash
node server.js
```

- Send a **GET** request to:
```
http://localhost:3000/weather/London
```

- You should get a response like:
```json
{
  "temperature": 58.2,
  "windspeed": 10.5,
  "weathercode": 3,
  "time": "2025-01-01T12:00"
}
```

---

### 5. Experiment!

- Try different city names in the URL (e.g. `/weather/Tokyo`, `/weather/Miami`)
- What happens if you type a city that doesn't exist?
- Can you add the city name and coordinates to the response object?

---

## Tips

- Always start your server before testing in Postman:
```bash
node server.js
```

- You are making **two API calls** inside your route — one for coordinates, one for weather. That's normal!
- Use `async/await` since both calls involve waiting for a response from an external API
- Keep your `index.html` and `script.js` as they are — no changes needed there
- Read the hints in `server.js` carefully and try to complete it on your own. This is your chance to practice working with APIs!