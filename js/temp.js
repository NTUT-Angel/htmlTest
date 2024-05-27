// 頁面載入函式
function loadPage(page) {
// 使用fetch載入指定頁面
fetch(page)
.then(response => response.text())
.then(data => {
    // 提取<body>內容
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const bodyContent = doc.body.innerHTML;

    // 將提取的內容放入右邊的內容區域
    document.getElementById('content').innerHTML = bodyContent;

    // 重新初始化圖表
    if(page.startsWith('./Regression Test/Regression Test.html')) {
        chart();
    }
    else if (page.startsWith('./Regression Test/DCT-43746')) {
        chart2();
    }
    else if (page.startsWith('./Regression Test/DCT-51408')) {
        chart3();
    }
    else if (page.startsWith('./Regression Test/DCT-54060')) {
        chart4();
    }
    else {
        chart();
    }
})
.catch(error => {
    console.error('載入頁面時發生錯誤:', error);
});
}

function chart() {
// 重新初始化圖表
var ctx_f = document.getElementById('regressionTestChart').getContext('2d');
var myChart1 = new Chart(ctx_f, {
    type: 'doughnut',
    data: {
    labels: ['Passed', 'Failed', 'Others'],
    datasets: [{
        label: '# of Tests',
        data: [7, 1, 0],
        backgroundColor: [
        'rgba(0, 255, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(128, 128, 128, 0.5)'
        ],
        borderColor: [
        'rgba(0, 255, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(128, 128, 128, 1)'
        ],
        borderWidth: 1
    }]
    },
    options: {
    responsive: false,
    legend: {
        position: 'bottom'
    },
    title: {
        display: false
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
    }
});
}

function chart2() {
// 重新初始化圖表
var ctx = document.getElementById('chartDCT43746').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Passed', 'Failed', 'Others'],
    datasets: [{
        label: '# of Tests',
        data: [3, 1, 0],
        backgroundColor: [
        'rgba(0, 255, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(128, 128, 128, 0.5)'
        ],
        borderColor: [
        'rgba(0, 255, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(128, 128, 128, 1)'
        ],
        borderWidth: 1
    }]
    },
    options: {
    responsive: false,
    legend: {
        position: 'bottom'
    },
    title: {
        display: false
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
    }
});
}

function chart3() {
// 重新初始化圖表
var ctx = document.getElementById('chartDCT51408').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Passed', 'Failed', 'Others'],
    datasets: [{
        label: '# of Tests',
        data: [3, 0, 0],
        backgroundColor: [
        'rgba(0, 255, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(128, 128, 128, 0.5)'
        ],
        borderColor: [
        'rgba(0, 255, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(128, 128, 128, 1)'
        ],
        borderWidth: 1
    }]
    },
    options: {
    responsive: false,
    legend: {
        position: 'bottom'
    },
    title: {
        display: false
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
    }
});
}

function chart4() {
// 重新初始化圖表
var ctx = document.getElementById('chartDCT54060').getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Passed', 'Failed', 'Others'],
    datasets: [{
        label: '# of Tests',
        data: [1, 0, 0],
        backgroundColor: [
        'rgba(0, 255, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(128, 128, 128, 0.5)'
        ],
        borderColor: [
        'rgba(0, 255, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(128, 128, 128, 1)'
        ],
        borderWidth: 1
    }]
    },
    options: {
    responsive: false,
    legend: {
        position: 'bottom'
    },
    title: {
        display: false
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
    }
});
}