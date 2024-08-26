	// Javascript Program to convert prefix to postfix
	
	// function to check if character
	// is operator or not
	function isOperator(x)
	{
		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}
	
	// Convert prefix to Postfix expression
	function preToPost(pre_exp)
	{

		let s = [];
        console.log(s)
		// length of expression
		let length = pre_exp.length;

		// reading from right to left
		for (let i = length - 1; i >= 0; i--)
		{
            console.log(pre_exp[i])
			// check if symbol is operator
            //1st time loop , s is empty and 
            //the char is not operator as its postfix ,so saves in s array .
			if (isOperator(pre_exp[i]))
			{
				// pop two operands from stack
                // console.log(s)
                 //the char is not operator as its postfix ,so saves in s array , so will have operands at the end
				let op1 = s[s.length - 1];
                // console.log(s[s.length - 1])
				s.pop();

                console.log(s[s.length - 1])
				let op2 = s[s.length - 1];
				s.pop();

				// concat the operands and operator
				let temp = op1 + op2 + pre_exp[i];

				// Push String temp back to stack
				s.push(temp);
			}

			// if symbol is an operand
			else {
				// push the operand to the stack
				s.push(pre_exp[i] + "");
			}
		}

		// stack contains only the Postfix expression
		return s[s.length - 1];
	}
	
	let pre_exp = "*-A/BC-/AKL";

	console.log("Postfix : " + preToPost(pre_exp));
