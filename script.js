document.addEventListener("DOMContentLoaded", function(){

    // PAGE NAVIGATION
    window.showSection = function(section){
        let pages = document.querySelectorAll(".page");
        pages.forEach(function(page){
            page.style.display = "none";
        });
        let activePage = document.getElementById(section);
        if(activePage){
            activePage.style.display = "block";
        }
    }

    // Show home page by default
    showSection("home");

    // LAB DATABASE
    let labs = [
        {
            name:"Ace-Biomed Laboratories",
            test:"general diagnostics",
            price:"₦varies",
            location:"No 99, New-Lagos Road, Benin City, Edo State",
            phone:["08178119012","08178119013","08178119015"],
            email:"clientservice@acebiomedlab.com.ng",
            website:"https://www.acebiomedlab.com.ng",
            mapEmbed:"https://www.google.com/maps/embed?pb=!1m18!...replace_with_embed_link..." 
        },
        {
            name:"Alpha Diagnostics", test:"malaria", price:"₦3500", location:"Ogun"
        }
    ];

    // LAB SEARCH
    window.findLabs = function(){
        let input = document.getElementById("searchInput").value.toLowerCase();
        let results = "";
        labs.forEach(function(lab){
            if(lab.test && lab.test.toLowerCase().includes(input) || lab.name.toLowerCase().includes(input)){
                results += `
                <div class="lab-card">
                    <h3>${lab.name}</h3>
                    <p><b>Tests:</b> ${lab.test || "Various"}</p>
                    <p><b>Price:</b> ${lab.price || "Varies"}</p>
                    <p><b>Location:</b> ${lab.location || "Not specified"}</p>
                    ${lab.phone ? "<p><b>Phone:</b> " + lab.phone.join(", ") + "</p>" : ""}
                    ${lab.email ? "<p><b>Email:</b> " + lab.email + "</p>" : ""}
                    ${lab.website ? "<p><b>Website:</b> <a href='" + lab.website + "' target='_blank'>" + lab.website + "</a></p>" : ""}
                    ${lab.mapEmbed ? "<iframe src='" + lab.mapEmbed + "' width='100%' height='200' style='border:0;' allowfullscreen='' loading='lazy'></iframe>" : ""}
                    <a href='https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(lab.location) + "' target='_blank'>Get Directions</a>
                </div>
                `;
            }
        });
        if(results === "") results="<p>No labs found</p>";
        document.getElementById("labResults").innerHTML = results;
    }

    // UPLOAD LAB RESULT
    window.uploadReport = function(){
        let file = document.getElementById("fileUpload").files[0];
        if(file){
            let li = document.createElement("li");
            li.textContent = file.name;
            document.getElementById("recordList").appendChild(li);
            document.getElementById("uploadMessage").innerText="Upload successful!";
        } else {
            document.getElementById("uploadMessage").innerText="Select a file";
        }
    }

});
