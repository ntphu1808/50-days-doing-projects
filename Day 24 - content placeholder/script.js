const content =`<div class="card__header">
    <img src="/sliders_2.jpg" alt="" class="header__img"> 
</div>
<div class="card__content">
    <h1 class="content__header">Lorem ipsum dolor sit amet</h1>
    <p class="content__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</p>
    <div class="content__author">
        <img src="/avatar.jpg" alt="" class="author__avatar">
        <div class="author__detail">
            <span class="detail__name">John Doe</span>
            <span class="detail__date">Oct 08, 2020</span>
        </div>
    </div>
</div>`

const cardEl = document.querySelector(".card")

setTimeout(() =>cardEl.innerHTML = content, 2000);