//Замена протоколов
export const HTTPS = 'https://';
export const HTTP = 'http://';
//SWAPI
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search=';
export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE;
export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;

// getImage
export const getImage = 'https://starwars-visualguide.com/assets/img/characters/';
export const imgExtension = '.jpg';



// https://swapi.dev/api/people/?search=