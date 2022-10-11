import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div className='container d-flex justify-content-center mt-5 pt-5'>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </div >
    );
};

export default Statistics;