import { getNurseries } from "./NurseryProvider.js"
import { getSingleFlowers } from "./FlowerProvider.js"
import { getFlowerNurseries } from "./FlowerNurseryProvider.js"
import FlowerList from "./FlowerList.js"
import { getRetailers } from "./RetailerProvider.js"
import { RetailerList } from "./RetailerList.js"
import NurseryList from "./NurseryList.js"



getRetailers()
    .then(getDistributors)
    .then(RetailerList)


getNurseries()
    .then(getSingleFlowers)
    .then(getFlowerNurseries)
    .then(FlowerList)






