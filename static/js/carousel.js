const carousel = document.querySelector(".carousel-inner");

var feedbacks = [
    {
        title: "Need an Instagram Scraper",
        rate: 5.0,
        date: "June 1, 2022",
        feedback: "Ekky is great to work with, reliable, and very helpful. He is also very knowledgeable and creative in his approach. Will work with him again in the future.",
    },
    {
        title: "Basic Website Scraping in Python",
        rate: 5.0,
        date: "May 4, 2022",
        feedback: "Ekky was excellent - he completed what I needed done in under a day and revised the code a couple of times promptly when I spotted a couple of issues. Would definitely recommend.",
    },
    {
        title: "IMDb Pro Webscraper Needed",
        rate: 5.0,
        date: "April 28, 2022",
        feedback: "Ekky gave all the data I needed exactly how I needed it. It was also easy to work with on my own after the handoff.",
    },
    {
        title: "Python Script Needed for PNG manipulation",
        rate: 5.0,
        date: "April 20, 2022",
        feedback: "It was a pleasure working with this freelancer. He was able to fulfill all of my requirements.",
    },
    {
        title: "Generate 10K NFT artworks based on layers",
        rate: 5.0,
        date: "March 24, 2022",
        feedback: "Beautiful work! What a rockstar Ekky is. I'm beyond satisfied with the process and with the result. I will definitely work with him again!",
    },
    {
        title: "Extract information from website with environment data",
        rate: 5.0,
        date: "March 3, 2022",
        feedback: "It was real pleasure working with Ekky! Highly recommended! Thank you!",
    },
    {
        title: "Scrape Fortune 500 Rankings",
        rate: 5.0,
        date: "February 13, 2022",
        feedback: "Ekky did a great job",
    },
    {
        title: "Python Expert for recursive string parse function",
        rate: 5.0,
        date: "February 12, 2022",
        feedback: "Working with Ekky was great, I would recommend him to anyone considering his proposal. I'll reach out again if anything similar is needed, thanks!",
    },
    {
        title: "Parse hub expert/Data scraper to grab details from single HTML table with next pages",
        rate: 5.0,
        date: "August 24, 2021",
        feedback:
            "I hired Ekky to help me with scraping a table of 20,000 websites using Python. He did exactly what I asked for and he did it super fast. I then hired him again to create custom Python scripts going through the websites and gather data. He delivered incredible results and went above and beyond. I highly recommend him for any Python work!",
    },
    {
        title: "Scrape order lines from pdf invoices",
        rate: 5.0,
        date: "August 4, 2021",
        feedback: "Good communication and the end result was very well structured",
    },
    {
        title: "Automated Bot Script For High Traffic Website",
        rate: 5.0,
        date: "July 29, 2021",
        feedback: "It was a pleasure to work with Ekky. He accepted my project and completed it in least time possible and that too with precision.",
    },
    {
        title: "Good communication and the end result was very well structured",
        rate: 5.0,
        date: "March 27, 2021",
        feedback: "Mr. Ekky Armandi was always responsive and delivered exactly what I promised in a matter of few hours. Thank you Mr. Ekky Armandi !",
    },
    {
        title: "Python script required",
        rate: 5.0,
        date: "February 28, 2021",
        feedback: "Proactive friendly freelancer. Quick turnaround of work.",
    },
    {
        title: "Python help",
        rate: 5.0,
        date: "February 7, 2021",
        feedback: "Ekky delivered good work on helping me with python and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong.",
    },
    {
        title: "Infographic Needed",
        rate: 5.0,
        date: "January 14, 2021",
        feedback: "Satisfied with the work. Delivered on time.",
    },
];

feedbacks.forEach((item) => {
    carousel.innerHTML += `<div class="carousel-item">
                                <div class="row justify-content-center">
                                    <div class="col-6 text-start">
                                        <a class="text-decoration-none text-light" href="https://www.upwork.com/freelancers/ekkyarmandi" target="_blank">
                                            <small>${item.date}</small>
                                            <h5>${item.title}</h5>
                                            <p class="fs-5">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <span>(${parseFloat(item.rate).toFixed(1)})</span>
                                            </p>
                                            <p style="text-align: justify">
                                                <i>"${item.feedback}"</i>
                                                <p class="fw-light text-end fs-light text-secondary"><i></i></p>
                                                <figcaption class="blockquote-footer text-end">Upwork's Client</figcaption>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>`;
});
