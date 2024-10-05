
//Dynamic rendering of the carousel cards
//Listeners for the carousel cards;
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#carouselCardContainer');
    const targetHeading = document.querySelector('.fw-bold.text-white.mb-5'); // The heading element in the target section
    const targetText = document.querySelector('.text-white[style="line-height: 2.8;"]'); // The paragraph element in the target section

    const carouselCards = [
        {
            id: 1,
            title: 'Membership',
            subtitle: 'Our membership plan provides care where you are, with not having physical locations, we are able to transfer the cost savings to you as a patient.',
            icon: '<box-icon name=health></box-icon>'
        },
        {
            id: 2,
            title: 'Independent',
            subtitle: 'As an independent practice, we are not incentivized by volume or reimbursements from insurance; therefore, we can spend the appropriate time to ensure we provide a personalized care experience for our members.',
            icon: '<box-icon name=donate-heart></box-icon>'
        },
        {
            id: 3,
            title: 'Our founding team',
            subtitle: 'We are founded by a diverse team of clinical and operational experts focused on health equity, addressing the social determinants of health and easing access to high-quality primary care for all.',
            icon: '<box-icon name=body></box-icon>'
        },
        {
            id: 4,
            title: 'Urgent care',
            subtitle: 'Did you wake up not feeling well? Twist an ankle? Need a COVID test? We do it all. It can take several hours to get to and be seen in an Urgent Care. Call us before packing up and heading out of your home to sit in a waiting room along with others who may not be feeling well.',
            icon: '<box-icon name=home-heart></box-icon>'
        },
        {
            id: 5,
            title: 'Primary care',
            subtitle: 'We are a group of primary care providers who share a passion for a human centric patient experience. We are skilled at caring for the full spectrum of wellness and illness for you and your family from starting the ages of 8 and up.',
            icon: '<box-icon name=heart></box-icon>'
        }
    ];

    let minIdx = 0;
    let maxIdx = carouselCards.length
    let selected = carouselCards[0]

    let htmlString = '';
    carouselCards.map((item, index) => {
        let cardStringHtml = `
            <div class="col-8 card-clickable ${index === 0 ? 'active' : ''} mb-3" data-aos="fade-up" data-index="${index}" style="cursor: pointer; height: 100px;">
                <div class="row align-items-center mb-3" style="border-radius:5px;">
                    <div class="col-auto text-center">
                        <div style="color:white; height 80px; width: 80px;">
                           ${item.icon}
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h3 class="fw-bold mt-3 text-white">
                            ${item.title}</h3>
                        <p class="text-white" style="line-height:1.8;font-size: 11px; max-height:41px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${item.subtitle}</p>
                    </div>
                </div>
            </div>
        `;

        htmlString += cardStringHtml;
    });

    container.innerHTML = htmlString;

    // Automatically load the "Membership" card's content into the target area
    targetHeading.innerHTML = carouselCards[0].title; // Set Membership title
    targetText.innerHTML = carouselCards[0].subtitle; // Set Membership subtitle

    // Add click event listeners to each card
    const clickableCards = document.querySelectorAll('.card-clickable');
    clickableCards.forEach((card) => {
        card.addEventListener('click', function () {
            const index = card.getAttribute('data-index');
            const selectedCard = carouselCards[index];

            // Remove the active class from all cards
            clickableCards.forEach((c) => c.classList.remove('active'));

            // Add the active class to the clicked card
            card.classList.add('active');

            // Update the target content with the selected card's title and subtitle
            targetHeading.innerHTML = selectedCard.title;
            targetText.innerHTML = selectedCard.subtitle;
        });
    });

    const backButton = document.getElementById('backBtn');
    backButton.addEventListener('click', function () {

        minIdx--
        if (minIdx < 0) {
            minIdx = maxIdx
            selected = carouselCards[minIdx]
        }
        selected = carouselCards[minIdx]

        // Update the target content with the selected card's title and subtitle
        targetHeading.innerHTML = selected.title;
        targetText.innerHTML = selected.subtitle;

    })

    const nextButton = document.getElementById('nextBtn');

    nextButton.addEventListener('click', function () {
        console.log(selected)
        minIdx++
        if (minIdx > maxIdx) {
            minIdx = 0
            selected = carouselCards[minIdx]
        }
        selected = carouselCards[minIdx]
        // Update the target content with the selected card's title and subtitle
        targetHeading.innerHTML = selected.title;
        targetText.innerHTML = selected.subtitle;
    })

});
