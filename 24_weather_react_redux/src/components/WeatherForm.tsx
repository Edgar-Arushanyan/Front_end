import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherReducer';

const WeatherForm: React.FC = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Enter city name' 
        value={city} 
        onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit'>Get Weather</button>
    </form>
  );
};
export default WeatherForm;