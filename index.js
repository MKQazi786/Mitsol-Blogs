const BlogsProfieContent = [
    {
        id: 1,
        imageSrc:"Rectangle 2.png",
        title: "Pet Golu: E-commerce Platform For pet Care Essentials"
    },
    {
        id: 2,
        imageSrc: "Rectangle 2.png",
        title: "Pet Golu: E-commerce Platform For pet Care Essentials"
    },
    {
        id: 3,
        imageSrc: "Rectangle 2.png",
        title: "Pet Golu: E-commerce Platform For pet Care Essentials"
    },
]

const blogs = document.getElementById('blogsProfile');

BlogsProfieContent.map(blog => {
    const profileHTML = `
    <div class="container blogs"> 
    <div class="row" id="${blog.id}">
            <img class="blogImg img-fluid col-12 col-md-6" src="${blog.imageSrc}" alt="">
        <div style="padding-left:0rem" class="col-12 col-md-6">
            <div class="content">
                <h1>${blog.title}</h1>
                <hr>
                <p>Industry: <b>Events and Tourism</b></p>
                <p>Skills: <b>Figma, PHP, Angular, TypeScript, RXJS, MYSQL, Firebase, Postman</b></p>
                <div class="btnSec">
                    <button>Read More</button>
                    <a href="">Live view <img src="arrow_outward.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</div>

            `;
    blogs.innerHTML += profileHTML;
});