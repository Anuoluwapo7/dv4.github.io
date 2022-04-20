var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019'],
        datasets: [{
            label:'Number of School Shootings', 
            data: [8, 6, 10, 12, 15, 6, 12, 13, 25, 7],
            fill: true,
            borderColor: 'rgba(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            tension: 0.1,
            
        }]
    
    },

    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Rise in American School Shootings After Sandy Hook Tragedy',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Since the Sandy Hook Elementary school shooting in 2012, gun violence in schools has majorly risen each year. The two exceptions are 2015 and 2019. The Sandy Hook tragedy caused Congress to reevaluate Americans accessibility to gun possession. This visualization compares the number of incidents of gun violence in schools slightly before and after Sandy Hook.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});