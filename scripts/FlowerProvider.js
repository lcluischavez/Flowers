let flowers = []

export const useSingleFlowers = () => flowers.slice()

export const getSingleFlowers = () => fetch("http://localhost:8088/singleflowers")
    .then(res => res.json())
    .then(data => flowers = data)