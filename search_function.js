let inpt = document.getElementById(`searched_item`)

let cur_str = "";

inpt.addEventListener(`keyup`, (e) => {
    
    if(e.keyCode === 13){
        let str = inpt.value
        let data = JSON.parse(localStorage.getItem(`all_items`))
            let found_data = []
            for(let i = 0; i < data.length; i++){
                if(str == data[i].name){
                    found_data.push(data[i])
                    displayData(found_data)
                    break;
                }
            }
    }

    else if(e.keyCode === 32){
        console.log(cur_str);
        cur_str = "";
    }
    
    else{
        cur_str += e;
    }
})



const displayData = (data) => {
    let main_container = document.getElementById(`main_container`)
    main_container.style.display = "none"
    let popup_container = document.getElementById(`popup_container`)
    popup_container.style.display = "flex"
    data.forEach((item) => {
        let div = document.createElement(`div`)

        let img = document.createElement(`img`)
        img.src = item.image
    
        let h3 = document.createElement(`p`)
        h3.innerHTML = `<b>${item.name}<b>`
        h3.style.fontSize = "18px"
    
        let p1 = document.createElement(`p`)
        p1.innerHTML = `<b>${item.price}</b>`
    
        let p2 = document.createElement(`p`)
        p2.textContent = item.description
        p2.style.fontSize = "15px"
        p2.style.color = "gray"

        div.append(img, h3, p1, p2)
        popup_container.append(div)

    })
}