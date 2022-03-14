(function(){
    let modal = document.querySelector('.addEmployee-modal')
    let btnAddEmployee = document.querySelector("#btnAddEmployee")
    let closeModal = document.querySelector("#closeModal")
 
    console.log("Started")
    btnAddEmployee.addEventListener('click', function(){
        modal.style.display = 'block';
    })
    closeModal.addEventListener('click', function(){
     modal.style.display = 'none';
 })
 
 window.addEventListener('click', function(e){
     if(e.target == modal)
     {
         modal.style.display = 'none';
     }
 })
 
 })()