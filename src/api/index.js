import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
    try{
        const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

        const options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '0098fdb07amsh0ffe2479ab1b207p14310cjsncdff97d53823',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        
        const { data: { data }} = await axios.get(URL, options);
        
        return data;
    } catch(error){
        console.log(error);
    }
}