import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import variablePie from 'highcharts/modules/variable-pie';
const image1 = require('../assets/table-1.png')
const image2 = require('../assets/table-2.png')
const hiImg = require('../assets/hi.logo-removebg-preview.png')

variablePie(Highcharts);
function Home() {
    const config = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'My Chart'
        },
        xAxis: {
            type: 'category',
            lineWidth: 0,
        },
        yAxis: {
            lineWidth: 0,
            lineColor: '#D2D5D8',
            gridLineWidth: 0,
            labels: {
                enabled: false,
            },
            title: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: 8,
                color: '#f2effe'
            },
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    format: '{point.y:.2f}%'
                }
            }
        },
        series: [{
            data: [
                {
                    y: 5,
                    name: 'jan'
                },
                {
                    y: 6,
                    name: 'feb'
                },
                {
                    y: 9,
                    name: 'mar'
                },
                {
                    y: 8,
                    name: 'april'
                },
                {
                    y: 9,
                    name: 'may'
                },
                {
                    y: 4,
                    name: 'june'
                },
                {
                    y: 8,
                    name: 'july'
                },
                {
                    y: 9,
                    name: 'aug',
                    color: 'blue'
                },
                {
                    y: 8,
                    name: 'sep'
                },
                {
                    y: 7,
                    name: 'oct'
                },
                {
                    y: 6,
                    name: 'nov'
                },
                {
                    y: 8,
                    name: 'dec'
                }
            ]
        }]
    }
    const config2 = {
        chart: {
            type: 'variablepie',
            events: {
                render: function () {

                    var chart = this,
                        series = chart.series[0],
                        center = series.center,
                        renderer = chart.renderer,
                        textLines = ['65%', 'Total', 'New Customers'],
                        lineHeight = 20, // Adjust line height as needed
                        totalHeight = lineHeight * textLines.length
                    if (chart.customText) {
                        chart.customText.destroy();
                    } 
                    if (!chart.customText) {

                        chart.customText = renderer
                            .text('65%', center[0] + 15, center[1])
                            .attr({
                                zIndex: 5,
                                align: 'center',
                            })
                            .add();
                        chart.customText = renderer
                            .text('new', center[0] +15 , center[1]+20)
                            .attr({
                                zIndex: 5,
                                align: 'center',
                            })
                            .add();
                        chart.customText = renderer
                            .text('customers', center[0]+20 , center[1]+40)
                            .attr({
                                zIndex: 5,
                                align: 'center',
                            })
                            .add();
                    }

                    console.log('Text element:', chart.customText);
                },
            },
        },
        credits: {
            enabled: false
        },
        accessibility: {
            description: 'A variable radius pie chart',
        },
        title: {
            text: '',
        },
        series: [
            {
                minPointSize: 10,
                innerSize: '60%',
                zMin: 0,
                name: 'countries',
                data: [
                    {
                        name: 'Poland',
                        y: 192685,
                        z: 44.6,
                        color: '#ec4497'
                    },
                    {
                        name: 'France',
                        y: 5511000,
                        z: 25.7,
                        color: '#5944e8'
                    },
                    {
                        name: 'Spain',
                        y: 1005370,
                        z: 12.9,
                        color: '#f1effc'
                    },
                ],
            },
        ],
        plotOptions: {
            variablepie: {
                dataLabels: {
                    enabled: false
                }
            }
        }

    }
    return (

        <div className='p-4'>
            <div className='d-flex justify-space'>

                <div>
                    Hello Shahrukh<img alt='' className='hi-logo' src={hiImg} />,
                </div>
                <div className='bg-white br-2'>
                    <span className='p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </span>
                    <input type='text' className='input-1-div' placeholder='     search' />
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3'>
                    <div className='m-2 bg-white'>
                        <div className='card-box  d-flex mx-2 p-2'>
                            <div className='center'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                                        <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className='mar-left-10 align-vertical my-auto'>
                                <div>
                                    Earning
                                </div>
                                <div>
                                    $198k
                                </div>
                                <div>
                                    <span className='green-color'>
                                        37.8&nbsp;
                                    </span>
                                    this month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='m-2 bg-white'>
                        <div className='card-box  d-flex mx-2 p-2'>
                            <div className='center'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                                        <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className='mar-left-10 align-vertical my-auto'>
                                <div>
                                    Earning
                                </div>
                                <div>
                                    $198k
                                </div>
                                <div>
                                    <span className='green-color'>
                                        37.8&nbsp;
                                    </span>
                                    this month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='m-2 bg-white'>
                        <div className='card-box  d-flex mx-2 p-2'>
                            <div className='center'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                                        <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className='mar-left-10 align-vertical my-auto'>
                                <div>
                                    Earning
                                </div>
                                <div>
                                    $198k
                                </div>
                                <div>
                                    <span className='green-color'>
                                        37.8&nbsp;
                                    </span>
                                    this month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='m-2 bg-white'>
                        <div className='card-box  d-flex mx-2 p-2'>
                            <div className='center'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                                        <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                                    </svg>
                                </span>
                            </div>
                            <div className='mar-left-10 align-vertical my-auto'>
                                <div>
                                    Earning
                                </div>
                                <div>
                                    $198k
                                </div>
                                <div>
                                    <span className='green-color'>
                                        37.8&nbsp;
                                    </span>
                                    this month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-4'>
                <div className='row'>
                    <div className='col-lg-9'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={config}
                        />
                    </div>
                    <div className='col-lg-3'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={config2}
                        />
                    </div>

                </div>

            </div>
            <div className='mt-4'>
                <div className='bg-white'>
                    <div className='row p-4'>

                            <div className='d-lg-flex justify-content-between'>
                                <div>
                                    Product sell
                                </div>
                                <div className='d-lg-flex d-md-flex  gap-3'>
                                    <input className='input-v2 ' placeholder='search' />
                                    <input className='input-v3 ' placeholder='last 30 days' />
                                </div>
                            </div>
                            <div className='table-responsive'>

                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th className=''>Product Name</th>
                                                <th >stock</th>
                                                <th  >price</th>
                                                <th >Total Sales</th>
                                            </tr>
                                            <tr>
                                                <td  >
                                                    <div className='d-flex'>
                                                        <div>
                                                            <img alt='' className='img-width' src={image1} />
                                                        </div>
                                                        <div className='mar-left-10'>
                                                            <div>
                                                                Abstract 3D
                                                            </div>
                                                            <div>
                                                                Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td  >32 in stock</td>
                                                <td >$49.99</td>
                                                <td >20</td>
                                            </tr>
                                            <tr>
                                                <td  >
                                                    <div className='d-flex'>
                                                        <div className=''>
                                                            <img alt='' className='img-width' src={image2} />
                                                        </div>
                                                        <div className='mar-left-10'>
                                                            <div>
                                                                Abstract 3D
                                                            </div>
                                                            <div>
                                                                Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td  >32 in stock</td>
                                                <td >$49.99</td>
                                                <td >20</td>
                                            </tr>
                                        </tbody>
                                    </table>

                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home