<!DOCTYPE html>
<html>
<head>
	<title></title>
	<mate charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<script>
	function sumMulti(a,b) {
		if(a==b) {
			return a*b;
		} else if(a!=b) {
			return a+b;
		}
	}

	var num1 = parseInt(prompt('첫 번째 수를 입력하시오'));
	var num2 = parseInt(prompt('두 번째 수를 입력하시오'));
	var res = sumMulti(num1, num2);

	if(num1 != "" && num2 != "") {
		document.write(res);
	} else {
		document.write("다시 입력하세요");
	}
</script>
</body>
</html>