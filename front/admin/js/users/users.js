let users = document.querySelector("#users");

users.addEventListener("click", function (e){
    listsContainer.classList.remove("d-none");
    filesContainer.classList.add("d-none")
    nameService.innerText = "Користувачі"
    tableTitle.innerHTML = `<th scope="col">ID</th>
                            <th scope="col">Ім'я</th>
                            <th scope="col">@маіл</th>
                            <th scope="col">Повноваження</th>
                            <th scope="col">Телефон</th>
                            <th scope="col">Мессенджер</th>
                            <th scope="col"></th>
                            <th scope="col"></th>`

    getData("Користувачі")
})

function showMore(target) {
    // sendData("/getUsers", "DELETE", JSON.stringify(target.getAttribute("sesId"))).then(e => {
    //     console.log(e);
    //     if(e.toString() === target.getAttribute("sesId").toString()){
    //         target.parentElement.parentElement.remove()
    //     }
    // })
}

// countInPage.addEventListener("change", function (e){
//     getData()
// })

function renderUsersItem(res){
    res.data.data.forEach(o => {
        let tr = document.createElement("tr");
        tr.classList.add("trColumn");
        tr.classList.add("color");
        let innerHTML = `<td><div class="btn">${o.id}</div></td>
                            <td><div class="btn">${o.name}</div></td>
                            <td><div class="btn">${o.mail}</div></td>
                            <td><div class="btn">${o.role}</div></td>
                            <td><div class="btn">${o.phone}</div></td>
                            <td><div class="btn">${o.messenger}</div></td>
                            <td>
                                <button class="btn btn-danger" itemId="${o.id}" onclick=showMore(event.target)>Докладніше</button>
                            </td>         
                            `;
        tr.innerHTML = innerHTML;
        tableBody.append(tr);
    });
}