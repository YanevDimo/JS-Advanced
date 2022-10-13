window.addEventListener("load", solve);

function solve() {
    const input = {
        title: document.getElementById("post-title"),
        category: document.getElementById("post-category"),
        content: document.getElementById("post-content"),
    };
    const list = {
        review: document.getElementById("review-list"),
        published: document.getElementById("published-list"),
    };

    document.getElementById("publish-btn").addEventListener("click", publish);
    document.getElementById("clear-btn").addEventListener("click", clear);

    console.log(input);
    console.log(list);

    function publish(event) {
        event.preventDefault();

        // read input fields
        const title = input.title.value;
        const category = input.category.value;
        const content = input.content.value;

        // validate input
        if (title === "" || category === "" || content === "") {
            return;
        }
        // create list item -
        const li = document.createElement("li");
        li.className = "repost";
        li.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>;
    <button class="action-btn approve">Approve</button>`;

        //add functionality to buttons
        const editBtn = li.querySelector(".edit");
        const approveBtn = li.querySelector(".approve")
        approveBtn.addEventListener("click", approve);
        editBtn.addEventListener("click", edit);

        // append to first list
        list.review.appendChild(li);

        //clear input fields
        input.title.value = "";
        input.category.value = "";
        input.content.value = "";

        function edit() {
            // populate input fields with values
            input.title.value = title;
            input.category.value = category;
            input.content.value = content;

            // remove list item list
            li.remove();
        }
        function approve() {

            // move list item from list to second list
            list.published.appendChild(li);

            // remove action button
            editBtn.remove();
            approveBtn.remove();

        }
    }

    function clear() {
        // set  second list to HTML to empty string

        list.published.innerHTML = '';
    }
}
