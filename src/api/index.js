import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try{
        const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

        const options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'dec9712b0amsh44c591b47b4e961p19edd8jsn42b201d93ae6',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        
        const { data: { data }} = await axios.get(URL, options);
        
        return data;
    } catch(error){
        console.log(error);
    }
}