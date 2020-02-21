import { useRetailers } from "./RetailerProvider.js"
import { useDistributors } from "./DistributorProvider.js"
import Retailer from "./Retailer.js"


const contentTarget = document.querySelector(".retailers")

export const RetailerList = () => {
    const retailers = useRetailers()
    const Distributors = useDistributors()


    const render = () => {
        contentTarget.innerHTML = retailers.map(retailer => {
            // Find this product's type
            const distributor = Distributors.find(distributor => distributor.id === retailer.distributorId)

            // Get HTML representation of product
            const html = Retailer(retailer, distributor)

            return html

            
        }).join("")
    }

    render()
}

export default RetailerList