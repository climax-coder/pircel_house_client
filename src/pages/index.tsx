import React, {useState} from 'react';
import HouseList from '../components/HouseList';
import TraitsFilter from '../components/TraitsFilter';
import Spinner from '../components/Spiner';

interface Trait {
    name: string;
}

interface House {
    name: string;
    founder: string;
    animal: string;
    traits: Trait[];
}

const Home: React.FC = () => {
    const [houses, setHouses] = useState<House[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchHouses = async (filterTerm: string) => {
        setLoading(true);
        try {
            const response = await fetch(`https://pircelhouseserver-jci6qmyq6-seniorprodevs-projects.vercel.app/houses/${filterTerm}`);
            console.log('filterTerm', response)
            const data = await response.json();
            console.log(data, 'fetched data');
            setHouses([...data]);
        } catch (error) {
            console.error('Error fetching houses:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{display:'flex', justifyContent:'center', paddingTop:100}}>
            <div style={{ width:"450px"}}>
                <TraitsFilter onFilterChange={fetchHouses} />
                {loading ? <Spinner/> : <HouseList houses={houses}></HouseList> }
            </div>
        </div>
    );
};

export default Home;