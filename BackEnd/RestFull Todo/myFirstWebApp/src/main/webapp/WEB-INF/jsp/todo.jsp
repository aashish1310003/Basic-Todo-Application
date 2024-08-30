<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Welcome to the great todo magic page</title>
</head>
<body>
my second html page with body - jsp
    <div>my name : ${todo}</div>
    <h2>Todo List:</h2>
    <table border="1">
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Description</th>
        <th>Done</th>
    </tr>
    <c:forEach item="${todos}" var = "todo">
        <tr>
            <td>${todo.id}</td>
            <td>${todo.username}</td>
            <td>${todo.description}</td>
            <td>${todo.done}</td>
        </tr>
    </c:forEach>
     </table>
</body>
</html>