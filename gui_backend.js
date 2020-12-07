function sendChaosFormData(){
    var error = false;
    if(!(document.getElementById("chaos_radio_connection").checked||document.getElementById("chaos_radio_component").checked)){
        alert("choose connection/component");
        error = true;
    }
    if(document.getElementById("chaos_id").value == ""){
        alert("enter id");
        error = true;
    }
    if(!error){
        var dcnNode;
        if (document.getElementById("chaos_radio_connection").checked)
        dcnNode = "Connection";
        else
        dcnNode = "Component";
        var id = document.getElementById("chaos_id").value;
        axios.post('dummy-url', {
            dcnNode,
            id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
}
function sendStressTestingFormData(){
    var error = false;
    if(document.getElementById("stress_user_name").value == ""){
        alert("enter user name");
        error = true;
    }
    if(document.getElementById("stress_number_of_jobs").value == ""){
        alert("enter number of jobs");
        error = true;
    }
    if(document.getElementById("stress_duration_of_job").value == ""){
        alert("enter duration of jobs");
        error = true;
    }
    if(!error){
        var userName=document.getElementById("stress_user_name").value;
        var numJobs=document.getElementById("stress_number_of_jobs").value;
        var jobDuration=document.getElementById("stress_duration_of_job").value;
        axios.post('dummy-url', {
            userName,
            numJobs,
            jobDuration
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }   
}
function populateJobStatusTable(){
  const table = document.getElementById("job_status_table_body");

  let row = table.insertRow();
  let job = row.insertCell(0);
  job.innerHTML = "Job 1";
  let time = row.insertCell(1);
  time.innerHTML = "10";

  row = table.insertRow();
  job = row.insertCell(0);
  job.innerHTML = "Job 2";
  time = row.insertCell(1);
  time.innerHTML = "20";

  modifyJobStatus();
}

function populateServerStatusTable(){
  const table = document.getElementById("server_status_table_body");

  let row = table.insertRow();
  let server = row.insertCell(0);
  let cpu_usage = row.insertCell(1);
  let ram_usage = row.insertCell(2);
  server.innerHTML = "server 1";
  cpu_usage.innerHTML = "10";
  ram_usage.innerHTML = "20";
}

function modifyJobStatus(){
  var table= Array.prototype.slice.call(document.getElementById("job_status_table_body").rows, 0);
  table.forEach(element => {
    if(element.cells[0].innerHTML == "Job 1"){
      element.cells[1].innerHTML = 12;
    }
  });
}

function modifyCPUUsage(){
  var table = Array.prototype.slice.call(document.getElementById("server_status_table_body").rows, 0);
  table.forEach(element => {
    //do something
  });
}

function modifyRAMUsage(){
  var table = Array.prototype.slice.call(document.getElementById("server_status_table_body").rows, 0);
  table.forEach(element => {
    //do something
  });
}