<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html>
<head>
    <title>Welcome to the great todo magic page</title>
    <%-- <link rel="stylesheet" href="webjars/bootstrap/5.1.3/css/bootstrap.min.css"> --%>
    <link href="webjars/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.standalone.min.css" rel="stylesheet" >
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
my second html page with body - jsp

<div>size : ${size}</div>
<div class="container">
<div>size : ${todo}</div>
<h2>Todo List:</h2>
<table border="1" class="active-table-tab table">
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Description</th>
        <th>Done</th>
        <th>Delete</th>
        <th>UPDATE </th>
    </tr>
    <c:forEach items="${todo}" var="todo">
        <tr>
            <td>${todo.id}</td>
            <td>${todo.username}</td>
            <td>${todo.description}</td>
            <td>${todo.done}</td>
            <td> <a href="delete-todo?id=${todo.id}" class="btn btn-warning">DELETE</a></td>
            <td> <a href="update-todo?id=${todo.id}" class="btn btn-success">UPDATE</a></td>
        </tr>
    </c:forEach>
</table>

    <a href="addTodo" class="btn btn-success">Add todo</a>
</div>
</body>
</html>
