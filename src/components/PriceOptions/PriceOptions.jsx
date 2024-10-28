
import PriceOption from '../PriceOption/PriceOption'

export default function PriceOptions() {
    const priceOptions =[
        {
            "id": 1,
            "name": "Product A",
            "features": [
                "High durability",
                "Lightweight design",
                "Available in multiple colors",
                "Scratch-resistant"
            ],
            "price": 19.99
        },
        {
            "id": 2,
            "name": "Product B",
            "features": [
                "Eco-friendly materials",
                "Recyclable packaging",
                "Energy efficient",
                "Low maintenance"
            ],
            "price": 25.50
        },
        {
            "id": 3,
            "name": "Product C",
            "features": [
                "Compact design",
                "Easy to store",
                "Portable",
                "Comes with carrying case"
            ],
            "price": 15.75
        },
        {
            "id": 4,
            "name": "Product D",
            "features": [
                "Water-resistant",
                "UV protection",
                "Anti-slip grip",
                "Adjustable settings"
            ],
            "price": 30.00
        },
        {
            "id": 5,
            "name": "Product E",
            "features": [
                "Extended battery life",
                "Quick charge",
                "Battery indicator",
                "Compatible with multiple devices"
            ],
            "price": 45.99
        }
    ]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
}
