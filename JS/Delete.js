function createREMOVERecordRequest(token, dbName, relName, reqId) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"REMOVE\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"record\":"
            + reqId
            + "\n"
            + "}";
    return req;
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

        function deleteEmployee(){
            var token = "90938395|-31948828673309130|90947073";
            var dbname = "EmployeeDetail";
            var relationName = "Emp-Detail";
            var empId = parseInt(document.getElementById("empId").value);

            var reqString = createREMOVERecordRequest(token, dbname, relationName, empId );
            alert(reqString);
            
            jQuery.ajaxSetup({async: false});
            var resultObj = executeCommand(reqString,
                    "http://api.login2explore.com:5577", "/api/iml");
            jQuery.ajaxSetup({async: true});
            alert( "VALUE DELETED"+ JSON.stringify(resultObj));
            
        }