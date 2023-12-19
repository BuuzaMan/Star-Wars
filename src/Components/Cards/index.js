import { Link } from 'react-router-dom';
import useCharacters from '../../hooks/useCharacter';
import { getCharacterId, getCharacterImg } from '../Services';





const Cards = () => {
   const { characters, nextPage, prevPage, isLoading, currentPage} = useCharacters();
   
   const characterList = characters.map(({ name, url}) =>{
    const id = getCharacterId(url);
    const img = getCharacterImg(id);
    return { name, url, img}
   });

   const characterIdAdd = characterList.map((character, index) => {
    return {
      ...character, id: index + 1};
   })
   console.log(characterIdAdd);
   
  return (
    
      <div className='mt-[100px]'>
          {isLoading ? (
            <img className='ml-[400px]' src='../images/gif/loading.gif' alt='loading'/>
          ) : (
            <div className='grid grid-cols-5 space-y-[30px]'>
              {characterIdAdd.map((character, name) => (
                <Link to={`/${name}`}>
                  <div>
                    <img className='w-[200px] rounded-md' src={character.img} alt={character.id} />
                    <div className='text-white text-[18px] font-Oswald'>{character.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className='mt-[40px] ml-[650px]'>
            
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
