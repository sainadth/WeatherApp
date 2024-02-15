import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import axios from "axios";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = async (searchData) => {
    try {
      geoApiOptions.url = `${GEO_API_URL}/cities?namePrefix=${searchData}`;
      const response = await axios.request(geoApiOptions);
      // console.log(response.data);
      return {
        options: response.data.data.map((city) => {
          return {
            value: { latitude: city.latitude, longitude: city.longitude },
            label: [`${city.name}`, `${city.countryCode}`],
            /* label: { name: city.name, countryCode: city.countryCode }, */
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeSearch = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChangeSearch}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
