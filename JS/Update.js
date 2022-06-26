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

function createUPDATERecordRequest(token, jsonObj, dbName, relName, reqId) {
var req = "{\n"
    + "\"token\" : \""
    + token
    + "\","
    + "\"dbName\": \""
    + dbName
    + "\",\n" + "\"cmd\" : \"UPDATE\",\n"
    + "\"rel\" : \""
    + relName
    + "\",\n"
    + "\"jsonStr\":{ \""
    + reqId
    + "\":\n"
    + jsonObj
    + "\n"
    + "}}";
return req;
}

function resetForm() {
    $("#empName").val("")
    $("#empId").val("");
    $("#empName").focus();
    }

function UpdateEmployee(){
    var token = " 90938395|-31948828673309130|90947073";
    var dbname = "EmployeeDetail";
    var relationName = "Emp-Detail";
    var empName = document.getElementById("empName").value;
    var empId = document.getElementById("empId").value;
    
    var jsonStr = {
        EmployeeId : empId
    };
    var reqString = createUPDATERecordRequest(token, JSON.stringify(jsonStr), dbname, relationName, empName);
    alert(reqString);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(reqString,
            "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});
    resetForm();
    alert(JSON.stringify(resultObj));
    
}






































































































// function createUPDATERecordRequest(connToken, jsonObj, dbName, relName) {
//     var putRequest = "{\n"
//             + "\"token\" : \""
//             + connToken
//             + "\","
//             + "\"dbName\": \""
//             + dbName
//             + "\",\n" + "\"cmd\" : \"UPDATE\",\n"
//             + "\"rel\" : \""
//             + relName + "\","
//             + "\"jsonStr\": \n"
//             + jsonObj
//             + "\n"
//             + "}";
//     return putRequest;
// }

// function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
//     var url = dbBaseUrl + apiEndPointUrl;
//     var jsonObj;
//     $.post(url, reqString, function (result) {
//         jsonObj = JSON.parse(result);
//     }).fail(function (result) {
//         var dataJsonObj = result.responseText;
//         jsonObj = JSON.parse(dataJsonObj);
//     });
//     return jsonObj;
// }
// function UpdateEmployee(){
//     var token = "90935905|-31948847828867486|90944554";
//     var dbname = "EmployeeData";
//     var relationName = "Emp-Data";
//     var empName = parseInt(document.getElementById("empName").value);
//     var empId = document.getElementById("empId").value;
    
//     var jsonObj = {
//         EmployeeId: empId,
//     };
//     var reqString = createUPDATERecordRequest(token, JSON.stringify(jsonObj), dbname, relationName, empName);
//     alert(reqString);
//     jQuery.ajaxSetup({async: false});
//     var resultObj = executeCommand(reqString,
//             "http://api.login2explore.com:5577", "/api/iml");
//     jQuery.ajaxSetup({async: true});
//     alert(JSON.stringify(resultObj));
    
// }