<script>
    function laadDocument()
    {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("bericht").innerHTML = this.responseText;
            }
        };

        // GET request
        xhttp.open("GET", "mijnscript.php?naam=Jan&leeftijd=45", true);
        xhttp.send();

        // POST request
        //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //xhttp.send("naam=Jan&leeftijd=45");
    }
</script>
