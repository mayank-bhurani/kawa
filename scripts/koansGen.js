fetch('../data/koans.json')

.then(response => response.json())
.then(data => {
    console.log(data);
})

