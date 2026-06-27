let projects = JSON.parse(localStorage.getItem("projects")) || [];

displayProjects();

function addProject(){

    const projectName=document.getElementById("projectName").value;
    const managerName=document.getElementById("managerName").value;
    const status=document.getElementById("status").value;

    if(projectName==="" || managerName==="" || status===""){

        alert("Enter all fields");
        return;

    }

    projects.push({

        projectName:projectName,
        managerName:managerName,
        status:status

    });

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    document.getElementById("projectName").value="";
    document.getElementById("managerName").value="";
    document.getElementById("status").value="";

    displayProjects();

}

function deleteProject(index){

    projects.splice(index,1);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    displayProjects();

}

function displayProjects(){

    const table=document.getElementById("projectTable");

    table.innerHTML="";

    projects.forEach((project,index)=>{

        table.innerHTML+=`

        <tr>

        <td>${project.projectName}</td>

        <td>${project.managerName}</td>

        <td>${project.status}</td>

        <td>

        <button onclick="deleteProject(${index})">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

    document.getElementById("totalProjects").innerText=projects.length;

}