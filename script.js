// CreateLK Website Script


// Website loading message
console.log("CreateLK Website Loaded Successfully");


// Smooth scrolling for page links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Simple order button tracking

function orderMessage(){

    alert(
        "Thank you for choosing CreateLK. We will contact you soon."
    );

}