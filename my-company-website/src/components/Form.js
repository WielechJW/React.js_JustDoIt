import React, { useState } from 'react';
import regions from '../data/regions.json';
import counties from '../data/counties.json';

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    region: '',
    county: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    region: false,
    county: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '',
    }));

    if (name === 'region') {
      setFormData((prevData) => ({
        ...prevData,
        county: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '',
    }));
  };

  const isDisabled = (inputName) => {
    if (inputName === 'phone' && formData.email.trim() === '') return true;
    if (inputName === 'region' && formData.phone.trim() === '') return true;
    if (inputName === 'county' && formData.region.trim() === '') return true;
    return false;
  };

  const filteredCounties = counties.filter(
    (county) => county.regionId === parseInt(formData.region)
  );

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isDisabled('phone')}
        />
        {errors.phone && <span style={{ color: 'red' }}>This field is required</span>}
      </div>
      <div>
        <label htmlFor="region">Region:</label>
        <select
          id="region"
          name="region"
          value={formData.region}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isDisabled('region')}
        >
          <option value="">Wybierz województwo</option>
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>
        {errors.region && <span style={{ color: 'red' }}>This field is required</span>}
      </div>
      <div>
        <label htmlFor="county">County:</label>
        <select
          id="county"
          name="county"
          value={formData.county}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isDisabled('county')}
        >
          <option value="">Wybierz powiat</option>
          {filteredCounties.map((county) => (
            <option key={county.id} value={county.id}>
              {county.name}
            </option>
          ))}
        </select>
        {errors.county && <span style={{ color: 'red' }}>This field is required</span>}
      </div>
    </form>
  );
};

export default Form;
