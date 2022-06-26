function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}

function resetForm() {
    $("#empId").val("")
    $("#empId").focus();
    }

function showEmployee(){
    var token = "90938395|-31948828673309130|90947073";
    var dbname = "EmployeeDetail";
    var relationName = "Emp-Detail";
    var empId = document.getElementById("empId").value;
    var jsonStr = {
        EmployeeId : empId
    };
    var reqString = createGETRequest(token, dbname, relationName, JSON.stringify(jsonStr));
    alert(reqString);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(reqString,
            "http://api.login2explore.com:5577", "/api/irl");
    jQuery.ajaxSetup({async: true});
    
    var data = JSON.stringify(resultObj);
    
    var res = data.split("\"");
    var mainContainer = document.getElementById("show");
    mainContainer.innerHTML = "EmployeePlace : " + res[18].replace("\\","") + "      EmployeeSalary : " + res[10].replace("\\","")
        + "     EmployeeId : " + res[22].replace("\\","") + "        EmployeeEmail : " + res[14].replace("\\", ""); 
    resetForm();
    
}