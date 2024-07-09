<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>심플계산기</title>
  <style type="text/css">
     body{
        text-align: center;
     } 

  </style>
</head>
<!--  calcForm.jsp -->
<body>
  <h3>jQuery심플계산기</h3>
  <hr>
  <form name="calcForm" method="post" action="calcResult.jsp">
	  <input type="text" name="su1" size="5">
	  +
	  <input type="text" name="su2" size="5">
	  <button type="submit">계산</button><br>
  </form>
</body>
</html>




