const SingleNursery = (nursery, distributors) => {
    return `
        <section class="singleFlower">
            <header>
                <h3>${nursery.name}</h3>
            </header>
            <div>
                <ol>
                    ${
                        distributors.map(distributor => `<li>${distributor.name}</li>`).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default SingleNursery