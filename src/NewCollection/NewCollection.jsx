import new_collection from '../assets/new_collections'
import './NewCollection.css'

const NewCollection = () => {

    return (
        <>
         <div className='collection-container'>
         <h1>NEW COLLECTION</h1>
         <hr />
         </div>
        <div className="new-collections">
            
        <div className="collections">
            {new_collection.map((piece) => {
                return (
                    <div className='collection-item' key={piece.id}>
                
                    <img src={piece.image} alt={piece.name} />
                    <p>{piece.name}</p>
                    <div className="collection-item-prices">
                      <div className='collection-item-price-new'>${piece.new_price}</div>
                      <div className='collection-item-price-old'>${piece.old_price}</div>
                    </div>
                    </div>
                   
                )
 } )}


        </div>
        </div>
        </>
    )
   
}

export default NewCollection;