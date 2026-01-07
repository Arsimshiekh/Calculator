let input = "";

let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        let value = e.target.innerHTML;

        
        if (value === "=") {
            try {
                input = eval(input);
            } catch {
                input = "Error";
            }
        }

        else if (value === "C") {
            input = "";
        }

        else if (value === "Del") {
            input = input.slice(0, -1);
        }

      
        else if (value === "+/-") {
            if (input !== "") {
                input = String(-eval(input));
            }
        }

       
        else {
            input += value;
        }

        document.getElementById("input").value = input;
    });
});
