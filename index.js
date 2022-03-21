(function(){
    let modal = document.querySelector('.addEmployee-modal')
    let btnAddEmployee = document.querySelector("#btnAddEmployee")
    let closeModal = document.querySelector("#closeModal")
    let btnModalAddEmployee = document.querySelector('#btnModalAddEmployee')
    let container = document.querySelector('.list-view')
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
    let rid = resources.length
 
 
    let filterResources = []
 
    let deptUl = document.querySelector(".dept-ul")
    let depLi = deptUl.querySelectorAll(".dept-li")
 
    for(let i=0; i<depLi.length; i++){
 
     depLi[i].addEventListener("click", function(){
 
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
 
         for(var j=0; j<totalDepartments.length; j++)
         {
             if(deptFilter==totalDepartments[j].innerHTML.toUpperCase())
             {
                         totalDepartments[j].parentElement.parentElement.style.display = ""
                         filterResources.push(totalDepartments[j].innerHTML)
                         console.log(filterResources)
             }else{
                         totalDepartments[j].parentElement.parentElement.style.display = "none"
                  }
         }
         })
 
 }
 
 
 
    let btnGroup = document.querySelector(".btns")
    let btns = btnGroup.querySelectorAll(".btn");
 
    //console.log(btns[0].innerHTML + " btn visible " + btns.length)
 
 for(let i=0; i<btns.length; i++){
     btns[i].addEventListener("click", function(){
         
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
 
 
 
 
    btnAddEmployee.addEventListener('click', function(){
        modal.style.display = 'block';
 
        let divFolderTemplate = templates.content.querySelector(".employee-view")
         divFolder = document.importNode(divFolderTemplate, true)
 
         // let divName = divFolder.querySelector("[purpose=name]")
         // divName.innerHTML = firstName + " " + lastName
 
         // let divRole = divFolder.querySelector("[purpose=role]").innerHTML
         // divRole.innerHTML = 
         //container.appendChild(divFolder)
        console.log(firstName + " in btnAddEmployee");
    })
 
    btnModalAddEmployee.addEventListener('click', insideBtnModalAddEmployee) 
    
    function insideBtnModalAddEmployee(){
             const name1 = document.getElementById('first-name').value;
             const name2 = document.getElementById('last-name').value;
             const email = document.getElementById('email').value;
             const job = document.getElementById('job-title').value;
             const office = document.getElementById('office').value;
             const dept = document.getElementById('department').value;
             const phno = document.getElementById('phn-number').value;
             const skypeID = document.getElementById('skype-id').value;
 
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
                 jobRole = job
                 console.log("success")
             }else{
                 jobRole = null
             }
             
             if(dept!=null)
             {
                 deptName = dept
                 console.log("success dept")
             }else{
                 deptName = null
             }
 
 
                 let divName = divFolder.querySelector("[purpose=employeeName]")
                 divName.innerHTML = firstName + " " + lastName
 
                 let divRole = divFolder.querySelector("[purpose=role]")
                 divRole.innerHTML = jobRole
 
                 let divDept = divFolder.querySelector("[purpose=department]")
                 divDept.innerHTML = deptName
 
                 resources.push({rid, name1, name2, email, job, office, dept, phno, skypeID});
                 saveToStorage();
                 rid++
             container.appendChild(divFolder)
             document.getElementById("detailsForm").reset();
             modal.style.display = 'none';
    }
 
    closeModal.addEventListener('click', function(){
     document.getElementById("detailsForm").reset();
     modal.style.display = 'none';
 })
 
     function createEmployeeOnLoad(rname1, rname2, email, job, dept, office, phno, skypeID)
     {
         let divFolderTemplate = templates.content.querySelector(".employee-view")
         divFolder = document.importNode(divFolderTemplate, true)
 
 
 
         let name = divFolder.querySelector("[purpose=employeeName]")
         name.innerHTML = rname1 + " " + rname2
 
         let role = divFolder.querySelector("[purpose=role]")
         role.innerHTML = job
 
         let deptName = divFolder.querySelector("[purpose=department]")
         deptName.innerHTML = dept
 
         container.appendChild(divFolder)
     }
 
     // console.log(resources.)
     /* Search functionality */
     // let employeeJson = localStorage.getItem("data")
     // let employees = JSON.parse(employeeJson)
     const searchFun = () =>{
     let key = document.getElementById('searchInput').value.toUpperCase()
     let list = document.querySelector('.list-view')
 
     let names = list.querySelectorAll("[purpose=employeeName]")
     let jobRoles = list.querySelectorAll("[purpose=role]")
     let depts = list.querySelectorAll("[purpose=department]")
 
     for(var i=0; i<names.length; i++)
     {
         let name = names[i].innerHTML
         let job = jobRoles[i].innerHTML
         let dept = depts[i].innerHTML
 
         if(name)
         {
             if(name.toUpperCase().indexOf(key) > -1)
             {
                 names[i].parentElement.parentElement.style.display = ""
             }else{
                 names[i].parentElement.parentElement.style.display = "none"
             }
         }
 
         // if(job)
         // {
         //     if(job.toUpperCase().indexOf(key) > -1)
         //     {
         //         jobRoles[i].parentElement.parentElement.style.display = ""
         //     }else{
         //         jobRoles[i].parentElement.parentElement.style.display = "none"
         //     }
         // }
 
         // if(dept)
         // {
         //     if(dept.toUpperCase().indexOf(key) > -1)
         //     {
         //         depts[i].parentElement.parentElement.style.display = ""
         //     }else{
         //         depts[i].parentElement.parentElement.style.display = "none"
         //     }
         // }
     
     }
 
     }
 
     let searchBox =document.getElementById('searchInput')
     searchBox.onkeyup = searchFun
 
 window.addEventListener('click', function(e){
     if(e.target == modal)
     {
         document.getElementById("detailsForm").reset();
         modal.style.display = 'none';
     }
 })
     function saveToStorage(){
         let rjson = JSON.stringify(resources); // used to convert json to a json string which can be saved
         localStorage.setItem("data", rjson);
     }
 
     function loadFromStorage(){
     
         let rjson = localStorage.getItem("data");
         if(!rjson){
             return;
         }
        
         resources = JSON.parse(rjson);
         console.log(resources[1].name2)
         for(let i = 0; i < resources.length; i++){
         {
             createEmployeeOnLoad(resources[i].name1, resources[i].name2, resources[i].email, resources[i].job, resources[i].dept,
                 resources[i].office, resources[i].phno, resources[i].skypeID);
         }
 
             // if(resources[i].rid > rid){
             //     rid = resources[i].rid;
             // }
         }
     }
 
     loadFromStorage();
 
 })()