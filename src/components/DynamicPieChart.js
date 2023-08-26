import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DynamicPieChart(props) {
    const {program, year, columns, row, backgroundColor, hoverBackgroundColor,pdfUrl} = props;
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

  

    useEffect(() => {
        const data = {
            labels: columns,
            datasets: [
                {
                    data: row,
                    backgroundColor: backgroundColor,
                    hoverBackgroundColor: hoverBackgroundColor
                }
            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: props.pointStyle
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className='my-2 col-md-6 mx-0 d-flex justify-content-center'>
        <div className='card' style={{width:'fit-content'}}>
            <div className='card-header'>
            <h3 className='text-decoration-underline text-bold text-center'>Consolidate Placement Details {year}</h3>
            </div>
            <div className='card-body d-flex align-items-center justify-content-center'>
                <a href={pdfUrl} target="_blank">
                    <Chart height='250px' width='250px' type="pie" data={chartData} options={chartOptions} />
                </a>
            </div>
            <div className='card-footer'>
                <h4 className='text-bold text-center'>Program : {program}</h4>
            </div>
        </div>
        </div>
    )
}
