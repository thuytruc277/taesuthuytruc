
//fullpage 초기화
$(document).ready(function () {
    $('#fullpage').fullpage({
        responsiveWidth: 1024,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Welcome', 'Invitation', 'About us', 'Memories', 'Location', 'Wedding Gift'],
        showActiveTooltip: true,//để chữ hiện lên thì đổi false thành true
    });

    // Thay đổi màu sắc cho từng tooltip
    $('.fp-tooltip').eq(0).css('color', '#ffb6b6'); // Welcome
    $('.fp-tooltip').eq(1).css('color', 'white'); // Invitation
    $('.fp-tooltip').eq(2).css('color', '#ffb6b6'); // About us
    $('.fp-tooltip').eq(3).css('color', '#ffb6b6'); // Memories
    $('.fp-tooltip').eq(4).css('color', '#ffb6b6'); // Location
    $('.fp-tooltip').eq(5).css('color', '#ffb6b6'); // Wedding Gift
});



/* 2 - Invitation slide */
const invi_list = new Swiper('.invi_list', {
    effect: 'creative', // Hiệu ứng sáng tạo
    loop: true,
    autoplay: {
        delay: 3000, // Chuyển ảnh mỗi 3 giây
        disableOnInteraction: false,
    },
    speed: 1500, // Tốc độ chuyển tiếp
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500], // Dịch chuyển sang trái
        },
        next: {
            translate: ['120%', 0, -500], // Dịch chuyển sang phải
        },
    },
});



/* 3 - Story slide */
const story_txt_list = new Swiper('.story_txt_list', {
    loop: true,
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },

});

const story_img_list = new Swiper('.story_img_list', {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
});


/* nhóm 2 slide ở trên để cùng chạy */
story_txt_list.controller.control = story_img_list;
story_img_list.controller.control = story_txt_list;





/* SECTION 4 - MEMORIES slide */
const mem_list = new Swiper('.mem_list', {
    centeredSlides: true, //활성화된 slide가 가운데
    loop: true,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    //add more 반응형 slide option 
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: { //768px 이상에서 
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
const slides = document.querySelectorAll('.mem_list .swiper-slide img');
slides.forEach((img) => {
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
});



/* footer section */
document.querySelectorAll("#footer .account button").forEach((button) => {
    button.addEventListener("click", () => {
        const dl = button.nextElementSibling; // Chọn <dl> trong cùng div
        const allDl = document.querySelectorAll("#footer .account dl"); // Tất cả <dl>

        // Ẩn tất cả các <dl> trước
        allDl.forEach((item) => {
            if (item !== dl) {
                item.classList.remove("active");
            }
        });

        // Bật/tắt lớp active cho <dl> hiện tại
        dl.classList.toggle("active");
    });
});