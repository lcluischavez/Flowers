import { useNurseries } from "./NurseryProvider.js"
import { useSingleFlowers } from "./FlowerProvider.js"
import { useFlowerNurseries } from "./FlowerNurseryProvider.js"
import SingleFlower from "./SingleFlower.js"

const contentTarget = document.querySelector(".flowers")

export const FlowerList = () => {
    const nurseries = useNurseries()
    const flowers = useSingleFlowers()
    const flowersNurseries = useFlowerNurseries()

    const render = () => {
        contentTarget.innerHTML = flowers.map(flower => {
            // Find related chore ids
            let relatedNurseries = flowersNurseries.filter(pc => pc.singleFlowerId === flower.id)

            // Convert the array from relationship objects to chore objects
            relatedNurseries = relatedNurseries.map(rc => {
                return nurseries.find(nursery => nursery.id === rc.nurseryId)
            })

            // Get HTML representation of product
            const html = SingleFlower(flower, relatedNurseries)

            return html
        }).join("")
    }

    render()
}

export default FlowerList