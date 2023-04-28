let allOrders = document.querySelector("#allOrders");
let countInPage = document.querySelector("#countInPage");
let paginationContainer = document.querySelector("#paginationContainer");
let currentPage = 1;

allOrders.addEventListener("click", function (e){
    listsContainer.classList.remove("d-none");
    filesContainer.classList.add("d-none")
    nameService.innerText = "Усі замовлення"
    tableTitle.innerHTML = `<th scope="col">Номер(id)</th>
                            <th scope="col">Ким(userId)</th>
                            <th scope="col">Статус</th>
                            <th scope="col">Виконавець(userId)</th>
                            <th scope="col">Коли замовили</th>
                            <th scope="col">Файли</th>
                            <th scope="col"></th>
                            <th scope="col"></th>`

    getData("Зробленні замовлення")
})

function delOrder(target) {
    // console.log(target.getAttribute("sesId"));
    // sendData("/getSessies", "DELETE", JSON.stringify(target.getAttribute("sesId"))).then(e => {
    //     console.log(e);
    //     if(e.toString() === target.getAttribute("sesId").toString()){
    //         target.parentElement.parentElement.remove()
    //     }
    // })
}

function showData(target) {
    // console.log(target.getAttribute("sesId"));
    // sendData("/getSessies", "DELETE", JSON.stringify(target.getAttribute("sesId"))).then(e => {
    //     console.log(e);
    //     if(e.toString() === target.getAttribute("sesId").toString()){
    //         target.parentElement.parentElement.remove()
    //     }
    // })
}

function doProcessing(target) {
    // console.log(target.getAttribute("sesId"));
    // sendData("/getSessies", "DELETE", JSON.stringify(target.getAttribute("sesId"))).then(e => {
    //     console.log(e);
    //     if(e.toString() === target.getAttribute("sesId").toString()){
    //         target.parentElement.parentElement.remove()
    //     }
    // })
}

function showUser(target) {
    // console.log(target.getAttribute("sesId"));
    // sendData("/getSessies", "DELETE", JSON.stringify(target.getAttribute("sesId"))).then(e => {
    //     console.log(e);
    //     if(e.toString() === target.getAttribute("sesId").toString()){
    //         target.parentElement.parentElement.remove()
    //     }
    // })
}

function renderOrdersItem(res){
    res.data.data.forEach(o => {
        let tr = document.createElement("tr");
        tr.classList.add("trColumn");
        tr.classList.add("color");
        let innerHTML = ""
        if(o.executorId === undefined){
            innerHTML = `<td><div class="btn btn-sm">${o.id}</div></td>
                            <td>
                                <button class="btn btn-sm btn-light" itemId="${o.id}" onclick=showUser(event.target)>${o.userid}</button>
                            </td>
                            <td><div class="btn btn-sm">${o.status}</div></td>
                            <td>
                                <button class="btn btn-sm btn-light" itemId="${o.id}" onclick=doProcessing(event.target)>Виконувати</button>
                            </td>
                            <td><div class="btn btn-sm">${createTime(o.timeCreate)}</div></td>
                            <td>
                                <button class="btn btn-sm" itemId="${o.id}" onclick=showData(event.target)>Докладніше</button>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-danger" itemId="${o.id}" onclick=delOrder(event.target)>X</button>
                            </td>         
                            `;
        } else {
            innerHTML = `<td><div class="btn btn-sm">${o.id}</div></td>
                            <td>
                                <button class="btn btn-sm btn-light" itemId="${o.id}" onclick=showUser(event.target)>${o.userid}</button>
                            </td>
                            <td><div class="btn btn-sm">${o.status}</div></td>
                            <td><div class="btn btn-sm">${o.executorId}</div></td>
                            <td><div class="btn btn-sm">${createTime(o.timeCreate)}</div></td>
                            <td>
                                <button class="btn btn-sm" itemId="${o.id}" onclick=showData(event.target)>Докладніше</button>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-danger" itemId="${o.id}" onclick=delOrder(event.target)>X</button>
                            </td>         
                            `;
        }
        tr.innerHTML = innerHTML;
        tableBody.append(tr);
    });
}