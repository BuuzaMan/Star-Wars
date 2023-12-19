import { HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, imgExtension, getImage } from "../Constants/index";


const getId = (url, category) => {
    const id = url
      .replace(HTTPS+SWAPI_ROOT+category, '')
      .replace(/\//g, '')
    return id;
}

export const getCharacterId = url => getId(url, SWAPI_PEOPLE);

export const getCharacterImg = id => `${getImage}/${id+imgExtension}`;