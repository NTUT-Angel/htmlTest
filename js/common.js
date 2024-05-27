var sidebarExpanded = true;
function toggleSidebar() {
    var hamburger_menu_back = document.getElementById('hamburger-menu-background');
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    var ds = document.querySelectorAll('details');

    if (sidebarExpanded) {
    for (let i = 0; i < ds.length; i++) {
        ds[i].style.display = 'none'; // 隱藏選項
    }
        sidebar.style.width = '100px';
        content.style.marginLeft = '100px';
        hamburger_menu_back.style.width = '100px';
    } else {
        sidebar.style.width = '400px';
        content.style.marginLeft = '400px';
        hamburger_menu_back.style.width = '400px';
        setTimeout(function() {
        for (let i = 0; i < ds.length; i++) {
            ds[i].style.display = 'block'; // 隱藏選項
        }
        }, 220);
    }
    sidebarExpanded = !sidebarExpanded;
}

// 選單被按下時執行的函數
function menuClicked(menuItem) {
    // 先將所有選項的顏色重置為黑色
    var featureMenuItems = document.querySelectorAll('.feature-padding');
    var scenarioMenuItems = document.querySelectorAll('.scenario-padding');
    featureMenuItems.forEach(function(item) {
    item.style.color = 'black';
    });
    scenarioMenuItems.forEach(function(item) {
    item.style.color = 'black';
    });

    // 改變被按下的選項的顏色為藍色
    menuItem.style.color = 'blue';
}

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
})
.catch(error => {
    console.error('載入頁面時發生錯誤:', error);
});
}

function goToLog(step) {
    window.open("./Feature/Add make/report/log.html#s1-s1-s1-s1-"+step, "_blank");
    // location.href = "./Regression Test/DCT-43746/Add make/report/log.html#s1-s1-s1-s1-"+step;
}

function goToLog2(step) {
    window.open("./Feature/Edit make/report/log.html#s1-s1-s1-s1-"+step, "_blank");
}

function goToLog3(step) {
    window.open("./Feature/Location details/report/log.html#s1-s1-s1-s1-"+step, "_blank");
}

function goToLog4(step) {
    window.open("./Feature/Set permissions on multiple items quickly/report/log.html#s1-s1-s1-s1-"+step, "_blank");
}