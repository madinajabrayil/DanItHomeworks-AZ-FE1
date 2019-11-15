// OUR SERVICE
let btns = document.querySelectorAll('.btn-service');
let img = document.querySelector('img.our-services-image');
let text = document.querySelector('.our-services-text');

for (let index = 0; index < btns.length; index++) {

    btns[index].addEventListener('click', function () {
        btns[index].classList.remove('active');
        btns[index].classList.add("active");
       


        if (index == 0) {
            img.src = "img/web design/web-design4.jpg"
            text.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi,ducimus porro tem hic harum suscipit, officia eaque dicta ipsum asperiores, quae totam incidunt enim consequatur voluptatum ex quidem minima dolorum aspernatur corrupti accusamus quo? Minima, deleniti, enim incidunt reprehenderit nostrum veniam delectus molestias neque. Explicabo sed repudiandae dicta sunt eaque dolore ipsa doloremquessumend? Blanditiis aa architecto beatae voluptatem hic harum suscipit, asperiores,ueenim consequatur voluptatum ex quidemo? Minima, reprehenderit nostrum veniam delectus molestias neque. Explicabo sed repudiandae dicta sunt eaque dolore ipsa quae totam incidunt enim consequatur voluptatum ex quidem minima dolorum aspernatur corrupti accusamus quo?";
        } else if (index == 1) {
            img.src = "img/wordpress/wordpress3.jpg"
            text.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit nisi facere placeat maiores distinctio eos porro deleniti, delectus labore eveniet dolor. A fugiat, minima obcaecati placeat, corrupti quae nostrum rem quo aliquid non, consequuntur blanditiis incidunt iusto libero inventore similique magni iure officia. Blanditiis aliquid ipsam cupiditate, velit asperiores, repellendus ipsa sapiente, culpa dicta est porro nihil corporis minima.";
        } else if (index == 2) {
            img.src = "img/graphic design/graphic-design5.jpg"
            text.innerHTML = "Lorem ipsum dolor sit amet dipisicing elit. Atque ni ducimus porro tem hic harum suscipit, officia eaque dicta ipsum asperiores, quae totam incidunt enim consequatur voluptatum ex quidem minima dolorum aspernatur corrupti accusamus quo ? Minima, deleniti, enim incidunt reprehenderit nostrum veniam delectus molestias neque.Explicabo sed repudiandae dicta sunt eaque dolore ipsa doloremquessumend ? Blanditiis aa architecto consectetur adipisicing elit. Quas dicta accusamus sed,voluptates voluptas recusandae cum sit in, error saepe esse mollitia accusantium laborum ipsum temporibus impedit! Quos, tempore amet";

        } else if (index == 3) {
            img.src = "img/graphic design/graphic-design2.jpg"
            text.innerHTML = "Dipisicing elit. Atque ni ducimus porro tem hic harum suscipit, officia eaque dicta ipsum asperiores, quae totam incidunt enim consequatur voluptatum ex quidem minima dolorum aspernatur corrupti accusamus quo ? Minima, deleniti, enim incidunt reprehenderit nostrum veniam delectus molestias neque.Explicabo sed repudiandae dicta sunt eaque dolore ipsa doloremquessumend ? Blanditiis aa architecto consectetur adipisicing elit. Quas dicta accusamus sed,voluptates voluptas recusandae cum sit in, error saepe esse mollitia accusantium laborum ipsum temporibus impedit! Quos, tempore amet";
        } else if (index == 4) {

            img.src = "img/web design/web-design3.jpg"
            text.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla molestias consectetur facilis possimus provident! Architecto, cumque! Blanditiis aspernatur officia ut eos dipisicing elit. Atque ni ducimus porro tem hic harum suscipit, officia eaque dicta ipsum asperiores, quae totam incidunt enim consequatur voluptatum ex quidem minima dolorum aspernatur corrupti accusamus quo ? Minima, deleniti, enim incidunt reprehenderit nostrum veniam delectus molestias neque.Explicabo sed repudiandae dicta sunt eaque dolore ipsa doloremquessumend ? Blanditiis aa architecto , qui ab esse error repudiandae in, inventore natus dicta?";
        } else if (index == 5) {
            img.src = "img/wordpress/wordpress1.jpg"
            text.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit nisi facere placeat maiores distinctio eos porro deleniti, delectus labore eveniet dolor. A fugiat, minima obcaecati placeat, corrupti quae nostrum rem quo aliquid non, consequuntur blanditiis incidunt iusto libero inventore similique magni iure officia. Blanditiis aliquid ipsam cupiditate, velit asperiores, repellendus ipsa sapiente, culpa dicta est porro nihil corporis minima.";
        }

    });
}


///OUR AMAZING WORK


const loadedPhoto = [
    {
        imgSrc: "img/graphic design/graphic-design1.jpg",
        category: 1
    },

    {
        imgSrc: "img/web design/web-design4.jpg",
        category: 2
    },

    {
        imgSrc: "img/landing page/landing-page1.jpg",
        category: 3
    },

    {
        imgSrc: "img/wordpress/wordpress8.jpg",
        category: 4

    },

    {
        imgSrc: "img/graphic design/graphic-design6.jpg",
        category: 1
    },

    {
        imgSrc: "img/wordpress/wordpress9.jpg",
        category: 4
    },

    {
        imgSrc: "img/web design/web-design1.jpg",
        category: 22
    },
    {
        imgSrc: "img/graphic design/graphic-design9.jpg",
        category: 1
    },
    {
        imgSrc: "img/landing page/landing-page3.jpg",
        category: 3
    },
    {
        imgSrc: "img/landing page/landing-page5.jpg",
        category: 3

    },
    {
        imgSrc: "img/web design/web-design7.jpg",
        category: 2
    },
    {
        imgSrc: "img/landing page/landing-page1.jpg",
        category: 3
    }]


const loadMore = () => {
    let items = [];

    for (let item of loadedPhoto) {
        items.push(`
            <div class="our-amazing-work-item category-${item.category}">
            <div class="hover">
                <div class="icon1"><i class="fas fa-link"></i></div>
                <div class="icon2"><i class="fas fa-search"></i></div>
                <h3 class="hover-h3-text">creative design</h3>
                <p class="hover-text">web design</p>
            </div>
             <img src="${item.imgSrc}" alt="#">

        </div>
            `);

    }

    $('.load1').css('display', 'none');

    $('.our--amazing-work-images').append(items);
}


$('.load1').on('click', loadMore);



$('.our--amazing-work-button').on('click', '.category-item', function (e) {
    if (!$(this).hasClass('active')) {
        $('.category-item.active').removeClass('active');
        $(this).addClass('active');
        const categoryNum = $(this).attr('data-category');

        if (categoryNum == '0') {
            $('.our-amazing-work-item').show();
        } else {
            $('.our-amazing-work-item').hide();
            $('.our-amazing-work-item.category-' + categoryNum).show();
        }
    }
})


//$('.breaking-news-title').hover(function(){$(this).innerHTML="Amazing Image Post"});

//SLIDER
$(function () {
    /* add active class */
    const btn_nav = $('.button-nav');
    const nav_about = $('.nav-about');

    const nextBtn = $('.next');
    const prevBTn = $('.prev');
    nextBtn.on('click', prevBTn, function (e) {
        $('.active').removeClass('active');
        $(this).addClass('active');
        $(prevBTn[$(this).index()]).addClass('active');
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 1200,
        cssEase: 'linear'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'linear'
    });


    // $('.next').on('click',function(){
    //     $('.sl-slide-nav').next();
    // })
    // $('.prev').on('click',function(){
    //     $('.sl-slide-nav').prev();
    // })
})