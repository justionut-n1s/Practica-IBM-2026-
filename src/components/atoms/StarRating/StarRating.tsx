import Icon from '../Icon/Icon'
import starFull from '../../../assets/icons/star-full.svg'
import starEmpty from '../../../assets/icons/star-empty.svg'

// Afiseaza 5 stelute (rating rotunjit) + numarul exact intre paranteze. Props: rating (ex: 4.6)

interface StarRatingProps {
    rating: number
}

function StarRating({ rating }: StarRatingProps) {
    const ratingRotunjit = Math.round(rating)
    const pozitii = [1,2,3,4,5]

    return(
        <div className='star-rating'>
            {pozitii.map((pozitie) => {
                const sursa = pozitie <= ratingRotunjit ? starFull : starEmpty
                return <Icon key={pozitie} src={sursa} alt="stea" size={16} />
            })}
            <span className="star-rating__number">({rating})</span>
        </div>
    )

}

export default StarRating