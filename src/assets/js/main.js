function showSelectMenu(){
    let radio = document.getElementsByClassName('form-check');

    for (let i = 0; i < radio.length; i++){
        radio[i].addEventListener('click', function() {
            let menuName=[];
            menuName.push(this.innerText);
            let strMenuName = menuName.toString();
            let select = document.getElementsByClassName(strMenuName);

            if(strMenuName.length > 0){
                for (let j = 0; j < select.length; j++){             
                    select[j].classList.remove('hidden');
                }
            }
            
            /* if(menuName.length > 1){
                for (let k = 0; k < select.length; k++){
                    select[k].classList.add('hidden');
                }
            } */
        })
    } 
}

function hideSelectMenu(){
    let select = document.getElementsByClassName('form-select');

    for (let i = 0; i < select.length; i++){
        select[i].addEventListener('change', function() {
            for (let j = 0; j < select.length; j++){             
                select[j].classList.add('hidden');
            }
        })
    }
}
