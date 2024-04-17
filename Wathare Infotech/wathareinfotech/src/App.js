

  // import React, { useState, useEffect } from 'react';
  // import Chart from 'chart.js';

  // const DataComponent = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch('http://localhost:5000/api/data')
  //       .then(response => response.json())
  //       .then(data => setData(data))
  //       .catch(error => console.error('Error fetching data:', error));
  //   }, []);

  //   useEffect(() => {
  //     if (data.length > 0) {
  //       renderChart();
  //       generateSummary();
  //       generateTimeScale();
  //     }
  //   }, [data]);

  //   const renderChart = () => {
  //     const timestamps = data.map(entry => entry.ts);
  //     const statuses = data.map(entry => entry.machine_status);

  //     const colors = statuses.map(status => {
  //       if (status === 0) return 'rgba(255, 206, 86, 0.6)'; // Yellow
  //       if (status === 1) return 'rgba(75, 192, 192, 0.6)'; // Green
  //       return 'rgba(255, 99, 132, 0.6)'; // Red
  //     });

  //     const ctx = document.getElementById('myChart').getContext('2d');

  //     new Chart(ctx, {
  //       type: 'line',
  //       data: {
  //         labels: timestamps,
  //         datasets: [{
  //           label: 'Machine Status',
  //           data: statuses,
  //           backgroundColor: colors,
  //           borderColor: colors,
  //           borderWidth: 1
  //         }]
  //       },
  //       options: {
  //         scales: {
           
  //           x: {
  //             type: 'time',
  //             time: {
  //               displayFormats: {
  //                 hour: 'h:mm a'
  //               }
  //             },
  //             title: {
  //               display: true,
  //               text: 'Timestamp'
  //             }
  //           },
  //           yAxes:[{display:false}]
  //           // y: {
  //           //   display:false,
  //           //   // title: {
  //           //   //   display: false,
  //           //   //   text: 'Machine Status'
  //           //   // },
  //           //   // ticks: {
  //           //   //   min: -1,
  //           //   //   stepSize: 1,
  //           //   //   callback: function (value) {
  //           //   //     return value === -1 ? '-1' : value === 0 ? '0' : value === 1 ? '1' : 'Missing';
  //           //   //   }
  //           //   // }
  //           // }
  //         }
  //       }
  //     });
  //   };

  //   const generateSummary = () => {
  //     const ones = data.filter(entry => entry.machine_status === 1).length;
  //     const zeros = data.filter(entry => entry.machine_status === 0).length;
  //     const continuousVariations = countContinuousVariations(data);

  //     console.log('Summary:');
  //     console.log('Number of 1s:', ones);
  //     console.log('Number of 0s:', zeros);
  //     console.log('Continuous 0s:', continuousVariations.continuousZeros);
  //     console.log('Continuous 1s:', continuousVariations.continuousOnes);
  //   };

  //   const generateTimeScale = () => {
  //     const labels = data.map(row => row.ts.split('T')[1]); // Extracting time from ts

  //     new Chart(
  //       document.getElementById('TimeScale'),
  //       {
  //         type: 'bar',
  //         data: {
  //           labels: labels,
  //           datasets: [{
  //             label: 'Machine Status',
  //             data: data.map(row => row.machine_status),
  //             barPercentage: 1,
  //             backgroundColor: data.map(row => row.machine_status ? 'rgba(0, 100, 0)' : 'rgba(255, 255, 0)')
  //           }]
  //         },
  //         options: {
  //           scales: {
  //             x: {
  //               title: {
  //                 display: true,
  //                 text: 'Time of Day'
  //               }
  //             },
  //             yAxes:[{display:false}]
  //             // y: {
  //             //   title: {
  //             //     display: true,
  //             //     text: 'Machine Status'
  //             //   },
  //             //   ticks: {
  //             //     min: -1,
  //             //     stepSize: 1,
  //             //     callback: function (value) {
  //             //       return value === -1 ? '-1' : value === 0 ? '0' : value === 1 ? '1' : 'Missing';
  //             //     }
  //             //   }
  //             // }
  //           }
  //         }
  //       }
  //     );
  //   };

  //   const countContinuousVariations = data => {
  //     let continuousZeros = 0;
  //     let continuousOnes = 0;
  //     let currentContinuous = 1;

  //     for (let i = 1; i < data.length; i++) {
  //       if (data[i].machine_status === data[i - 1].machine_status) {
  //         currentContinuous++;
  //       } else {
  //         if (data[i - 1].machine_status === 0) {
  //           continuousZeros = Math.max(continuousZeros, currentContinuous);
  //         } else {
  //           continuousOnes = Math.max(continuousOnes, currentContinuous);
  //         }
  //         currentContinuous = 1;
  //       }
  //     }

  //     return { continuousZeros, continuousOnes };
  //   };

  //   return (
  //     <div>
  //       <h1>Data Visualization</h1>
  //       <canvas id="myChart" width="800" height="400"></canvas>
  //       <h2>Time Scale</h2>
  //       <canvas id="TimeScale" width="800" height="200"></canvas>
  //       <div>
  //         <h2>Summary</h2>
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>Number of 1s:</td>
  //               <td>{data.filter(entry => entry.machine_status === 1).length}</td>
  //             </tr>
  //             <tr>
  //               <td>Number of 0s:</td>
  //               <td>{data.filter(entry => entry.machine_status === 0).length}</td>
  //             </tr>
  //             <tr>
  //               <td>Continuous 0s:</td>
  //               <td>{countContinuousVariations(data).continuousZeros}</td>
  //             </tr>
  //             <tr>
  //               <td>Continuous 1s:</td>
  //               <td>{countContinuousVariations(data).continuousOnes}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   );
  // };

  // export default DataComponent;



//**********************************************************************


// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js';

// const DataComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData('http://localhost:5000/api/data');
//   }, []);

//   const fetchData = (url) => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   useEffect(() => {
//     if (data.length > 0) {
//       renderChart();
//       generateSummary();
//       generateTimeScale();
//     }
//   }, [data]);

//   const renderChart = () => {
//     const timestamps = data.map(entry => entry.ts);
//     const statuses = data.map(entry => entry.machine_status);

//     const colors = statuses.map(status => {
//       if (status === 0) return 'rgba(255, 206, 86, 0.6)'; // Yellow
//       if (status === 1) return 'rgba(75, 192, 192, 0.6)'; // Green
//       return 'rgba(255, 99, 132, 0.6)'; // Red
//     });

//     const ctx = document.getElementById('myChart').getContext('2d');

//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: timestamps,
//         datasets: [{
//           label: 'Machine Status',
//           data: statuses,
//           backgroundColor: colors,
//           borderColor: colors,
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           x: {
//             type: 'time',
//             time: {
//               displayFormats: {
//                 hour: 'h:mm a'
//               }
//             },
//             title: {
//               display: true,
//               text: 'Timestamp'
//             }
//           },
//           yAxes:[{display:false}]
//         }
//       }
//     });
//   };

//   const generateSummary = () => {
//     const ones = data.filter(entry => entry.machine_status === 1).length;
//     const zeros = data.filter(entry => entry.machine_status === 0).length;
//     const continuousVariations = countContinuousVariations(data);

//     console.log('Summary:');
//     console.log('Number of 1s:', ones);
//     console.log('Number of 0s:', zeros);
//     console.log('Continuous 0s:', continuousVariations.continuousZeros);
//     console.log('Continuous 1s:', continuousVariations.continuousOnes);
//   };

//   const generateTimeScale = () => {
//     const labels = data.map(row => row.ts.split('T')[1]); // Extracting time from ts

//     new Chart(
//       document.getElementById('TimeScale'),
//       {
//         type: 'bar',
//         data: {
//           labels: labels,
//           datasets: [{
//             label: 'Machine Status',
//             data: data.map(row => row.machine_status),
//             barPercentage: 1,
//             backgroundColor: data.map(row => row.machine_status ? 'rgba(0, 100, 0)' : 'rgba(255, 255, 0)')
//           }]
//         },
//         options: {
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: 'Time of Day'
//               }
//             },
//             yAxes:[{display:false}]
//           }
//         }
//       }
//     );
//   };

//   const countContinuousVariations = data => {
//     let continuousZeros = 0;
//     let continuousOnes = 0;
//     let currentContinuous = 1;

//     for (let i = 1; i < data.length; i++) {
//       if (data[i].machine_status === data[i - 1].machine_status) {
//         currentContinuous++;
//       } else {
//         if (data[i - 1].machine_status === 0) {
//           continuousZeros = Math.max(continuousZeros, currentContinuous);
//         } else {
//           continuousOnes = Math.max(continuousOnes, currentContinuous);
//         }
//         currentContinuous = 1;
//       }
//     }

//     return { continuousZeros, continuousOnes };
//   };

//   const handleFilter = (frequency) => {
//     const startTime = new Date();
//     startTime.setHours(startTime.getHours() - frequency);
//     const formattedStartTime = startTime.toISOString();

//     const apiUrl = `http://localhost:5000/api/data/filter?startTime=${formattedStartTime}&frequency=day`;
//     fetchData(apiUrl);
//   };

//   return (
//     <div>
//       <h1>Data Visualization</h1>
//       <div>
//         <button onClick={() => handleFilter(1)}> 1 Hour</button>
//         <button onClick={() => handleFilter(8)}> 8 Hours</button>
//         <button onClick={() => handleFilter(24)}> 24 Hours</button>
//       </div>
//       <canvas id="myChart" width="800" height="400"></canvas>
//       <h2>Time Scale</h2>
//       <canvas id="TimeScale" width="800" height="200"></canvas>
//       <div>
//         <h2>Summary</h2>
//         <table>
//           <tbody>
//             <tr>
//               <td>Number of 1s:</td>
//               <td>{data.filter(entry => entry.machine_status === 1).length}</td>
//             </tr>
//             <tr>
//               <td>Number of 0s:</td>
//               <td>{data.filter(entry => entry.machine_status === 0).length}</td>
//             </tr>
//             <tr>
//               <td>Continuous 0s:</td>
//               <td>{countContinuousVariations(data).continuousZeros}</td>
//             </tr>
//             <tr>
//               <td>Continuous 1s:</td>
//               <td>{countContinuousVariations(data).continuousOnes}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DataComponent;

// **************************************************************


import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('http://localhost:5000/api/data');
  }, []);

  const fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    if (data.length > 0) {
      renderChart();
      generateSummary();
      generateTimeScale();
    }
  }, [data]);

  const renderChart = () => {
    const timestamps = data.map(entry => entry.ts);
    const statuses = data.map(entry => entry.machine_status);

    const colors = statuses.map(status => {
      if (status === 0) return 'rgba(255, 206, 86, 0.6)'; // Yellow
      if (status === 1) return 'rgba(75, 192, 192, 0.6)'; // Green
      return 'rgba(255, 99, 132, 0.6)'; // Red
    });

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [{
          label: 'Machine Status',
          data: statuses,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              displayFormats: {
                hour: 'h:mm a'
              }
            },
            title: {
              display: true,
              text: 'Timestamp'
            }
          },
          yAxes:[{display:false}]
        }
      }
    });
  };

  const generateSummary = () => {
    const ones = data.filter(entry => entry.machine_status === 1).length;
    const zeros = data.filter(entry => entry.machine_status === 0).length;
    const continuousVariations = countContinuousVariations(data);

    console.log('Summary:');
    console.log('Number of 1s:', ones);
    console.log('Number of 0s:', zeros);
    console.log('Continuous 0s:', continuousVariations.continuousZeros);
    console.log('Continuous 1s:', continuousVariations.continuousOnes);
  };

  const generateTimeScale = () => {
    const labels = data.map(row => row.ts.split('T')[1]); // Extracting time from ts

    new Chart(
      document.getElementById('TimeScale'),
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Machine Status',
            data: data.map(row => row.machine_status),
            barPercentage: 1,
            backgroundColor: data.map(row => row.machine_status ? 'rgba(0, 100, 0)' : 'rgba(255, 255, 0)')
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time of Day'
              }
            },
            yAxes:[{display:false}]
          }
        }
      }
    );
  };

  const countContinuousVariations = data => {
    let continuousZeros = 0;
    let continuousOnes = 0;
    let currentContinuous = 1;

    for (let i = 1; i < data.length; i++) {
      if (data[i].machine_status === data[i - 1].machine_status) {
        currentContinuous++;
      } else {
        if (data[i - 1].machine_status === 0) {
          continuousZeros = Math.max(continuousZeros, currentContinuous);
        } else {
          continuousOnes = Math.max(continuousOnes, currentContinuous);
        }
        currentContinuous = 1;
      }
    }

    return { continuousZeros, continuousOnes };
  };

  const handleFilter = (frequency) => {
    // Dummy function for filtering, to be implemented
    console.log(`Filtering data for ${frequency} hours`);
  };

  return (
    <div>
      <h1>Data Visualization</h1>
      <div>
        {/* Dummy buttons for filtering */}
        <button onClick={() => handleFilter(1)}>Filter 1 Hour</button>
        <button onClick={() => handleFilter(8)}>Filter 8 Hours</button>
        <button onClick={() => handleFilter(24)}>Filter 24 Hours</button>
      </div>
      <canvas id="myChart" width="800" height="400"></canvas>
      <h2>Time Scale</h2>
      <canvas id="TimeScale" width="800" height="200"></canvas>
      <div>
        <h2>Summary</h2>
        <table style={{ border: '1px solid black' }}>
          <tbody style={{ border: '1px solid black' }}>
            <tr style={{ border: '1px solid black' }}>
              <td>Number of 1s:</td>
              <td>{data.filter(entry => entry.machine_status === 1).length}</td>
            </tr>
            <tr>
              <td>Number of 0s:</td>
              <td>{data.filter(entry => entry.machine_status === 0).length}</td>
            </tr>
            <tr>
              <td>Continuous 0s:</td>
              <td>{countContinuousVariations(data).continuousZeros}</td>
            </tr>
            <tr>
              <td>Continuous 1s:</td>
              <td>{countContinuousVariations(data).continuousOnes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataComponent;


