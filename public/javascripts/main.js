fetch('https://api.ipify.org/?format=json')
    .then(res => (res.json()))
    .then(console.log)