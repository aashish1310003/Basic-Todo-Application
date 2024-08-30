<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html>
<head>
    <title>Welcome to the great karikalm magic page</title>
    <link href="webjars/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.standalone.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>Enter Todo details</h1>
        <form:form class="form"  method="post" modelAttribute="todo">
            <div>
                <label for="id">id:</label>
                <form:input type="text" path="id" required="required"/>
            </div>
            <div>
                <label for="username">name:</label>
                <form:input type="text" value="" path="username"/>
            </div>
            <div>
                <label for="description">Description:</label>
                <form:input type="text" path="description"/>
            </div>
            <div>
                <label>True:</label>
                <form:radiobutton path="done" value="True"/>
            </div>
            <div>
                <label>False:</label>
                <form:radiobutton path="done" value="False"/>
            </div>
            <div>
                <input type="submit" value="submit" class="btn btn-success"/>
            </div>
        </form:form>
    </div>
</body>
</html>
