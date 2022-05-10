function showSelectMenu(){
    let radio = document.getElementsByClassName('form-check');
    let selectMenu = document.getElementsByClassName('form-select');

    for (let i = 0; i < radio.length; i++){
        radio[i].addEventListener('click', function() {
            /* Reset select menu */
            for (let j = 0; j < selectMenu.length; j++){
                selectMenu[j].classList.add('hidden');
            }
            let menuName=[];
            menuName.push(this.innerText);
            let strMenuName = menuName.toString();
            let select = document.getElementsByClassName(strMenuName);
            /*  Show Select Menu */
            if(strMenuName.length > 0){
                for (let k = 0; k < select.length; k++){             
                    select[k].classList.remove('hidden');
                }
            }
        })
    } 
}

function hideSelectMenu(){
    let select = document.getElementsByClassName('form-select');

    for (let i = 0; i < select.length; i++){
            /*  listen "change" on select menu */
        select[i].addEventListener('change', function() {
            for (let j = 0; j < select.length; j++){             
                select[j].classList.add('hidden');
            }
        })
    }
}
