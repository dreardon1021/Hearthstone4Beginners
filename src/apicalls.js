export const getClassicCards = () => {
  return fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic" , {
  method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
	    "x-rapidapi-key": "161a19f05cmsh9ec31d6ba6eb755p1181c7jsn462a3d87026c"
    }
})
  .then(response => response.json())
}

