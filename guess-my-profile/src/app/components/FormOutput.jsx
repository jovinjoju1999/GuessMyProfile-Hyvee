"use client"

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import NameForm from './InputForm';
import { getName } from 'country-list';

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const FormOutput = () => {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchInfo = async (name) => {
      setLoading(true);
      setError(null);

     

      try {
        const [ageRes, genderRes, nationalityRes] = await Promise.all([
          axios.get(`https://api.agify.io`, { params: { name } }),
          axios.get(`https://api.genderize.io`, { params: { name } }),
          axios.get(`https://api.nationalize.io`, { params: { name } }),
        ]);
  
        const sortedCountries = nationalityRes.data.country.sort((a, b) => b.probability - a.probability);
        const topCountry = sortedCountries.length > 0 ? sortedCountries[0] : null;

        setInfo({
          name,
          age: ageRes.data.age,
          gender: genderRes.data.gender,
          country: topCountry,
        });
      } catch (error) {
        console.error('Data fetching failed', error);
        setError('Data fetching failed. Try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleClear = () => {
      setInfo(null);
    };

    return (
        <div className="my-auto mx-auto p-4 border border-black rounded-md shadow-md bg-gradient-to-br from-[#E8CBC0] to-[#636FA4] mt-16">
          <NameForm onSubmit={fetchInfo} onClear={handleClear} />
          {loading && (
            <div className="mt-8 p-4 border border-black rounded-md shadow-md bg-gray-100">
              Please wait...
            </div>
          )}
          {error && (
            <div className="mt-8 p-4 border rounded-md shadow-md bg-red-100">
              {error}
            </div>
          )}
          {info && (
            <div className="mt-8 p-4 border border-gray-700 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">Predictions for {capitalize(info.name)}</h2>
              <p className="mb-2"><strong>Age:</strong> {info.age}</p>
              <p className="mb-2"><strong>Gender:</strong> {capitalize(info.gender)}</p>
              {info.country && (
                <p className="mb-2">
                  <strong>Country:</strong> {getName(info.country.country_id)}
                </p>
              )}
            </div>
          )}
        </div>
      );
  
}

export default FormOutput
