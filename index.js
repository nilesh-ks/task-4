(function(){
    let modal = document.querySelector('.addEmployee-modal')
    let btnAddEmployee = document.querySelector("#btnAddEmployee")
    let closeModal = document.querySelector("#closeModal")
    let btnModalAddEmployee = document.querySelector('#btnModalAddEmployee')
    let container = document.querySelector('.list-view')
    var firstName = ""
    var lastName = ""
    let divFolder=""
 
 //    console.log(firstName)
 //    console.log("Started")
 
    //Add Employee Button
    btnAddEmployee.addEventListener('click', function(){
        modal.style.display = 'block';

 
        let divFolderTemplate = templates.content.querySelector(".employee-view")
         divFolder = document.importNode(divFolderTemplate, true)
 
         let divName = divFolder.querySelector("[purpose=name]")
         divName.innerHTML = firstName + " " + lastName
         //container.appendChild(divFolder)
        console.log(firstName + " in btnAddEmployee");
    })

    //Add Employee Confirmation
    btnModalAddEmployee.addEventListener('click', function(){
        //first name
        const name1 = document.getElementById('first-name').value;
        //last name
        const name2 = document.getElementById('last-name').value;
        //job-title
        const job = document.getElementById('job-title').value;
        //department
        const dept = document.getElementById('department').value;

        console.log("Hi " + name1 + " " + job + " " + dept)
        
        if(name1!=null)
        {
            firstName=name1;
            console.log(firstName)
        }else
        {
            lastName = null
        }
    
        if(name2!=null)
        {
            lastName=name2;
        }else{
            lastName=null;
        }
    
        if(job!=null)
        {
            divFolder.querySelector("[purpose=role]").innerHTML = job
            console.log("success")
        }else{
            divFolder.querySelector("[purpose=role]").innerHTML = null
        }
            
        if(dept!=null)
        {
            divFolder.querySelector("[purpose=department]").innerHTML = dept
            console.log("success dept")
        }else{
            divFolder.querySelector("[purpose=department]").innerHTML = null
        }
    
    
            let divName = divFolder.querySelector("[purpose=name]")
            divName.innerHTML = firstName + " " + lastName
    
            
            container.appendChild(divFolder)
            document.getElementById("detailsForm").reset();
            modal.style.display = 'none';
        })
    
    closeModal.addEventListener('click', function(){
        document.getElementById("detailsForm").reset();
        modal.style.display = 'none';
    })
    
    window.addEventListener('click', function(e){
        if(e.target == modal)
        {
            document.getElementById("detailsForm").reset();
            modal.style.display = 'none';
        }
 })
 
 })()