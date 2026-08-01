/* ==================================
   Service Category Selector
================================== */


function loadServices() {


    const category = document.getElementById("category");
    const service = document.getElementById("service");


    if (!category || !service) {
        return;
    }


    let services = [];


    switch(category.value) {


        case "Design":

            services = [

                "Logo Design",
                "Poster Design",
                "Banner Design",
                "Business Card Design",
                "Social Media Post Design",
                "Flyer Design"

            ];

        break;



        case "Documents":

            services = [

                "CV / Resume Creation",
                "Cover Letter Writing",
                "Typing Services",
                "PDF Editing",
                "Document Formatting",
                "Data Entry"

            ];

        break;



        case "Website":

            services = [

                "Business Website",
                "Landing Page",
                "Website Updates",
                "Domain Setup Assistance",
                "GitHub Pages Deployment",
                "Cloudflare Domain Setup"

            ];

        break;



        case "Digital":

            services = [

                "Online Form Creation",
                "QR Code Creation",
                "Presentation Design",
                "Spreadsheet Services",
                "Image Editing",
                "Background Removal"

            ];

        break;



        case "Other":

            services = [

                "Translation Services",
                "Content Writing",
                "Business Profile Creation",
                "Email Signature Design",
                "Digital Invitations",
                "Custom Digital Solutions"

            ];

        break;


    }



    service.innerHTML = 
    '<option value="">Choose Service</option>';



    services.forEach(function(item){


        let option = document.createElement("option");

        option.value = item;

        option.textContent = item;

        service.appendChild(option);


    });


}





/* ==================================
   WhatsApp Order System
================================== */


const orderForm = document.getElementById("orderForm");


if(orderForm){


orderForm.addEventListener("submit", function(event){


    event.preventDefault();



    let name =
    document.getElementById("name").value;



    let phone =
    document.getElementById("phone").value;



    let service =
    document.getElementById("service").value;



    let description =
    document.getElementById("description").value;



    let reference =
    document.getElementById("referenceImage").files.length;



    let payment =
    document.getElementById("paymentSlip").files.length;





    if(payment === 0){

        alert(
        "Please upload your payment slip before submitting."
        );

        return;

    }





    let message =

`New Order Request

Name:
${name}

Customer WhatsApp:
${phone}

Service:
${service}

Description:
${description}


Reference Image:
${reference ? "Provided" : "Not Provided"}


Payment Slip:
Provided


Please confirm my order.
`;






    let whatsappNumber =
    "94771190395";



    let whatsappURL =

    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);





    window.open(
        whatsappURL,
        "_blank"
    );



});


}