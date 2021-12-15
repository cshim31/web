<h1> Tool commands </h1>
<p> run python virtual environment </p>

    .\pythonenv\scripts\activate.bat

<p> run node virtual environment </p>

    .\nodeenv\scripts\activate.bat

<p> deactivate node virtual environment </p>


    .\nodeenv\scripts\deactivate.bat


<p> Install a tool that can install a pre-build npm(1) version. </p>

    pip install nodeenv  

<p> Run tool to install npm(1) in current Python venv.</p>

    nodeenv -p           


<h1> Server commands </h1>
<p> start backend </p>

    python manage.py runserver

<p> start frontend </p>

    npm start