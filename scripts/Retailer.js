const Retailer = (retailer, distributor) => {
    return `
        <section class="retailer">
            <section class="retailer_name">
                <h3>${retailer.name}</h3>
            </section>
            <section class="retailer__distributor">
                <div><strong>Distributor:</strong></div>
                <div>${distributor.name}</div>
                <div><strong>Address:</strong>
                <div>${distributor.address}</div>
                <div>${distributor.city}, ${distributor.state}</div>
            </section>
        </section>
    `
}

export default Retailer