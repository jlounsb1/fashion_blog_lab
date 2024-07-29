import logo1 from './blog-image-1.jpg';
import logo2 from './/blog-image-2.jpg';

function MainPage() {
    return (
        <>
        <main>
        <article>
            <time datetime="2020-11-12">12 November 2020</time>
            <h2>On the Street in Brooklyn</h2>
            <img alt="" src={logo1} />
            <p class="articlecontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, accusantium ea magnam quisquam dolore quis, voluptatibus exercitationem facilis illum tempore voluptatum inventore atque eaque sunt eveniet molestiae quod a sequi soluta maiores harum suscipit ab consequuntur. Quod esse eaque libero aspernatur, eveniet provident asperiores distinctio, cupiditate quam ratione placeat dolorum? Accusantium, iste, accusamus esse facilis, obcaecati dolor vel voluptatum distinctio eligendi delectus corrupti aperiam? Pariatur sint fugiat voluptates architecto cum expedita tenetur, error, inventore fuga impedit dolorem odit, saepe ex quisquam officiis. At, natus. Dolorem autem corrupti eos aspernatur, suscipit inventore quisquam sequi, laboriosam quidem voluptatem iure voluptates fugit voluptate!</p>
                <aside>
                    <h4>Continues ...</h4>
                </aside>
            <hr />
        </article>
        <article>
            <time datetime="2020-11-">11 November 2020</time>
            <h2>Vintage in Vogue</h2>
            <img alt="" src={logo2} />
            <p class="articlecontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus aliquid totam dolorem veritatis fuga voluptas soluta consequatur atque libero animi non illo amet quas, quidem corrupti nihil itaque minus cumque rerum commodi sapiente dolore eum. Pariatur repellendus, ea enim nam, odit debitis laborum iusto ratione voluptatum, et vel reiciendis adipisci a explicabo accusantium similique! Perspiciatis autem necessitatibus reprehenderit ullam et alias deserunt itaque quibusdam adipisci pariatur eum magnam perferendis vero, nulla magni amet delectus, hic expedita dolorum est repudiandae deleniti! Magnam sunt facilis iste ullam corporis totam doloribus possimus libero, odit debitis explicabo placeat quis aut culpa assumenda velit.</p>
                <aside>
                    <h4>Continues ...</h4>
                </aside>
            <hr />
        </article>
    </main>
        </>
    )
}


export default MainPage;
