import { useState, useEffect, useMemo } from "react"
import axios from "axios"

import './CoffeeList.css'

import { useCoffeeList } from '../../hooks/useCoffeList'

import { CoffeeListItem } from "../CoffeeListItem/CoffeeListItem"

export const CoffeeList = ({ filter }) => {
    const {coffeeList} = useCoffeeList()
    
    const filteredList = useMemo(() => {
        return coffeeList.filter(element => {
            switch (filter) {
                case 'available':
                    return element.available
                    break;
            
                default:
                    return true
                    break;
            }
        })
    }, [coffeeList, filter])

    return(
        <div className="coffee-list">
            <ul>
                {filteredList.map((element) => {
                    return <CoffeeListItem key={element.id} element={element} />
                })}
            </ul>
        </div>
    )
}