import StarFill from '../../assets/resources/Star_fill.svg'
import Star from '../../assets/resources/Star.svg'

import './CoffeeListItem.css'

export const CoffeeListItem = ({ element }) => {

    const {id, name, image, price, rating, votes, popular, available} = element

    return(
        <li>
            <img src={image} alt="Imagem ilustrativa da comida" />
            <div className="product-details">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <div className="rating-box">
                {Number(rating) > 0 ?
                    <>
                        <img src={StarFill} alt="Ícone estrela preenchida" />
                        <span className="rating">{Number(rating).toFixed(1)}</span>
                        <span className="votes">({votes}) votes</span>
                    </> :
                    <>
                        <img src={Star} alt="Ícone estrela vazia" />
                        <span className='no-rating'>No rating</span>
                    </>
                }
                
                {!available &&
                    <span className="sold-out">
                        Sold Out
                    </span>
                }
            </div>

            {popular && 
                <span className="popular">
                    Popular
                </span>
            }
        </li>
    )
}