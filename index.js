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
    <div class="container blogs" id="${blog.id}" >
        <img class="blogImg" src="${blog.imageSrc}" alt="">
        <div class="content" >
            <h1>${blog.title}</h1>
            <hr>
            <p>Industry:  <b> Events and Tourism </b></p>
            <p>Skills: <b>  Figma, PHP, Angular, TypeScript, RXJS, MYSQL, Firebase, Postman </b></p>

            <div class="btnSec" >
                <button>Read More</button>
                <a href="">Live view</a><img src="arrow_outward.png" alt="">
            </div>
        </div>
    </div>
            `;
    blogs.innerHTML += profileHTML;
});