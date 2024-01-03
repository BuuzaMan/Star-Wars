import { Link } from 'react-router-dom';
import useCharacters from '../../hooks/useCharacter';
import { getCharacterId, getCharacterImg } from '../Services';






const Cards = () => {
   const { characters, nextPage, prevPage, isLoading, currentPage} = useCharacters();
   
   const characterList = characters.map(({ name, url}) =>{
    const id = getCharacterId(url);
    const img = getCharacterImg(id);
    return { name, url, img, id}
   });
   
 
   
  return (
    
      <div className='flex mt-[100px] flex w-[1200px] justify-center mx-auto'>
        
          {isLoading ? (
            <img className='flex' src='../images/gif/load.gif' alt='loading'/>
          ) : (
            <div className='flex relative grid desktop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-1 desktop:mr-0 tablet:mr-0 mobile:mr-[100px] gap-12 mb-[100px]'>
              {characterList.map((character) => (
                <div>
                  <Link to={`/${character.id}`}>
                  <img className='w-[200px] rounded-md' src={character.img} alt={character.id} />
                  <div className='flex text-white text-[24px] font-Oswald'>{character.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className='flex absolute left-0 right-0 mb-[20px] justify-center mt-[40px] fixed bottom-0 w-full'>
            <button className='text-white text-[30px] font-Oswald' disabled={currentPage <= 0} onClick={prevPage}>
              PREVIOUS
            </button>
            <button className='text-white text-[30px] font-Oswald ml-[20px]' onClick={nextPage}>NEXT</button>
            {/* <button onClick={add10More}>Add 10 More</button> */}
          </div>
        </div>
  );
}
  
  export default Cards;
