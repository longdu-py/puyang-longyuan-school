// 顶部实时时间
function updateTime() {
    const now = new Date();
    const timeText = now.toLocaleString('zh-CN');
    const timeDom = document.getElementById('topTime');
    if(timeDom) timeDom.innerText = timeText;
}
updateTime();
setInterval(updateTime, 1000);

// 报修表单模拟提交弹窗
const repairForm = document.getElementById('repairForm');
if(repairForm) {
    repairForm.addEventListener('submit', function(e){
        e.preventDefault();
        alert('表单模拟提交成功！正式使用需搭配后端存储数据');
        this.reset();
    })
}
