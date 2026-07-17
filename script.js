const allBtn = document.getElementById('allBtn');
const musicBtn = document.getElementById('musicBtn');
const anyBtn = document.getElementById('anyBtn'); 
const funnyBtn = document.getElementById('funnyBtn'); 
const progmBtn = document.getElementById('progmBtn'); 
function getArticleItems() { return document.querySelectorAll('.fuAtc'); }
const ctgyLab = document.getElementById('ctgyLab'); 
const categoryNames = {
    music: '音乐', 
    funny: '搞笑', 
    progm: '编程', 
    any: '其它'
}; 

function showAllArticles() {
    getArticleItems().forEach(article => {
        article.classList.remove('hidden'); 
    });
    ctgyLab.textContent = '全部';
}

function filterArticles(type) {
    getArticleItems().forEach(article => {
        const hasType = article.querySelector(`#${type}cls`);
        article.classList.toggle('hidden', !hasType);
    });
    ctgyLab.textContent = categoryNames[type] || '全部';
}

allBtn.onclick = showAllArticles;
musicBtn.onclick = () => {
    filterArticles('music');
};
anyBtn.onclick = () => {
    filterArticles('any');
};
funnyBtn.onclick = () => {
    filterArticles('funny')
}
progmBtn.onclick = () => {
    filterArticles('progm')
}

const articles = [
    { title: '测试用文章0', content: '简介简介简介简介简介简介简介简介简介简介简介', ctgy: 'anycls', time: '2026/7/7'}, 
    { title: '测试用文章1', content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介', ctgy: 'anycls', time: '2026/7/7', canview: true, atcLink: './beta-article1.html' }, 
    { title: '测试用文章2', content: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介', ctgy: 'anycls', time: '2026/7/8'}, 
    { title: '謎J新曲 · 女忍者改造人', content: '前往', ctgy: 'musiccls', time: '2026/7/8', link: 'https://www.bilibili.com/video/BV1KY7t6KE83/'}, 
    { title: '脱缰凯剧情记录', content: '你们上课憋笑痛苦吗？主任：所以这24题啊，选C，不这么简单的题怎么还有能做错的呢，啊！一点都不着急是吧，咱这进度得往前赶一赶！（拍两下黑板）赵德柱：（刚在睡觉被惊醒，看向鹰眼）主任说什么？鹰眼：（装着假手拿书，真手在底下玩手机）他让你上去擦黑板', ctgy: 'funnycls', time: '2026/7/11', canview: true, atcLink: './tuojiangkai-record.html' }, 
    { title: '笑话合集', content: '以下的笑话都是我从网络上搜集的👇1. 从前有三个人在野外旅游被食人族抓了，食人族族长说放了你们可以，但你们要分别给我带来十个水果，于是三个人出发了，过了一会，第一个人拿了十个樱桃回来，第二个人拿了十个桃回来，食人族族长命令道，让他们把这十个水果全部塞进自己嘴里，第一个人使使劲勉强塞进去了，第二个人塞进去九个，塞第十个的时候扑哧以下笑了，就全都吐了，食人族族长问他笑什么呢，那个人说：“我看见第三个人拿了十个榴莲回来！”' , ctgy: 'funnycls', time: '2026/7/11', canview: true, atcLink: './jokes.html'}, 
    { title: 'JS中的随机数', content: '当你在做猜数字、掷骰子等一类网页时，都需要用js生成随机数，我们可以通过Math.random来实现，用let创建一个变量，Math.floor用来将数字转化为整数，如果没有结果可能会是：3.0451182108912738、6.923154507599182、3.5553578526501806……', ctgy: 'progmcls', time: '2026/7/13', canview: true, atcLink: './random-num.html' }, 
    { title: 'HTML字体', content: '想让网页的文字看起来不那么生硬，可以在css中使用font-family修改字体，需要自己寻找好看的字体，自己电脑有的其它电脑可能没有，就会变成默认的，可以尽量寻找更兼容的字体，如果浏览网页的电脑是清朝下来的，什么字体都没有', ctgy: 'progmcls', time: '2026/7/15', canview: true, atcLink: './htmlFont.html' }, 
]; 
const mainAtc = document.querySelector('.mAtc'); 

articles.forEach(function(atc) {
    const newAtc = document.createElement('article'); 
    newAtc.className = 'fuAtc'; 
    const atcTitle = document.createElement('h2'); 
    atcTitle.textContent = atc.title; 
    if (atc.canview) {
        newAtc.classList.add('canview'); 
        newAtc.onclick = function() {
            window.location.href = atc.atcLink
        }
    }
    
    const atcContent = document.createElement('h4'); 
    atcContent.className = 'atcContent'

    if (atc.link) {
        const a = document.createElement('a'); 
        a.href = atc.link; 
        a.textContent = atc.content; 
        a.style.fontSize = '1em'; 
        a.target = '_blank'; 
        a.tabIndex = -1; 
        atcContent.appendChild(a); 
    } else {
        atcContent.textContent = atc.content; 
    }

    const ul = document.createElement('ul'); 
    const li =  document.createElement('li'); 
    li.id = atc.ctgy; 
    if (li.id == 'anycls') {
        li.textContent = '其它'; 
    } else if (li.id == 'musiccls') {
        li.textContent = '音乐'; 
    } else if (li.id == 'funnycls') {
        li.textContent = '搞笑'
    } else if (li.id == 'progmcls') {
        li.textContent = '编程'
    }

    const atcTime = document.createElement('h4'); 
    atcTime.className = 'time'; 
    atcTime.textContent = atc.time; 

    mainAtc.appendChild(newAtc); 
    newAtc.appendChild(atcTitle); 
    newAtc.appendChild(atcContent); 
    newAtc.appendChild(ul); 
    ul.appendChild(li); 
    newAtc.appendChild(atcTime); 
})

const showCtgyBtn = document.getElementById('showCtgyBtn'); 
const scbTextf = document.getElementById('scbTextf'); 
const scbTextt = document.getElementById('scbTextt'); 
const ctgyBtns = document.querySelector('.ctgyBtns'); 
const ctgyButtons = Array.from(ctgyBtns.querySelectorAll('button'));

function updateCategoryButtonTabIndex() {
    const isOpen = ctgyBtns.classList.contains('show');
    ctgyButtons.forEach(btn => {
        btn.tabIndex = isOpen ? 0 : -1;
        btn.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
}

updateCategoryButtonTabIndex();

showCtgyBtn.onclick = () => {
    ctgyBtns.classList.toggle('show'); 
    updateCategoryButtonTabIndex();

    if (ctgyBtns.classList.contains('show')) {
        scbTextf.style.opacity = '0'; 
        scbTextf.style.transform = 'scale(0.5)'; 
        scbTextt.style.opacity = '1'; 
        scbTextt.style.transform = 'scale(1)'; 
    } else {
        scbTextf.style.opacity = '1'; 
        scbTextf.style.transform = 'scale(1)'; 
        scbTextt.style.opacity = '0'; 
        scbTextt.style.transform = 'scale(0.5)'; 
    }
}

const updtSt = document.querySelector('.firstUpdt'); 
const updtnd = document.querySelector('.secondUpdt'); 
const updtrd = document.querySelector('.thirdUpdt'); 

if (updtSt.textContent.length < updtnd.textContent.length) {
    updtSt.style.borderBottomRightRadius = '0'; 
    updtnd.style.borderTopRightRadius = '8px'; 
} else if (updtSt.textContent.length === updtnd.textContent.length) {
    updtSt.style.borderBottomRightRadius = '0'; 
    updtnd.style.borderTopRightRadius = '0'; 
} else {
    updtSt.style.borderBottomRightRadius = '8px'; 
    updtnd.style.borderTopRightRadius = '0px'; 
}
if (updtnd.textContent.length < updtrd.textContent.length) {
    updtnd.style.borderBottomRightRadius = '0'; 
    updtrd.style.borderTopRightRadius = '8px'; 
} else if (updtnd.textContent.length === updtrd.textContent.length) {
    updtnd.style.borderBottomRightRadius = '0'; 
    updtrd.style.borderTopRightRadius = '0'; 
}else {
    updtnd.style.borderBottomRightRadius = '8px'; 
    updtrd.style.borderTopRightRadius = '0px'; 
}

const blogver = '20260507015.r'; 
const meta = document.querySelector('meta[name="version"]'); 
const latelyLab = document.getElementById('latelyLab'); 

meta.content = blogver; 
latelyLab.textContent = `最近更新 —— 展示最近5次更新 —— ${blogver}`; 

const homeBtn = document.getElementById('home'); 

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        homeBtn.classList.add('show'); 
    } else {
        homeBtn.classList.remove('show'); 
    }
})
homeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
})

const taA = document.getElementById('Toabout'); 
const tmA = document.getElementById('TomainAtc'); 
const tlA = document.getElementById('Tolately'); 
const tcA = document.getElementById('Tocontact'); 
const sw = window.innerWidth; 

if (sw < 480) {
    taA.onclick = () => {
        window.scrollTo({
            top: 2530, 
            behavior: 'smooth'
        })
    }
    tmA.onclick = () => {
        window.scrollTo({
            top: 530, 
            behavior: 'smooth'
        })
    }
} else if (sw < 786) {
    taA.onclick = () => {
        window.scrollTo({
            top: 1350, 
            behavior: 'smooth'
        })
    }
    tmA.onclick = () => {
        window.scrollTo({
            top: 430, 
            behavior: 'smooth'
        })
    }
} else {
    taA.onclick = () => {
        window.scrollTo({
            top: 620, 
            behavior: 'smooth'
        })
    }
    tmA.onclick = () => {
        window.scrollTo({
            top: 620, 
            behavior: 'smooth'
        })
    }
}
tlA.onclick = () => {
    window.scrollTo({
        top: 20000, 
        behavior: 'smooth'
    })
}
tcA.onclick = () => {
    window.scrollTo({
        top: 20000, 
        behavior: 'smooth'
    })
}

const downArrow = document.querySelector('.downArrow'); 

downArrow.onclick = () => {
    if (sw < 480) {
        window.scrollTo({
            top: 530, 
            behavior: 'smooth'
        })
    } else if (sw < 786) {
        window.scrollTo({
            top: 430, 
            behavior: 'smooth'
        })
    } else {
        window.scrollTo({
            top: 620, 
            behavior: 'smooth'
        })
    }
}