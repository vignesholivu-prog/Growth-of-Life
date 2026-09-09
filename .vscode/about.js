/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {

        // Close other FAQ items
        faqItems.forEach(function (otherItem) {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;
            }

        });


        // Open / close selected FAQ
        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});



/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }

    counterStarted = true;


    counters.forEach(function (counter) {

        const target =
            Number(counter.getAttribute("data-target"));

        let current = 0;

        const increment =
            target / 60;


        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }


        updateCounter();

    });

}



/* =====================================================
   START COUNTER WHEN STATS ARE VISIBLE
===================================================== */

const statsSection =
    document.querySelector(".stats-section");


const observer =
    new IntersectionObserver(

        function (entries) {

            if (entries[0].isIntersecting) {

                startCounters();

            }

        },

        {
            threshold: 0.4
        }

    );


observer.observe(statsSection);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".value-card, .why-card, .purpose-card, .journey-item, .event-card"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});