function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
    return putRequest;
}

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
    $("#empName").val("")
    $("#empId").val("");
    $("#empEmail").val("");
    $("#empMobile").val("");
    $("#empPlace").val("");
    $("#empSalary").val("");
    $("#empName").focus();
    }


function validateAndGetFormData() {
            
    var empName = document.getElementById("empName").value;
    var empId = document.getElementById("empId").value;
    var empEmail = document.getElementById("empEmail").value;
    var empMobile = document.getElementById("empMobile").value;
    var empPlace = document.getElementById("empPlace").value;
    var empSalary = document.getElementById("empSalary").value;
    
    var jsonStrObj = {
        EmployeeName: empName,
        EmployeeId: empId,
        EmployeeEmail: empEmail,
        EmployeeMobile: empMobile,
        EmployeePlace: empPlace,
        EmployeeSalary: empSalary,
    };
    return JSON.stringify(jsonStrObj);
}


function registerEmployee() {

    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90938395|-31948828673309130|90947073",
            jsonStr, "EmployeeDetail", "Emp-Detail");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,
            "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});
    resetForm();
    alert( "INSERTED "+JSON.stringify(resultObj));

}