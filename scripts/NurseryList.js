import { useNurseries } from "./NurseryProvider.js"
import { useNurseryDistributors } from "./NurseryDistributorProvider.js"
import SingleNursery from "./SingleNursery.js"
import { useDistributors } from "./DistributorProvider.js"


const contentTarget = document.querySelector(".nurseries")

export const NurseryList = () => {
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const nurseriesDistributors = useNurseryDistributors()

    const render = () => {
        contentTarget.innerHTML = nurseries.map(nursery => {
            // Find related chore ids
            let relatedDistributors = nurseriesDistributors.filter(pc => pc.singleNurseryId === nursery.id)

            // Convert the array from relationship objects to chore objects
            relatedDistributors = relatedDistributors.map(rc => {
                return distributors.find(distributor => distributor.id === rc.distributorId)
            })

            // Get HTML representation of product
            const html = SingleNursery(nursery, relatedDistributors)

            return html
        }).join("")
    }

    render()
}

export default NurseryList