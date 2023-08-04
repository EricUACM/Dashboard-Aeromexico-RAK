const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310'],
      datasets: [{
        label: '100 %',
        data: [85, 85, 65, 45, 30, 100, 95, 85, 95, 100],
        backgroundColor:[
            '#1B8BD3'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const ctxs = document.getElementById('donut');
new Chart(ctxs, {
    type: 'doughnut',
    data: {
      labels: ['20%', '35%', '45%',],
      datasets: [{
        data: [20, 35, 45],
        backgroundColor:[
            '#A5ACBB',
            '#1942A1',
            '#8AC8F1'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  const ctxz = document.getElementById('myChart1');

  new Chart(ctxz, {
    type: 'bar',
    data: {
      labels: ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310'],
      datasets: [{
        label: '100 %',
        data: [85, 85, 65, 45, 30, 100, 95, 85, 95, 100],
        backgroundColor:[
            '#1B8BD3'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctxsz = document.getElementById('donut1');
  new Chart(ctxsz, {
      type: 'doughnut',
      data: {
        labels: ['20%', '35%', '45%',],
        datasets: [{
          data: [20, 35, 45],
          backgroundColor:[
              '#A5ACBB',
              '#1942A1',
              '#8AC8F1'
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:5,
      nav:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false,
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:5,
              nav:false,
            loop:false
          }
      }
  })