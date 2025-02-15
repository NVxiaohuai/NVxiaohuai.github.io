// 初始化Swiper轮播
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    touchRatio: 1,
    grabCursor: true,
});

// 微信二维码弹窗
const modal = document.getElementById('wechat-modal');
const wechatBtn = document.getElementById('wechat');
const closeBtn = document.getElementsByClassName('close')[0];

wechatBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 快手号弹窗
const kuaishouModal = document.getElementById('kuaishou-modal');
const kuaishouBtn = document.getElementById('kuaishou');
const kuaishouCloseBtn = kuaishouModal.getElementsByClassName('close')[0];

kuaishouBtn.onclick = function() {
    kuaishouModal.style.display = "block";
}

kuaishouCloseBtn.onclick = function() {
    kuaishouModal.style.display = "none";
}

// 修改window点击事件，同时处理微信和快手弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == kuaishouModal) {
        kuaishouModal.style.display = "none";
    }
}

// QQ联系功能
document.querySelector('.qq-link').addEventListener('click', function() {
    window.location.href = 'tencent://message/?uin=3382606608';
}); 