import axios from "axios";
import { useEffect, useState } from "react";
import FeaturesFoodsCard from "../components/FeaturesFoodsCard";

const AvailableFoods = () => {
    const [foods, setFoods] = useState([])

    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allFoods?sort=${sort}&search=${search}`)
            setFoods(data)
        }
        getData()
    }, [search, sort])
    const handleReset = () => {
        setSort('')
        setSearch('')
        setSearchText('')
    }

    const handleSearch = e => {
        e.preventDefault()

        setSearch(searchText)
    }
    return (
        <div>
            <div className="flex items-center justify-center my-8">
                <div>
                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <select
                        onChange={e => {
                            setSort(e.target.value)
                        }}
                        value={sort}
                        name='sort'
                        id='sort'
                        className='border p-4 rounded-md'
                    >
                        <option value=''>Sort By Food Expire Date</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </div>
                <button onClick={handleReset} className='btn'>
                    Reset
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {foods.map(food => <FeaturesFoodsCard food={food} key={food._id}></FeaturesFoodsCard>)}
            </div>
        </div>
    );
};

export default AvailableFoods;