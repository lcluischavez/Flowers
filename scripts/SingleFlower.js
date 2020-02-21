const SingleFlower = (flower, nurseries) => {
    return `
        <section class="singleFlower">
            <header>
                <h3>${flower.name}</h3>
            </header>
            <div> <strong>Nurseries</strong>
                <ol>
                    ${
                        nurseries.map(nursery => `<li>${nursery.name}</li>`).join("")
                    }   
                </ol>
            </div>
        </section>
    `
}

export default SingleFlower