fetch('https://fake-json-api.mock.beeceptor.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);
            // Add assertions to validate the data
            console.log(data.length)
            for(let user of data){
                console.log(user.name)
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });