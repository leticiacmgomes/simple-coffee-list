import { useEffect, useState } from "react"
import axios from 'axios'


export const useCoffeeList = () => {
    const [coffeeList, setCoffeeList] = useState([])

    const fetchCoffeeList =  async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
            setCoffeeList(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCoffeeList()
    }, [])

    return {coffeeList}
}