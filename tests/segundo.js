async function fetchData() {
    let response = await fetch('https://fake-json-api.mock.beeceptor.com/users')

    let data = await response.json()

    console.log(data)    
}

fetchData()