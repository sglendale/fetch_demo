// Define functions ahead of calls

    function json_fetcher()
    {   
        // Contruct fetch parameters
        const resourceURL = "http://localhost:56789/json";
        const options = 
            {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'content-type' : "application/json; charset=UTF-8",
                    // Authorizaation typically goes here
                },
                body: null
            }

        // Pass parameters to fetch
        try 
        {
            fetch(resourceURL, options)
            .then(async function (response, err){
                if(response.ok)
                {
                    return response.json();
                }
                else
                {
                    throw err;
                }
            }).then(function(data){
                var tableData = document.getElementById('response_json');
                tableData.innerHTML = "name: " + data.name + "; age: " + data.age;
            });
        }
        catch(err)
        {
            console.log("The following error occured while trying to fetch: ", err);
        }
    }

    // Get elemenets from index.html (for example, username input area and password input area)
    var clicker = document.getElementById('clicker');

    //  Register handlers (for example, user clicks "submit" on login page)
    clicker.addEventListener('click', json_fetcher);
