async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${url}: ${response.status} ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}

function createSliderElement(banner) {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';

    const img = document.createElement('img');
    img.src = banner.imagen;

    const a = document.createElement('a');
    a.href = banner.enlace;
    a.appendChild(img);

    swiperSlide.appendChild(a);
    return swiperSlide;
}

function appendSlidersToContainer(data, idelement, s_slides_m, s_slides_d) {
    const contain = document.querySelector('#' + idelement);

    if (!contain) {
        console.error(`Element with ID ${idelement} not found.`);
        return;
    }

    data.content.sort((a, b) => a.orden - b.orden);

    data.content.forEach((banner) => {
        if (banner.status && banner.enlace) {
            const swiperSlide = createSliderElement(banner);
            contain.appendChild(swiperSlide);
        }
    });

    const swiperParams = {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            320: {
                slidesPerView: s_slides_m,
            },
            480: {
                slidesPerView: s_slides_m,
            },
            640: {
                slidesPerView: s_slides_d,
            },
            1024: {
                slidesPerView: s_slides_d,
            },
        },
        on: {
            init() {},
        },
    };

    Object.assign(contain, swiperParams);
    contain.initialize();
}

async function initializeSliders() {
    try {
        const sliderKeysList = document.querySelectorAll('[data-brick="slider"]');
        for (const item of sliderKeysList) {
            const idelement = item.id;
            const s_slides_m = item.getAttribute('slides_m');
            const s_slides_d = item.getAttribute('slides_d');
            const url = `http://localhost:3002/stores-crece/ideasprint.com.pe/bricks/slider/brick-slider-${idelement}.json`;

            const data = await fetchData(url);
            appendSlidersToContainer(data, idelement, s_slides_m, s_slides_d);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the initializeSliders function to start loading the sliders asynchronously.
initializeSliders();
