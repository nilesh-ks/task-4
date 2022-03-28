(function(){
    let modal = document.querySelector('.addEmployee-modal')
    let btnAddEmployee = document.querySelector("#btnAddEmployee")
    let closeModal = document.querySelector("#closeModal")
    let btnModalAddEmployee = document.querySelector('#btnModalAddEmployee')
    let container = document.querySelector('.list-view')
    let emptyField = document.querySelector(".foundEmpty")
    let closeDetailsModal = document.querySelector("#closeDetailsModal")
    let addEmployeeModalTitle = document.querySelector(".modal-title")
    let btnUpdateEmployee = document.querySelector("#btnUpdateEmployee")
    //Details Modal
    let detailsModal = document.querySelector('.details-view')
 
 
    var firstName = ""
    var lastName = ""
    var email = ""
    var jobRole = ""
    var office = ""
    var deptName = ""
    var phno = ""
    var skypeID = ""
    let divFolder=""
    let resources=[]
    
 
 
    //let filterResources = []
 
 
    /* Filter by department lists*/
    let deptUl = document.querySelector(".dept-ul")
    let depLi = deptUl.querySelectorAll(".dept-li")
   
    //to make filter list's font normal, we need to use a common variable to make it normal again on clicking button groups
    let boldButton = "" 
    for(let i=0; i<depLi.length; i++){
 
     depLi[i].addEventListener("click", function(){
             boldButton = depLi[i]
             filterResources = []
             depLi[i].style.fontWeight = "bold"
             
             let deptFilter = depLi[i].innerHTML.toUpperCase() //name of the particular department
             
             for(var k=0; k<depLi.length; k++)
             {
                 if(k!=i){
                 depLi[k].style.fontWeight = "normal"
                 }
             }
             let totalDepartments = container.querySelectorAll("[purpose=department]") //total departments
             console.log(totalDepartments.length)
             for(var j=0; j<totalDepartments.length; j++)
             {
                 if(deptFilter==totalDepartments[j].innerHTML.toUpperCase())
                 {
                             totalDepartments[j].parentElement.parentElement.style.display = ""
                             filterResources.push(totalDepartments[j])
                             console.log(filterResources)
                 }else{
                             totalDepartments[j].parentElement.parentElement.style.display = "none"
                     }
         }
 
         })
 
 }
         
     /* Filter name by alphabets */
    let btnGroup = document.querySelector(".btns")
    let btns = btnGroup.querySelectorAll(".btn");
 
 
         for(let i=0; i<btns.length; i++){
             btns[i].addEventListener("click", function(){
                 boldButton.style.fontWeight = "normal"
                 console.log("btn clicked " + btns[i].innerHTML)
                 let key = btns[i].innerHTML
                 let names = container.querySelectorAll("[purpose=employeeName]")
 
                 for(var j=0; j<names.length; j++)
                 {
                     let name = names[j].innerHTML
                     if(i==0)
                     {
                         container.innerHTML = ""
                         loadFromStorage();
                     }else
                     {
                         console.log("clicked button group")
                         if(name)
                         {
                             if(name.toUpperCase().indexOf(key) == 0)
                             {
                                 names[j].parentElement.parentElement.style.display = ""
                             }else{
                                 names[j].parentElement.parentElement.style.display = "none"
                             }
                         }
                     }
                 }
             })
         }
 
 
 
         /* Add employee button */ 
     btnAddEmployee.addEventListener('click', function(){
        modal.style.display = 'block';
 
        let divFolderTemplate = templates.content.querySelector(".employee-view")
         divFolder = document.importNode(divFolderTemplate, true)
 
         // btnModalAddEmployee.innerHTML ="Add Employee"
         addEmployeeModalTitle.innerHTML = "Add New Employee"
         // let view = divFolder.querySelector("[action=view]")
         // view.addEventListener("click", createDetailsModal)
 
         btnUpdateEmployee.style.display = "none"
        btnModalAddEmployee.style.display = 'block'
     
        console.log(firstName + " in btnAddEmployee");
    })
 
    /* Edit details modal */
    let editDetails = document.querySelector("#editDetailsModal")
    editDetails.addEventListener("click", function(){
        
 
        console.log("edit Details clicked")
        detailsModal.style.display = "none"
        //console.log(localStorage.getItem("rid"))
         let index = document.querySelector("#mid").innerHTML
         console.log(index + " employee needed")
        modal.style.display = "block"
        let employeeJson = localStorage.getItem("data")
        let employees = JSON.parse(employeeJson)
        //console.log(employees[0].name1)
        
        btnUpdateEmployee.style.display = "block"
        btnModalAddEmployee.style.display = 'none'
        
        addEmployeeModalTitle.innerHTML = "Update Employee Details"
 
     document.getElementById('first-name').value = employees[index].name1
     document.getElementById('last-name').value = employees[index].name2
     document.getElementById('email').value = employees[index].email
     document.getElementById('job-title').value = employees[index].job
     document.getElementById('office').value = employees[index].office
     document.getElementById('department').value = employees[index].dept
     document.getElementById('phn-number').value = employees[index].phno
     document.getElementById('skype-id').value = employees[index].skypeID
 
     // console.log(employees[index].name1)
     // employees[index].name1 = "Alisha"
     // let njson = JSON.stringify(employees)
     // localStorage.setItem("data", njson)
     
    btnUpdateEmployee.addEventListener("click",function(){
 
        let name1=document.getElementById('first-name').value
        let name2=document.getElementById('last-name').value
        let email=document.getElementById('email').value
        let job=document.getElementById('job-title').value
        let office=document.getElementById('office').value
        let dept=document.getElementById('department').value
        let phno=document.getElementById('phn-number').value
        let skypeid=document.getElementById('skype-id').value
 
        
     employees[index].name1 = name1
     employees[index].name2 = name2
     employees[index].email = email
     employees[index].job = job
     employees[index].office = office
     employees[index].dept = dept
     employees[index].phno = phno
     employees[index].skypeID = skypeid
             
     let njson = JSON.stringify(employees)
     localStorage.setItem("data", njson)
     modal.style.display="none"
     location.reload()
     })
     
     
        
    })
 
    /* Add employees button in employee modal */
    btnModalAddEmployee.addEventListener('click', insideBtnModalAddEmployee) 
    
    function insideBtnModalAddEmployee(){
 
     console.log(firstName + " in btnModalAddEmployee");
             const name1 = document.getElementById('first-name').value;
             const name2 = document.getElementById('last-name').value;
             const email = document.getElementById('email').value;
             const job = document.getElementById('job-title').value;
             const office = document.getElementById('office').value;
             const dept = document.getElementById('department').value;
             const phno = document.getElementById('phn-number').value;
             const skypeID = document.getElementById('skype-id').value;
             const mid = resources.length
 
             if(!name1 || !name2 || !email || !job || !office || !dept || !phno || !skypeID)
             {
                 emptyField.style.display = "block"
             }else
             {
 
                     console.log("Hi " + name1 + " " + job + " " + dept)
                     if(name1!=null)
                     {
                         firstName=name1;
                         console.log(firstName)
                     }
 
                     if(name2!=null)
                     {
                         lastName=name2;
                     }
 
                     if(job!=null)
                     {
                         jobRole = job
                         console.log("success")
                     }
                     
                     if(dept!=null)
                     {
                         deptName = dept
                         console.log("success dept")
                     }
                     if(phno!=null)
                     {
                         let contact = divFolder.querySelector("[purpose=phone]")
                         contact.innerHTML = phno
                         console.log(contact.innerHTML)
                     }
                     if(email!=null)
                     {
                         let mail = divFolder.querySelector("[purpose=mail]")
                         mail.innerHTML = email
                         console.log(mail.innerHTML)
                     }
 
 
                         let divName = divFolder.querySelector("[purpose=employeeName]")
                         divName.innerHTML = firstName + " " + lastName
 
                         let divRole = divFolder.querySelector("[purpose=role]")
                         divRole.innerHTML = jobRole
 
                         let divDept = divFolder.querySelector("[purpose=department]")
                         divDept.innerHTML = deptName
                         let rid = resources.length
                         //divFolder.id = "" + rid
                         divFolder.setAttribute("tid", rid)
                         resources.push({rid, name1, name2, email, job, office, dept, phno, skypeID});
                         saveToStorage();
                         //divFolderArray.push(divFolder)
                         console.log(divFolder.getAttribute("tid"))
                         console.log(divName.innerHTML + " divFolder working")
                         let view = divFolder.querySelector("[action=view]")
                         console.log("view created")
                         view.addEventListener("click", function(){
                             console.log("View is now clickable")
 
                             console.log("Inside create details" + name1 + " " + name2 )
                             document.querySelector("#mid").innerHTML = mid
                             
                             document.querySelector("#name-view").innerHTML = name1 + " " + name2
                             document.querySelector("#email-view").innerHTML = email
                             document.querySelector("#job-view").innerHTML = job
                             document.querySelector("#office-view").innerHTML = office
                             document.querySelector("#dept-view").innerHTML = dept
                             document.querySelector("#phno-view").innerHTML = phno
                             document.querySelector("#skype-view").innerHTML = skypeID
                             detailsModal.style.display = "block"
 
                             console.log("view already created, doesn't work for editing")
                         })
 
                         
                     container.appendChild(divFolder)
                     console.log(container.childNodes)
                     document.getElementById("detailsForm").reset();
                     emptyField.style.display = "none"
                     modal.style.display = 'none';
                 }
    }
 
    /* Close employee modal */
    closeModal.addEventListener('click', function(){
     document.getElementById("detailsForm").reset();
     emptyField.style.display = "none"
     modal.style.display = 'none';
     
 })
 
     // let employeeDetails = container.querySelectorAll(".employee-view")
     // console.log(employeeDetails.length)
     //.log(divFolderArray.length + " divFolderArray")
 
     closeDetailsModal.addEventListener("click", function(){
         //document.getElementById("detailsForm").reset();
         // emptyField.style.display = "none"
         detailsModal.style.display = 'none';
     })
 
     /* Close details modal on clicking anywhere */
     window.addEventListener('click', function(e){
         if(e.target == detailsModal)
         {
             //document.getElementById("detailsModal").reset();
             detailsModal.style.display = 'none';
         }
     })
 
     /* Create Employees after reloading the web page */ 
     function createEmployeeOnLoad(rid, rname1, rname2, email, job, dept, office, phno, skypeID)
     {
         let divFolderTemplate = templates.content.querySelector(".employee-view")
         divFolder = document.importNode(divFolderTemplate, true)
         let view = divFolder.querySelector("[action=view]")
         console.log("view created")
         view.addEventListener("click", function()
         {
             console.log("View is now clickable")
             console.log("Inside create details" + rname1 + " " + rname2 )
             document.querySelector("#mid").innerHTML = rid
             document.querySelector("#name-view").innerHTML = rname1 + " " + rname2
             document.querySelector("#email-view").innerHTML = email
             document.querySelector("#job-view").innerHTML = job
             document.querySelector("#office-view").innerHTML = office
             document.querySelector("#dept-view").innerHTML = dept
             document.querySelector("#phno-view").innerHTML = phno
             document.querySelector("#skype-view").innerHTML = skypeID
             detailsModal.style.display = "block"
         })
 
         divFolder.id = "" + rid
         let name = divFolder.querySelector("[purpose=employeeName]")
         name.innerHTML = rname1 + " " + rname2
 
         let role = divFolder.querySelector("[purpose=role]")
         role.innerHTML = job
 
         let deptName = divFolder.querySelector("[purpose=department]")
         deptName.innerHTML = dept
 
         container.appendChild(divFolder)
     }
 
 
     let filterByDropdown = document.querySelector('#myList')
     let btnClear = document.getElementById('btnClear')
     let selectedFilter = ""
     let filterBasisOption = []
     filterByDropdown.addEventListener("click", function(){
         searchBox.value=""
         console.log('Inside filterBy function')
         console.log(filterByDropdown.options[filterByDropdown.selectedIndex].text)
         selectedFilter = filterByDropdown.options[filterByDropdown.selectedIndex].text
     })
 
     btnClear.addEventListener("click", function(){
         console.log("inside clear button")
         searchBox.value=""
 
     })
     
     /* Search functionality */
     const searchFun = () =>{
     let key = document.getElementById('searchInput').value.toUpperCase()
     let list = document.querySelector('.list-view')
 
     let names = list.querySelectorAll("[purpose=employeeName]")
     let jobRoles = list.querySelectorAll("[purpose=role]")
     let depts = list.querySelectorAll("[purpose=department]")
 
     if(selectedFilter == "Department")
     {
         filterBasisOption = depts
 
     }else if(selectedFilter == "Job Title")
     {
         filterBasisOption = jobRoles
     }
 
     let searchBy = ""
     for(var i=0; i<filterBasisOption.length; i++)
     {
 
         let name = names[i].innerHTML
         let job = jobRoles[i].innerHTML
         let dept = depts[i].innerHTML
         if(selectedFilter == "Department")
         {
             searchBy = dept
         }else if(selectedFilter == "Job Title")
         {
             searchBy = job
         }
 
         if(searchBy)
         {
             if(searchBy.toUpperCase().indexOf(key) > -1)
             {
                 filterBasisOption[i].parentElement.parentElement.style.display = ""
             }else{
                 filterBasisOption[i].parentElement.parentElement.style.display = "none"
             }
         }
     }
 
     }
 
 
     /* Search box */
     let searchBox =document.getElementById('searchInput')
     searchBox.onkeyup = searchFun
 
 
     /* Close modal on clicking anywhere */
     window.addEventListener('click', function(e){
         if(e.target == modal)
         {
             
             document.getElementById("detailsForm").reset();
             modal.style.display = 'none';
             emptyField.style.display = "none"
         }
         if(e.target == depLi)
         {
             console.log("Department list's form made normal")
             depLi.style.fontWeight = "normal"
         }
     })
     function saveToStorage(){
         let rjson = JSON.stringify(resources); // used to convert json to a json string which can be saved
         localStorage.setItem("data", rjson);
     }
 
     /* Load resources from storage */
     function loadFromStorage(){
     
         let rjson = localStorage.getItem("data");
         if(!rjson){
             return;
         }
        
         resources = JSON.parse(rjson);
         console.log("before removing ")
 
         //console.log("Removing " + JSON.stringify(resources.splice(1,1)))
         //resources.splice(1,1)
         
         //console.log(resources[1].name2)
         for(let i = 0; i < resources.length; i++){
         {
             createEmployeeOnLoad(resources[i].rid, resources[i].name1, resources[i].name2, resources[i].email, resources[i].job, resources[i].dept,
                 resources[i].office, resources[i].phno, resources[i].skypeID);
         }
 
             // if(resources[i].rid > rid){
             //     rid = resources[i].rid;
             // }
         }
     }
 
     loadFromStorage();
 
 })()