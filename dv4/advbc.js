var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019'],
        datasets: [{
            label:'Number of School Shootings', 
            data: [8, 6, 10, 12, 15, 6, 12, 13, 25, 7],
            backgroundColor: [
                '#FFA500'
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Frequency of American School Shootings Before and After Sandy Hook',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The school shooting at Sandy Hook Elementary shook America and sprung a movement that reevaluated gun possession. Sandy Hook happened in December of 2012 during the 2012-2013 school year. Since then, the number of school shootings has majorly increased every year. The two exceptions are 2015 and 2019. This visualization compares the number of incidents of gun violence in schools slightly before and after Sandy Hook.'
            }
        },
        scales: {
            y: {
                title: {
                    display:true,
                    text: 'Year'
                },
                beginAtZero: true,
                stacked: true
            },
            x: {
                title:{
                    display: true,
                    text: 'Number of School Shootings'
                },
                stacked: true
            }
        },
    },
});


