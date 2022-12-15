
//header mobile 
  let burger = document.querySelector('.js-burger'),
      nav = document.querySelector('.js-nav'),
      navClose = document.querySelector('.js-close-nav');

  burger.addEventListener('click', (e) =>{
      nav.classList.add('is-active');
  })

  navClose.addEventListener('click', (e) =>{
      nav.classList.remove('is-active');
  })


//diagram
  let options = {
    series: [15, 100, 100, 50, 100],
    chart: {
      height: '310px',
      type: 'radialBar',
      zoom: {
        enabled: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1000,
        animateGradually: {
            enabled: true,
            delay: 80
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    colors: ['#EF5DA8', '#5D5FEF', '#3AC49F', '#F178B6', '#A5A6F6'],
    stroke: {
      lineCap: "round"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "30%",
        },
        track: {
          background: '#DDDDDD',
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        },
      },
    },
    labels: ['SR ТОП', 'SR ПРО', 'SR ФРЕШ', 'Портфолио', 'Профиль'],
    tooltip: {
      enabled: true,
      shared: true,
      fillSeriesColor: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
          highlightDataSeries: false,
      },
      y: {
          formatter: undefined,
          title: {
              formatter: (seriesName) => seriesName,
          },
      },
      marker: {
        show: false,
      },
      fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
      },
    },
    states: {
      normal: {
          filter: {
              type: 'none',
              value: 0,
          }
      },
      hover: {
          filter: {
              type: 'none',
              value: 0,
          }
      },
      active: {
          allowMultipleDataPointsSelection: false,
          filter: {
              type: 'none',
              value: 0,
          }
      },
    }
  };


  window.onload = (event) => {
    let chart = new ApexCharts(document.querySelector(".js-chart"), options);
    chart.render();
  }
  