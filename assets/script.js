const recipes = [];
const searchButton = document.getElementById("searchButton");
const addButton = document.querySelector('.addButton');
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

//returns random val 1 time(s)
function randVal(){
    for (let i=0;i<1;i++){
        var val = Math.floor(Math.random()*9); //rand val = 9
        return val;
    }
}
//assigns function to clicking add
addButton.addEventListener('click', function(){randVal()});
page1.textContent = "Molestiae omnis nesciunt earum repudiandae enim blanditiis. Non sed ad quis itaque cumque accusamus corrupti. Fugiat repudiandae dolor voluptatem aut. Inventore id recusandae et est dolore sequi recusandae. Asperiores quasi dolorem nemo voluptas asperiores necessitatibus. Saepe laboriosam error nemo saepe maiores eum velit.Aut et perspiciatis velit et. Sunt fugit ullam iste inventore nisi. Rem sunt aut consequatur voluptate ipsa incidunt labore numquam. Autem adipisci nemo perspiciatis at dolorem. Voluptates autem assumenda voluptatem minus alias et voluptas laudantium. Modi molestiae aut sapiente sit.Molestias culpa consectetur et temporibus ipsam ipsam. Reprehenderit eius harum vel. Omnis modi nesciunt assumenda quia. Vel nobis dolore consequatur ipsum ullam. Beatae sint perspiciatis necessitatibus ullam odit ipsa omnis. Placeat explicabo vitae ut odit blanditiis nesciunt.Cupiditate delectus quam ut molestiae dolore nisi cupiditate velit. Sunt doloribus reiciendis a temporibus doloremque libero occaecati. Quisquam ad et ullam et ad corrupti. A vitae repudiandae ad et dolores facilis.Hic consequatur ullam qui dolorum doloremque quisquam. Commodi rerum ut voluptatem similique asperiores amet vitae. A id placeat ad ut atque et totam qui. Eligendi quia nihil molestiae minima ab laboriosam explicabo nemo. Sint recusandae odit at expedita ratione sed.";
