<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script>
	function returnValue(a,b) {
		var max = a>b ? a:b;
		return max;
	}

	var num1 = parseInt(prompt('비교할 첫 번째 숫자'));
	var num2 = parseInt(prompt('비교할 두 번째 숫자'));
	var res = returnValue(num1, num2);

	if(num1 === num2) {
		document.write("같습니다.");
	} else if(num1 === res) {
		document.write(num1+"(이)가 "+num2+"보다 큽니다.");
	} else if(num2 === res) {
		document.write(num2+"(이)가 "+num1+"보다 큽니다.");
	} 
</script>
</body>
</html>