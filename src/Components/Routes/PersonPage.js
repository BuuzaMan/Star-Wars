import { useEffect, useState } from "react";
import { API_PERSON } from "../Constants";
import { useParams} from 'react-router-dom';
import { getCharacterImg } from "../Services";
import axios from "axios";


let PersonPage = () => {
  const [personInfo, setPersonInfo] = useState();
  const [personName, setPersonName] = useState();
  const [personPhoto, setPersonPhoto] = useState();
  const { id,name } = useParams()
  
    useEffect(() => {
      const fetchPersonData = async () => {
        try {
          const response = await axios.get(`${API_PERSON}/${name}/`);
          const res = response.data;
          console.log(res);
  
          if (res) {
            setPersonInfo([
              { title: 'HEIGHT', data: res.height },
              { title: 'WEIGHT', data: res.mass },
              { title: 'HAIR', data: res.hair_color },
              { title: 'SKIN COLOR', data: res.skin_color },
              { title: 'EYE COLOR', data: res.eye_color },
              { title: 'BIRTH YEAR', data: res.birth_year },
              { title: 'GENDER', data: res.gender },
            ]);
            setPersonName(res.name);
            setPersonPhoto(getCharacterImg(name));
          }
        } catch (error) {
          console.error("FAILED TO ACCESS", error);
        }
      };
  
      fetchPersonData();
    }, [id, name]);
    return (
     <div className="flex ml-[600px]">
        <div className="mt-[100px]">
            <img className="w-[250px] rounded-md" src={personPhoto} alt={personName} />
            <div className="text-[#b91c1c] font-Oswald text-[30px]">{ personName }</div>
        </div>
        <div className="mt-[95px] ml-[30px]">
            {personInfo && (
              <ul className="font-Oswald text-white text-[34px]">
                {personInfo.map(({ title, data }) => (
                    data && (
                      <li key={title}>
                          <span>{title}</span>: {data}
                      </li>)
                ))}
              </ul>
            )}
        </div>
      </div>
      
      
     )
}

export default PersonPage;