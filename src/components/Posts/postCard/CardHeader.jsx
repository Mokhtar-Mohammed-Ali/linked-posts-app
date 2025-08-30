
import { useContext } from 'react';
import userimage from '../../../assets/836.jpg';
import { AuthContext } from '../../context/AuthContext';

export default function CardHeader({name,photo,date}) {
 
  return <>
  <div className='flex'>
            <img onError={(e) => e.target.src = userimage} className=" rounded-full w-10 h-10 mr-3" src={photo} alt={name} />
            <div>
              <h3 className="text-md font-semibold ">{name}</h3>
              <p className="text-xs text-gray-500">  {date.split(".")[0].replace("T", " ")}</p>
            </div>
          </div>
  
  </>
}
