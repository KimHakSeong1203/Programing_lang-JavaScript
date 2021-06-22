<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script>
	function a(a,b) {
			return a+b;
		} function b(a,b) {
			if(b>a) {
				return b-a;
			} return a-b;
		} function c(a,b) {
			return a*b;
		} function d(a,b) {
			return a/b;
		}

	var num1 = parseInt(prompt('첫 번째 수를 입력하시오'));
	var num2 = parseInt(prompt('두 번째 수를 입력하시오'));
	var res;
	var input = prompt('연산 기호 또는 연산을 입력하시오');

	if(input == "+" || input == "더하기") {
		res = a(num1, num2);
	} else if(input == "-" || input == "빼기") {
		res = b(num1, num2);
	} else if(input == "*" || input == "곱하기") {
		res = c(num1, num2);
	} else if(input == "/" || input == "나누기") {
		res = d(num1, num2);
	} 

	if(input == "" || num1 == "" || num2 == "") {
		document.write("다시 입력하시오");
	} else if((input == "-" || input == "빼기") && num2 > num1) {
		document.write(num2 +" "+ input+" " +num1 + "의 결과는 " +res+ "입니다.");
	} else {
		document.write(num1 +" "+ input+" " +num2 + "의 결과는 " +res+ "입니다.");
	}
</script>
</body>
</html>